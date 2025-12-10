/* --- playingfunc.js (Đã tích hợp Logic AutoPlay từ Playlist chuẩn) --- */

// 1. BIẾN TOÀN CỤC
let playlist = []; 
let currentSongIndex = 0;
let isPlaying = false;

// DOM Elements
const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("btn1-control");
const playText = document.getElementById("play-pause-text");
const albumArt = document.getElementById("album-art");
const progressBar = document.getElementById("progress-bar");
const playlistContainer = document.getElementById("playlist-container");

// Elements cho Animation
const visualizerBars = document.querySelectorAll(".bar");
const cassetteWheels = document.querySelectorAll(".s_wheel, .e_wheel");

// 2. KHỞI TẠO (CHẠY KHI VÀO TRANG)
window.addEventListener('DOMContentLoaded', () => {
    
    // --- A. HIỂN THỊ TÊN USER ---
    const email = localStorage.getItem('userEmail') || 'Guest';
    let username = email;
    if (email.includes('@')) {
        username = email.split('@')[0];
    }
    const userDisplay = document.getElementById('username-display');
    if (userDisplay) userDisplay.innerText = username;

    // --- B. LẤY TÍN HIỆU TỪ CÁC TRANG KHÁC ---
    const autoPlayId = localStorage.getItem('autoPlaySongId'); // Tín hiệu từ Playlist
    const storedSong = localStorage.getItem('currentSong');    // Tín hiệu từ Home
    const storedPlaylist = localStorage.getItem('playlistData'); // Danh sách nhạc cũ

    // --- C. XÁC ĐỊNH DANH SÁCH PHÁT (LOGIC MỚI CỦA BẠN) ---
    
    if (autoPlayId) {
        // TRƯỜNG HỢP 1: Nếu bấm từ trang Playlist/Favorites sang
        // -> Buộc phải dùng danh sách gốc (songsData) để chắc chắn bài đó có tồn tại
        console.log("Phát hiện yêu cầu từ Playlist ID:", autoPlayId);
        playlist = (typeof songsData !== 'undefined') ? songsData : [];
    } 
    else if (storedPlaylist) {
        // TRƯỜNG HỢP 2: Nếu đang nghe dở danh sách cũ (Album/Search)
        playlist = JSON.parse(storedPlaylist);
    } 
    else {
        // TRƯỜNG HỢP 3: Mặc định
        playlist = (typeof songsData !== 'undefined') ? songsData : []; 
    }

    // Vẽ danh sách bên phải
    renderPlaylist(); 

    // --- D. CHỌN BÀI HÁT ĐỂ PHÁT ---

    // Ưu tiên 1: Tự động phát bài được chọn từ Playlist
    if (autoPlayId) {
        // Tìm vị trí bài hát (So sánh String để tránh lỗi số vs chữ)
        const index = playlist.findIndex(s => String(s.id) === String(autoPlayId));
        
        if (index !== -1) {
            console.log("Đã tìm thấy bài hát tại index:", index);
            loadSong(index);
            // Dùng timeout nhỏ để đảm bảo trình duyệt load xong DOM rồi mới play
            setTimeout(() => playSong(), 100); 
        } else {
            console.warn("Không tìm thấy bài hát có ID:", autoPlayId);
            loadSong(0); // Fallback
        }
        // Xóa tín hiệu ngay
        localStorage.removeItem('autoPlaySongId');
    } 
    // Ưu tiên 2: Tín hiệu từ Home (storedSong)
    else if (storedSong) {
        const songData = JSON.parse(storedSong);
        const index = playlist.findIndex(s => String(s.id) === String(songData.id));
        
        if (index !== -1) {
            loadSong(index);
            playSong();
        } else {
            loadSong(0);
        }
        localStorage.removeItem('currentSong');
    } 
    // Ưu tiên 3: Không có tín hiệu gì -> Load bài đầu tiên
    else {
        if(playlist.length > 0) loadSong(0);
    }
});

// 3. RENDER PLAYLIST
function renderPlaylist() {
    if(!playlistContainer) return;
    playlistContainer.innerHTML = ""; // Xóa nội dung cũ

    playlist.forEach((song, index) => {
        const div = document.createElement('div');
        div.className = 'playlist-item';
        
        // Check ảnh lỗi
        const imgUrl = song.img || "../img/disk-default.png";
        
        div.innerHTML = `
            <img src="${imgUrl}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3844/3844724.png'"> 
            <div>
                <div style="font-weight:bold; color:white;">${song.title}</div>
                <div style="font-size:12px; opacity:0.7; color:#ccc;">${song.artist}</div>
            </div>
        `;
        div.onclick = () => {
            loadSong(index);
            playSong();
        };
        playlistContainer.appendChild(div);
    });
}

