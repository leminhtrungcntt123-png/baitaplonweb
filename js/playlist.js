/* --- CẤU HÌNH DỮ LIỆU --- */
// Lấy dữ liệu từ data.js (biến songsData)
const globalSongs = (typeof songsData !== 'undefined') ? songsData : []; 

/* --- INIT KHI LOAD TRANG --- */
document.addEventListener('DOMContentLoaded', () => {
    setupUserInterface();
    loadFavoriteSongs();
});

/* --- HÀM RENDER DANH SÁCH BÀI HÁT --- */
/* --- HÀM RENDER DANH SÁCH BÀI HÁT --- */
function loadFavoriteSongs() {
    console.log("--- TẢI PLAYLIST ---");

    const tbody = document.getElementById('song-list-body');
    const countEl = document.querySelector('.playlist-meta p'); 
    
    // 1. Lấy dữ liệu
    const likedSongIDs = JSON.parse(localStorage.getItem('likedSongs')) || [];

    // 2. Cập nhật Header
    if(countEl) {
        const username = (localStorage.getItem('userEmail') || 'Guest').split('@')[0];
        const totalMinutes = likedSongIDs.length * 4; 
        countEl.innerHTML = `<span id="user-name">${username}</span> • ${likedSongIDs.length} bài hát • ${totalMinutes} phút`;
    }

    if (!tbody) return;
    tbody.innerHTML = ''; 

    // 3. Nếu danh sách trống
    if (likedSongIDs.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center; padding: 40px; color: #888;">
                    <i class="fa-regular fa-heart" style="font-size: 40px; margin-bottom: 15px; display:block; opacity: 0.5;"></i>
                    Chưa có bài hát nào.<br>Hãy thả tim ở trang chủ nhé!
                </td>
            </tr>`;
        return;
    }

    // 4. Lọc bài hát
    const myPlaylistData = globalSongs.filter(song => {
        return likedSongIDs.some(likedId => String(likedId) === String(song.id));
    });

    // 5. Render từng dòng
    myPlaylistData.forEach((song, index) => {
        const tr = document.createElement('tr');
        
        tr.onclick = () => playSong(song.id); 
        
        const fallbackImg = "https://cdn-icons-png.flaticon.com/512/3844/3844724.png";
        const displayImg = song.img || song.image || fallbackImg;
        
        // --- ĐÂY LÀ PHẦN ĐÃ SỬA ---
        // Tôi bỏ onclick="removeSong..." đi để tránh lỗi
        // Và bỏ cursor: pointer để người dùng biết là không bấm được
        tr.innerHTML = `
            <td class="song-index">${index + 1}</td>
            <td>
                <div class="song-title-row">
                    <img src="${displayImg}" class="small-cover" onerror="this.src='${fallbackImg}'">
                    <div>
                        <span class="song-name-text">${song.title || song.name}</span>
                        <span class="song-artist-text">${song.artist || song.singer}</span>
                    </div>
                </div>
            </td>
            <td>${song.album || "Single"}</td>
            
            <td style="text-align: center;">
                <i class="fa-solid fa-heart" 
                   style="color: #ff49db; font-size: 18px;" 
                   title="Đã thích">
                </i>
            </td>
            
            <td>${song.time || "04:00"}</td>
        `;
        tbody.appendChild(tr);
    });
}
/* --- CÁC HÀM HỖ TRỢ KHÁC --- */
function setupUserInterface() {
    const email = localStorage.getItem('userEmail') || 'Guest';
    const username = email.split('@')[0];
    const userNameEl = document.getElementById('user-name');
    const navUserEl = document.getElementById('username-display');
    
    if(userNameEl) userNameEl.innerText = username;
    if(navUserEl) navUserEl.innerText = username;
}

function playSong(songId) {
    localStorage.setItem('autoPlaySongId', songId);
    window.location.href = 'play.html';
}

function playAll() {
    const likedSongIDs = JSON.parse(localStorage.getItem('likedSongs')) || [];
    if(likedSongIDs.length > 0) {
        playSong(likedSongIDs[0]);
    } else {
        alert("Playlist trống!");
    }
}

function logout() {
    window.location.href = 'login.html';
}

/* --- MODAL KARAOKE --- */
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
        const val = document.getElementById('room-id-input').value;
        if(!val.trim()) { alert("Vui lòng nhập ID!"); 
        return; }
    }
    window.location.href = 'karaoke.html';
}