/* --- js/favorites.js --- */

// 1. LẤY DANH SÁCH ID YÊU THÍCH
function getLikedSongIDs() {
    const stored = localStorage.getItem('likedSongs');
    return stored ? JSON.parse(stored) : [];
}

// 2. KIỂM TRA BÀI HÁT ĐÃ LIKE CHƯA
function isLiked(songId) {
    const likes = getLikedSongIDs();
    return likes.includes(songId);
}

// 3. TOGGLE LIKE (Thích / Bỏ thích)
function toggleLike(songId, btnElement) {
    // Ngăn chặn sự kiện click lan ra ngoài (để không bị kích hoạt play nhạc khi bấm tim)
    if (event) event.stopPropagation();

    let likes = getLikedSongIDs();
    const index = likes.indexOf(songId);

    if (index === -1) {
        // Chưa like -> Thêm vào
        likes.push(songId);
        showToast("❤️ Đã thêm vào Yêu thích");
    } else {
        // Đã like -> Xóa đi
        likes.splice(index, 1);
        showToast("💔 Đã xóa khỏi Yêu thích");
    }

    // Lưu lại
    localStorage.setItem('likedSongs', JSON.stringify(likes));

    // Cập nhật giao diện nút bấm ngay lập tức
    updateLikeBtnUI(btnElement, index === -1);
    
    // Nếu đang ở trang Playlist (Thư viện), reload lại danh sách để ẩn bài vừa xóa
    if (window.location.pathname.includes('playlist.html')) {
        loadFavoriteSongs(); // Hàm này sẽ được viết trong playlist.js
    }
}

// 4. CẬP NHẬT GIAO DIỆN NÚT TIM
function updateLikeBtnUI(btn, isNowLiked) {
    if (!btn) return;
    
    // Tìm thẻ <i> bên trong nút (hoặc chính là nút nếu nó là thẻ i)
    const icon = btn.tagName === 'I' ? btn : btn.querySelector('i');
    
    if (isNowLiked) {
        icon.classList.remove('fa-regular'); // Tim rỗng
        icon.classList.add('fa-solid');    // Tim đặc
        icon.style.color = '#ff49db';      // Màu hồng Neon
        btn.classList.add('liked');        // Thêm class để dễ style
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        icon.style.color = '#fff';         // Màu trắng
        btn.classList.remove('liked');
    }
}

// 5. HIỂU ỨNG THÔNG BÁO NHỎ (TOAST)
function showToast(msg) {
    // Tạo thẻ thông báo
    const div = document.createElement('div');
    div.style.cssText = `
        position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
        background: rgba(0,0,0,0.8); color: white; padding: 10px 20px;
        border-radius: 30px; font-size: 14px; z-index: 9999;
        border: 1px solid #ff49db; box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        animation: fadeInOut 2s ease-in-out forwards;
    `;
    div.innerHTML = msg;
    document.body.appendChild(div);

    // Tự xóa sau 2s
    setTimeout(() => div.remove(), 2000);
}

// Thêm animation cho Toast vào CSS document
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, 20px); }
        15% { opacity: 1; transform: translate(-50%, 0); }
        85% { opacity: 1; transform: translate(-50%, 0); }
        100% { opacity: 0; transform: translate(-50%, -20px); }
    }
`;
document.head.appendChild(style);