// 4. LOAD BÀI HÁT
function loadSong(index) {
    if (index < 0 || index >= playlist.length) return;

    currentSongIndex = index;
    const song = playlist[index];

    // Điền thông tin vào Player chính
    document.getElementById("song-name").innerText = song.title;
    document.getElementById("artist").innerText = song.artist;
    
    // Lời bài hát
    const lyricsEl = document.getElementById("song-lyrics");
    if(lyricsEl) lyricsEl.innerText = song.lyrics || "Chưa có lời bài hát...";

    // Ảnh đĩa than
    if(albumArt) albumArt.style.backgroundImage = `url('${song.img}')`;

    // File nhạc
    audioPlayer.src = song.src;

    // Highlight bài đang hát trong list
    const items = document.querySelectorAll(".playlist-item");
    items.forEach(el => el.classList.remove("active"));
    
    if(items[index]) {
        items[index].classList.add("active");
        items[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// 5. PLAY / PAUSE
function playSong() {
    isPlaying = true;
    if(playText) playText.innerText = "PAUSE";
    
    // Animation
    if(albumArt) albumArt.classList.add('playing'); 
    visualizerBars.forEach(bar => bar.style.animationPlayState = "running");
    cassetteWheels.forEach(wheel => wheel.style.animationPlayState = "running");

    // Xử lý Promise play() để tránh lỗi trình duyệt chặn
    var playPromise = audioPlayer.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {}).catch(error => console.log("Lỗi Play:", error));
    }

    // GỌI HÀM LƯU LỊCH SỬ TẠI ĐÂY
    addToHistory(playlist[currentSongIndex]);
}

function pauseSong() {
    isPlaying = false;
    if(playText) playText.innerText = "PLAY";
    
    // Dừng Animation
    if(albumArt) albumArt.classList.remove('playing');
    visualizerBars.forEach(bar => bar.style.animationPlayState = "paused");
    cassetteWheels.forEach(wheel => wheel.style.animationPlayState = "paused");

    audioPlayer.pause();
}

// 6. SỰ KIỆN NÚT BẤM
if(playBtn) playBtn.addEventListener("click", () => isPlaying ? pauseSong() : playSong());

const btnNext = document.getElementById("btn-next");
if(btnNext) btnNext.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    playSong();
});

const btnPrev = document.getElementById("btn-prev");
if(btnPrev) btnPrev.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    playSong();
});

// Thanh tiến trình
audioPlayer.addEventListener("timeupdate", () => {
    const { duration, currentTime } = audioPlayer;
    if (duration) {
        const percent = (currentTime / duration) * 100;
        if(progressBar) progressBar.value = percent;
        document.getElementById("current-time").innerText = formatTime(currentTime);
        document.getElementById("duration").innerText = formatTime(duration);
    }
});

if(progressBar) {
    progressBar.addEventListener("input", () => {
        const seekTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    });
}

/* --- LOGIC MODAL KARAOKE --- */
function openKaraokeOption() {
    const modal = document.getElementById('karaoke-modal');
    if(modal) modal.style.display = 'flex';
}

function closeKaraokeOption() {
    const modal = document.getElementById('karaoke-modal');
    if(modal) modal.style.display = 'none';
}

function addToHistory(song) {
    if(!song) return; // Kiểm tra an toàn
    const historyItem = {
        title: song.title,
        artist: song.artist,
        cover: song.img,
        timestamp: Date.now()
    };

    let history = JSON.parse(localStorage.getItem('musicHistory') || '[]');
    
    // Tránh trùng lặp bài vừa nghe
    if(history.length > 0 && history[0].title === song.title) return;

    // Thêm vào đầu danh sách
    history.unshift(historyItem);
    // Giới hạn 50 bài
    if(history.length > 50) history.pop();
    
    localStorage.setItem('musicHistory', JSON.stringify(history));
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

// Đóng modal khi click ra ngoài vùng nội dung
window.addEventListener('click', (e) => {
    const modal = document.getElementById('karaoke-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
// Tự qua bài
audioPlayer.addEventListener("ended", () => {
    if(btnNext) btnNext.click();
});

// Format thời gian
function formatTime(s) {
    if(isNaN(s)) return "0:00";
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + Math.floor(s);
}

// Hàm Logout
function logout() { window.location.href = 'login.html'; }