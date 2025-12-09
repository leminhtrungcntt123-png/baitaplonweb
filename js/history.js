/* --- js/history.js --- */

let allHistory = [];
let selectedItems = new Set(); // Lưu các ID bài hát đang được chọn

// 1. KHỞI TẠO
document.addEventListener('DOMContentLoaded', () => {
    loadHistory();
    
    // Hiển thị tên user
    const email = localStorage.getItem('userEmail') || 'Guest';
    const username = email.includes('@') ? email.split('@')[0] : email;
    const userDisplay = document.getElementById('username-display');
    if(userDisplay) userDisplay.textContent = username;
});

function logout() { window.location.href = 'login.html'; }

// 2. LOAD & RENDER
function loadHistory() {
    const rawData = localStorage.getItem('musicHistory');
    allHistory = rawData ? JSON.parse(rawData) : [];
    
    // Lọc trùng lặp (Giữ bài mới nhất)
    allHistory = deduplicate(allHistory);
    
    renderList(allHistory);
}

function deduplicate(arr) {
    const seen = new Set();
    return arr.filter(item => {
        const duplicate = seen.has(item.title);
        seen.add(item.title);
        return !duplicate;
    });
}

function renderList(list) {
    const container = document.getElementById('historyList');
    const countEl = document.getElementById('historyCount');
    const emptyState = document.getElementById('emptyState');
    
    if(!container) return;
    container.innerHTML = "";
    
    if(countEl) countEl.innerText = `${list.length} bài hát`;

    if (list.length === 0) {
        if(emptyState) emptyState.style.display = 'block';
        return;
    }
    if(emptyState) emptyState.style.display = 'none';

    list.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-card';
        const isChecked = selectedItems.has(String(item.timestamp));

        div.innerHTML = `
            <div class="checkbox-wrapper">
                <input type="checkbox" onchange="toggleSelect('${item.timestamp}')" ${isChecked ? 'checked' : ''}>
            </div>
            
            <img src="${item.cover}" class="song-img" onerror="this.src='../img/disk-default.png'">
            
            <div class="song-info">
                <div class="song-title" onclick="playFromHistory('${item.title}')">${item.title}</div>
                <p class="song-artist">${item.artist}</p>
            </div>

            <div class="song-meta">
                <span><i class="fa-regular fa-clock"></i> ${formatTimeAgo(item.timestamp)}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

// 3. CÁC HÀM XỬ LÝ

// Phát nhạc từ lịch sử
function playFromHistory(title) {
    // Tìm bài hát trong kho dữ liệu gốc (data.js)
    if (typeof songsData !== 'undefined') {
        const song = songsData.find(s => s.title === title);
        
        if (song) {
            localStorage.setItem('currentSong', JSON.stringify(song));
            // Load full playlist để có thể next bài khác
            localStorage.setItem('playlistData', JSON.stringify(songsData));
            window.location.href = 'play.html';
        } else {
            alert("Bài hát này không còn tồn tại trong hệ thống (hoặc chưa được cập nhật trong data.js)!");
        }
    } else {
        alert("Lỗi dữ liệu: Không tìm thấy file data.js!");
    }
}

// Tìm kiếm
function filterHistory() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const dateFilter = document.getElementById('dateFilter').value;
    const now = Date.now();

    const filtered = allHistory.filter(item => {
        // Lọc theo tên
        const matchName = item.title.toLowerCase().includes(query) || item.artist.toLowerCase().includes(query);
        
        // Lọc theo thời gian
        let matchDate = true;
        if (dateFilter === 'today') matchDate = (now - item.timestamp) < 86400000;
        if (dateFilter === 'week') matchDate = (now - item.timestamp) < 604800000;

        return matchName && matchDate;
    });
    renderList(filtered);
}

// Chọn / Bỏ chọn
function toggleSelect(timestamp) {
    if (selectedItems.has(timestamp)) selectedItems.delete(timestamp);
    else selectedItems.add(timestamp);
}

function selectAll() {
    allHistory.forEach(item => selectedItems.add(String(item.timestamp)));
    renderList(allHistory); // Re-render để cập nhật checkbox
}

function deselectAll() {
    selectedItems.clear();
    renderList(allHistory);
}

// Xóa đã chọn
function deleteSelected() {
    if (selectedItems.size === 0) {
        alert("Vui lòng chọn ít nhất 1 bài để xóa!");
        return;
    }
    
    if(!confirm(`Bạn có chắc muốn xóa ${selectedItems.size} bài hát khỏi lịch sử?`)) return;

    allHistory = allHistory.filter(item => !selectedItems.has(String(item.timestamp)));
    localStorage.setItem('musicHistory', JSON.stringify(allHistory));
    
    selectedItems.clear();
    renderList(allHistory);
}

// Xuất dữ liệu (JSON)
function exportHistory() {
    if (allHistory.length === 0) {
        alert("Không có dữ liệu để xuất!");
        return;
    }
    const dataStr = JSON.stringify(allHistory, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `music_history_${new Date().toISOString().slice(0,10)}.json`;
    link.click();
}

// Helper: Format thời gian
function formatTimeAgo(timestamp) {
    const diff = Date.now() - timestamp;
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (diff < 60000) return 'Vừa xong';
    if (mins < 60) return `${mins} phút trước`;
    if (hours < 24) return `${hours} giờ trước`;
    return `${days} ngày trước`;
}

/* --- THÊM VÀO CUỐI FILE js/history.js --- */

// Logic Modal Karaoke
function openKaraokeOption() {
    const modal = document.getElementById('karaoke-modal');
    if(modal) modal.style.display = 'flex';
}

function closeKaraokeOption() {
    const modal = document.getElementById('karaoke-modal');
    if(modal) modal.style.display = 'none';
}

function goToKaraoke(mode) {
    if (mode === 'join') {
        const idInput = document.getElementById('room-id-input');
        if(idInput && idInput.value.trim() === "") {
            alert("Vui lòng nhập ID phòng!");
            return;
        }
    }
    // Chuyển hướng sang trang Karaoke
    window.location.href = 'karaoke.html';
}

// Đóng modal khi click ra ngoài
window.addEventListener('click', (e) => {
    const modal = document.getElementById('karaoke-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});