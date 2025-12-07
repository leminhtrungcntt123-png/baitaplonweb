/* --- DỮ LIỆU BÀI HÁT YÊU THÍCH --- */
const likedSongs = [
    { 
        title: "Nơi Này Có Anh", 
        artist: "Sơn Tùng M-TP", 
        album: "Single", 
        date: "2 ngày trước", 
        time: "4:20", 
        img: "../img/noinaycoanh.jpg" 
    },
    { 
        title: "Một Năm Mới Bình An", 
        artist: "Sơn Tùng M-TP", 
        album: "Tết 2016", 
        date: "1 tuần trước", 
        time: "3:45", 
        img: "../img/motnammoibinhan.jpg" 
    },
    { 
        title: "Có Chắc Yêu Là Đây", 
        artist: "Sơn Tùng M-TP", 
        album: "Single 2020", 
        date: "2 tuần trước", 
        time: "3:22", 
        img: "../img/cochacyeuladay.jpg" 
    }
];

/* --- RENDER GIAO DIỆN KHI LOAD --- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Điền tên User
    const email = localStorage.getItem('userEmail') || 'Guest';
    const username = email.split('@')[0];
    
    const userNameEl = document.getElementById('user-name');
    const navUserEl = document.getElementById('username-display');
    
    if(userNameEl) userNameEl.innerText = username;
    if(navUserEl) navUserEl.innerText = username;

    // 2. Render danh sách bài hát
    const tbody = document.getElementById('song-list-body');
    if (tbody) {
        likedSongs.forEach((song, index) => {
            const tr = document.createElement('tr');
            tr.onclick = () => playSong(song.title);
            
            // Xử lý ảnh lỗi
            const fallbackImg = "https://cdn-icons-png.flaticon.com/512/3844/3844724.png";
            
            tr.innerHTML = `
                <td class="song-index">${index + 1}</td>
                <td>
                    <div class="song-title-row">
                        <img src="${song.img}" class="small-cover" onerror="this.src='${fallbackImg}'">
                        <div>
                            <span class="song-name-text">${song.title}</span>
                            <span class="song-artist-text">${song.artist}</span>
                        </div>
                    </div>
                </td>
                <td>${song.album}</td>
                <td>${song.date}</td>
                <td>${song.time}</td>
            `;
            tbody.appendChild(tr);
        });
    }
});

/* --- CÁC HÀM CHỨC NĂNG --- */

// Chuyển sang trang Play
function playSong(songName) {
    localStorage.setItem('autoPlaySongId', songName);
    window.location.href = 'play.html';
}

function playAll() {
    playSong(likedSongs[0].title);
}

function logout() {
    window.location.href = 'login.html';
}

// --- LOGIC MODAL KARAOKE ---
function openKaraokeOption() {
    document.getElementById('karaoke-modal').style.display = 'flex';
}

function closeKaraokeOption() {
    document.getElementById('karaoke-modal').style.display = 'none';
}

function goToKaraoke(mode) {
    if (mode === 'join') {
        const id = document.getElementById('room-id-input').value;
        if(id.trim() === "") {
            alert("Vui lòng nhập ID phòng!");
            return;
        }
    }
    // Giả lập vào phòng thành công
    window.location.href = 'karaoke.html';
}