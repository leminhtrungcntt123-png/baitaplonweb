let allHistory = [];
let filteredHistory = [];
let selectedItems = new Set();
let currentPage = 1;
const itemsPerPage = 20;

// Format timestamp
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return 'Vừa xong';
    if (diff < 3600000) return `${Math.floor(diff / 60000)} phút trước`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)} giờ trước`;
    if (diff < 604800000) return `${Math.floor(diff / 86400000)} ngày trước`;
    
    return date.toLocaleDateString('vi-VN', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Format thời gian
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Load lịch sử từ localStorage
function loadHistory() {
    try {
        const historyData = localStorage.getItem('musicHistory');
        allHistory = historyData ? JSON.parse(historyData) : [];
        
        // Loại bỏ các mục trùng lặp: chỉ giữ lần nghe gần nhất của mỗi bài hát
        allHistory = deduplicateHistory(allHistory);
        
        filteredHistory = [...allHistory];
        
        updateUI();
        renderHistory();
    } catch (error) {
        console.error('Lỗi khi load lịch sử:', error);
        showNotification('❌ Lỗi khi tải lịch sử', 'error');
    }
}

// Loại bỏ các mục trùng lặp trong lịch sử (giữ lần nghe gần nhất)
function deduplicateHistory(history) {
    const seen = new Map();
    const deduplicated = [];
    
    for (let item of history) {
        const key = item.id || item.title; // Dùng id hoặc title làm khóa
        
        if (!seen.has(key)) {
            // Lần đầu tiên gặp bài này: thêm vào kết quả
            seen.set(key, true);
            deduplicated.push(item);
        }
        // Nếu đã thấy rồi: bỏ qua (giữ lần nghe gần nhất ở vị trí đầu)
    }
    
    return deduplicated;
}

// Filter lịch sử
function filterHistory() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const dateFilter = document.getElementById('dateFilter').value;
    
    filteredHistory = allHistory.filter(item => {
        // Search filter
        const matchSearch = !searchQuery || 
            item.title.toLowerCase().includes(searchQuery) ||
            item.artist.toLowerCase().includes(searchQuery);
        
        // Date filter
        let matchDate = true;
        if (dateFilter !== 'all') {
            const now = Date.now();
            const diff = now - item.timestamp;
            
            switch(dateFilter) {
                case 'today':
                    matchDate = diff < 86400000; // 24 hours
                    break;
                case 'week':
                    matchDate = diff < 604800000; // 7 days
                    break;
                case 'month':
                    matchDate = diff < 2592000000; // 30 days
                    break;
            }
        }
        
        return matchSearch && matchDate;
    });
    
    currentPage = 1;
    updateUI();
    renderHistory();
}

// Render lịch sử
function renderHistory() {
    const historyList = document.getElementById('historyList');
    const emptyState = document.getElementById('emptyState');
    const pagination = document.getElementById('pagination');
    
    if (filteredHistory.length === 0) {
        historyList.innerHTML = '';
        emptyState.classList.remove('hidden');
        pagination.classList.add('hidden');
        
        // Cập nhật message empty state
        const searchQuery = document.getElementById('searchInput').value;
        const dateFilter = document.getElementById('dateFilter').value;
        
        if (searchQuery || dateFilter !== 'all') {
            document.getElementById('emptyTitle').textContent = 'Không tìm thấy kết quả';
            document.getElementById('emptyDesc').textContent = 'Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm';
        } else {
            document.getElementById('emptyTitle').textContent = 'Bạn chưa nghe bài hát nào';
            document.getElementById('emptyDesc').textContent = 'Bắt đầu khám phá âm nhạc ngay!';
        }
        return;
    }
    
    emptyState.classList.add('hidden');
    
    // Pagination
    const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredHistory.length);
    const pageItems = filteredHistory.slice(startIndex, endIndex);
    
    // Render items
    historyList.innerHTML = pageItems.map((item, index) => `
        <div class="history-item flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border ${selectedItems.has(item.timestamp) ? 'border-violet-500' : 'border-white/5'} hover:bg-slate-800 transition-all group" style="animation-delay: ${index * 0.05}s">
            <input 
                type="checkbox" 
                ${selectedItems.has(item.timestamp) ? 'checked' : ''}
                onchange="toggleSelect(${item.timestamp})"
                class="w-5 h-5 rounded accent-violet-500 cursor-pointer">
            
            <img src="${item.cover}" alt="${item.title}" 
                 class="w-16 h-16 rounded-lg object-cover shadow-lg">
            
            <div class="flex-1 min-w-0">
                <h3 class="font-bold text-white truncate mb-1">${item.title}</h3>
                <p class="text-sm text-slate-400 truncate mb-2">${item.artist}</p>
                <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span class="flex items-center gap-1">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        ${formatTimestamp(item.timestamp)}
                    </span>
                    <span>•</span>
                    <span>Nghe ${formatTime(item.listenDuration || item.duration)}</span>
                </div>
            </div>

            <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onclick="playFromHistory('${encodeURIComponent(item.id || item.title)}')" 
                        class="p-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:scale-110 transition-transform shadow-lg"
                        title="Phát lại">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </button>
                <button onclick="deleteItem(${item.timestamp})" 
                        class="p-3 rounded-full bg-slate-700 text-slate-300 hover:bg-red-600 hover:text-white transition-all"
                        title="Xóa">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
    
    // Pagination controls
    if (totalPages > 1) {
        pagination.classList.remove('hidden');
        document.getElementById('pageInfo').textContent = `Trang ${currentPage} / ${totalPages}`;
        document.getElementById('prevBtn').disabled = currentPage === 1;
        document.getElementById('nextBtn').disabled = currentPage === totalPages;
    } else {
        pagination.classList.add('hidden');
    }
}

