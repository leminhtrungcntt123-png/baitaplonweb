// --- 1. DỮ LIỆU KARAOKE ---
const karaokeSongs = [
    { title: "Nơi Này Có Anh", artist: "Sơn Tùng M-TP", src: "../mp3/nnca.mp3", img: "../img/noinaycoanh.jpg", lyrics: ["Em là ai từ đâu bước đến nơi đây", "Dịu dàng chân phương", "Em là ai tựa như ánh nắng ban mai", "Ngọt ngào trong sương"] },
    { title: "Một Năm Mới Bình An", artist: "Sơn Tùng M-TP", src: "../mp3/mnmba.mp3", img: "../img/motnammoibinhan.jpg", lyrics: ["Xuân mang tình yêu muôn nhà", "Mang lời ca chan hòa", "Yêu thương hạnh phúc sum vầy", "Tết năm nay nồng ấm đong đầy"] },
    { title: "Có Chắc Yêu Là Đây", artist: "Sơn Tùng M-TP", src: "../mp3/ccyld.mp3", img: "../img/cochacyeuladay.jpg", lyrics: ["Thấp thoáng ánh mắt", "Đôi môi mang theo hương mê say", "Em cho anh tan trong miên man"] }
];

let currentLyrics = [];
let isSinging = false;
let lyricInterval, heartInterval;
const audio = document.getElementById('karaoke-audio');
const lyricsDisplay = document.getElementById('lyrics-display');

// --- 2. CHỨC NĂNG CHỌN BÀI ---
function openSongList() {
    const searchInput = document.getElementById('song-search');
    if(searchInput) searchInput.value = ""; // Xóa chữ cũ
    renderSongList(karaokeSongs); // Render toàn bộ danh sách
    document.getElementById('song-modal').style.display = 'flex';
}

function closeSongList() { document.getElementById('song-modal').style.display = 'none'; }

function selectSong(index) {
    const song = karaokeSongs[index];
    audio.src = song.src;
    currentLyrics = song.lyrics;
    closeSongList();
    isSinging = false;
    document.getElementById('mic-btn-text').innerText = "BẮT ĐẦU HÁT";
    lyricsDisplay.innerHTML = `<div class="lyric-line active" style="color:var(--cyan)">${song.title}</div><div class="lyric-line" style="font-size:16px;">Sẵn sàng...</div>`;
}

// --- 3. HÁT & HIỆU ỨNG ---
function toggleSinging() {
    if (!audio.src) { alert("Vui lòng CHỌN BÀI trước!"); return openSongList(); }
    if (!isSinging) {
        isSinging = true;
        document.getElementById('singer-wrapper').classList.add('singing');
        document.getElementById('mic-btn-text').innerText = "TẠM DỪNG";
        audio.play();
        startLyricsSim();
        startHearts();
    } else {
        isSinging = false;
        document.getElementById('singer-wrapper').classList.remove('singing');
        document.getElementById('mic-btn-text').innerText = "TIẾP TỤC";
        audio.pause();
        clearInterval(lyricInterval);
        clearInterval(heartInterval);
    }
}

function startLyricsSim() {
    let index = 0;
    updateLyricUI(index);
    lyricInterval = setInterval(() => {
        index++;
        if (index >= currentLyrics.length) index = 0;
        updateLyricUI(index);
    }, 4000);
}

function updateLyricUI(index) {
    lyricsDisplay.innerHTML = `
        <div class="lyric-line active">${currentLyrics[index]}</div>
        <div class="lyric-line" style="font-size:20px; opacity:0.5;">${currentLyrics[index+1] || "..."}</div>
    `;
}

function startHearts() {
    heartInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '<i class="fa-solid fa-heart"></i>';
        heart.style.left = Math.random() * 80 + 10 + '%';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }, 500);
}

function endSong() {
    if (!isSinging && !audio.src) return;
    audio.pause();
    const score = Math.floor(Math.random() * 20) + 80;
    document.getElementById('final-score').innerText = score;
    document.getElementById('score-modal').style.display = 'flex';
}

// --- 4. CHIA SẺ & MỜI ---
function copyRoomID() {
    alert("Đã copy ID phòng: 8839 vào bộ nhớ tạm! Gửi cho bạn bè ngay!");
}

// Giả lập người xin vào sau 3 giây
setTimeout(() => {
    const toast = document.getElementById('request-toast');
    if(toast) toast.classList.add('show');
}, 3000);

function hideToast() {
    document.getElementById('request-toast').classList.remove('show');
}

function acceptGuest() {
    hideToast();
    const audienceList = document.getElementById('audience-list');
    const newGuest = document.createElement('img');
    newGuest.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Guest99";
    newGuest.className = "bot-avt";
    audienceList.appendChild(newGuest);
    setTimeout(() => alert("Nguyễn Văn A đã tham gia phòng!"), 500);
}

// Hàm render danh sách (Tách ra để tái sử dụng)
function renderSongList(songs) {
    const container = document.getElementById('song-list-container');
    container.innerHTML = "";
    
    if (songs.length === 0) {
        container.innerHTML = '<div style="text-align:center; color:#777; padding:20px;">Không tìm thấy bài hát nào</div>';
        return;
    }

    songs.forEach((song) => {
        // Tìm vị trí gốc trong mảng karaokeSongs để play đúng bài
        // (Lưu ý: Cách này giả định title là duy nhất, thực tế nên dùng ID)
        const originalIndex = karaokeSongs.findIndex(s => s.title === song.title);

        container.innerHTML += `
            <div class="song-item" onclick="selectSong(${originalIndex})">
                <img src="${song.img}" class="song-img" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3844/3844724.png'">
                <div class="song-info">
                    <h4>${song.title}</h4>
                    <p>${song.artist}</p>
                </div>
            </div>
        `;
    });
}

// Hàm lọc bài hát khi gõ phím
function filterSongs() {
    const query = document.getElementById('song-search').value.toLowerCase();
    
    const filtered = karaokeSongs.filter(song => 
        song.title.toLowerCase().includes(query) || 
        song.artist.toLowerCase().includes(query)
    );
    
    renderSongList(filtered);
}