// Update UI
function updateUI() {
    document.getElementById('historyCount').textContent = 
        `${filteredHistory.length} bài hát ${filteredHistory.length !== allHistory.length ? `(lọc từ ${allHistory.length})` : ''}`;
    
    const deleteBtn = document.getElementById('deleteSelectedBtn');
    if (selectedItems.size > 0) {
        deleteBtn.classList.remove('hidden');
        document.getElementById('deleteCount').textContent = `Xóa ${selectedItems.size} mục`;
    } else {
        deleteBtn.classList.add('hidden');
    }
}

// Toggle select item
function toggleSelect(timestamp) {
    if (selectedItems.has(timestamp)) {
        selectedItems.delete(timestamp);
    } else {
        selectedItems.add(timestamp);
    }
    updateUI();
    renderHistory();
}

// Select all
function selectAll() {
    const pageItems = filteredHistory.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    pageItems.forEach(item => selectedItems.add(item.timestamp));
    updateUI();
    renderHistory();
}

// Deselect all
function deselectAll() {
    selectedItems.clear();
    updateUI();
    renderHistory();
}

// Play from history
function playFromHistory(songId) {
    // Chuyển về trang player và tự động phát
    localStorage.setItem('autoPlaySongId', songId);
    window.location.href = 'play.html';
}

// Delete item
function deleteItem(timestamp) {
    allHistory = allHistory.filter(item => item.timestamp !== timestamp);
    localStorage.setItem('musicHistory', JSON.stringify(allHistory));
    selectedItems.delete(timestamp);
    filterHistory();
    showNotification('✅ Đã xóa khỏi lịch sử');
}

// Delete selected
function deleteSelected() {
    if (selectedItems.size === 0) return;
    
    document.getElementById('deleteModalText').textContent = 
        `Bạn có chắc chắn muốn xóa ${selectedItems.size} bài hát khỏi lịch sử?`;
    document.getElementById('confirmDeleteBtn').onclick = () => {
        allHistory = allHistory.filter(item => !selectedItems.has(item.timestamp));
        localStorage.setItem('musicHistory', JSON.stringify(allHistory));
        selectedItems.clear();
        filterHistory();
        closeModal();
        showNotification(`✅ Đã xóa ${selectedItems.size} mục`);
    };
    document.getElementById('deleteModal').classList.remove('hidden');
}

// Confirm delete all
function confirmDeleteAll() {
    if (allHistory.length === 0) return;
    
    document.getElementById('deleteModalText').textContent = 
        `Hành động này không thể hoàn tác. Bạn có chắc chắn muốn xóa toàn bộ ${allHistory.length} bài hát khỏi lịch sử?`;
    document.getElementById('confirmDeleteBtn').onclick = deleteAll;
    document.getElementById('deleteModal').classList.remove('hidden');
}

// Delete all
function deleteAll() {
    localStorage.removeItem('musicHistory');
    allHistory = [];
    filteredHistory = [];
    selectedItems.clear();
    closeModal();
    updateUI();
    renderHistory();
    showNotification('✅ Đã xóa toàn bộ lịch sử');
}

// Close modal
function closeModal() {
    document.getElementById('deleteModal').classList.add('hidden');
}

// Change page
function changePage(direction) {
    const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
    currentPage = Math.max(1, Math.min(currentPage + direction, totalPages));
    renderHistory();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Export history
function exportHistory() {
    if (allHistory.length === 0) {
        showNotification('⚠️ Không có dữ liệu để xuất', 'warning');
        return;
    }
    
    // Chuyển đổi timestamp sang định dạng ngày/tháng/năm
    const historyForExport = allHistory.map(item => ({
        ...item,
        timestamp: new Date(item.timestamp).toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    }));
    
    const dataStr = JSON.stringify(historyForExport, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `music-history-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    showNotification('✅ Đã xuất dữ liệu thành công');
}

// Show notification
function showNotification(message, type = 'success') {
    const bgColor = type === 'error' ? 'bg-red-600' : type === 'warning' ? 'bg-yellow-600' : 'bg-gradient-to-r from-violet-600 to-cyan-500';
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-2xl z-50 transform transition-all`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadHistory();
});

// Close modal on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
