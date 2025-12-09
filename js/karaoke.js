/* --- js/karaoke.js (PHIÊN BẢN HOÀN CHỈNH) --- */

// 1. KHAI BÁO BIẾN & DOM
const audio = document.getElementById('karaoke-audio');
const lyricsContainer = document.getElementById('lyrics-display');
const singerWrapper = document.getElementById('singer-wrapper');
const micBtnText = document.getElementById('mic-btn-text');
const canvas = document.getElementById('visualizer-canvas');
const ctx = canvas.getContext('2d');

// Biến trạng thái
let isSinging = false;
let currentLyricsArr = []; 
let lyricIndex = 0;
let lyricInterval;
let heartInterval;

// Biến Visualizer (Web Audio API)
let audioContext, analyser, source, dataArray, animationId;

// 2. KHỞI TẠO
document.addEventListener('DOMContentLoaded', () => {
    // Cấu hình Canvas full chiều rộng
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Hiển thị Toast giả lập (Người xin vào phòng)
    setTimeout(() => {
        const toast = document.getElementById('request-toast');
        if(toast) toast.classList.add('show');
    }, 3000);
});

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = 350; // Khớp với chiều cao trong CSS
}

// 3. QUẢN LÝ DANH SÁCH BÀI HÁT (DATA.JS)
function openSongList() {
    const searchInput = document.getElementById('song-search');
    if(searchInput) searchInput.value = ""; 
    
    // Lấy dữ liệu từ file data.js
    const listToRender = (typeof songsData !== 'undefined') ? songsData : [];
    renderSongList(listToRender);
    
    document.getElementById('song-modal').style.display = 'flex';
}

function closeSongList() {
    document.getElementById('song-modal').style.display = 'none';
}

function renderSongList(songs) {
    const container = document.getElementById('song-list-container');
    container.innerHTML = "";

    if (songs.length === 0) {
        container.innerHTML = '<div style="text-align:center; color:#aaa; padding:20px;">Không tìm thấy bài hát</div>';
        return;
    }

    songs.forEach(song => {
        const div = document.createElement('div');
        div.className = 'song-item';
        // Fallback ảnh lỗi
        const imgUrl = song.img || '../img/disk-default.png';

        div.innerHTML = `
            <img src="${imgUrl}" class="song-img" onerror="this.src='../img/disk-default.png'">
            <div class="song-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
        `;
        
        div.onclick = () => selectSong(song);
        container.appendChild(div);
    });
}

function filterSongs() {
    const query = document.getElementById('song-search').value.toLowerCase();
    if (typeof songsData !== 'undefined') {
        const filtered = songsData.filter(s => 
            s.title.toLowerCase().includes(query) || 
            s.artist.toLowerCase().includes(query)
        );
        renderSongList(filtered);
    }
}

// 4. CHỌN BÀI & XỬ LÝ LỜI
function selectSong(song) {
    audio.src = song.src;
    
    // Cắt chuỗi lời bài hát thành mảng (dựa vào xuống dòng)
    if (song.lyrics && song.lyrics.length > 20) {
        currentLyricsArr = song.lyrics.split('\n').filter(line => line.trim() !== '');
    } else {
        currentLyricsArr = ["(Đang tải nhạc...)", "Lời bài hát chưa cập nhật", "(Nhạc dạo...)"];
    }

    closeSongList();
    stopKaraoke(true); // Reset trạng thái cũ
    
    // Update màn hình lời
    lyricsContainer.innerHTML = `
        <div class="lyric-line active" style="color:var(--cyan); font-size: 32px;">${song.title}</div>
        <div class="lyric-line" style="font-size:18px; color:#aaa;">Sẵn sàng... Bấm "HÁT NGAY"</div>
    `;
}

// 5. VISUALIZER ENGINE (SÓNG NHẠC)
function setupVisualizer() {
    if (!audioContext) {
        // Khởi tạo Audio Context 1 lần duy nhất
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        
        // Kết nối Audio Element -> Analyser -> Loa
        source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        
        analyser.fftSize = 64; // Độ chi tiết (càng cao càng mịn nhưng nặng)
        dataArray = new Uint8Array(analyser.frequencyBinCount);
    }
}

function animateVisualizer() {
    if (!isSinging) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    analyser.getByteFrequencyData(dataArray);

    const barWidth = (canvas.width / dataArray.length) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
        // Tăng chiều cao sóng lên một chút cho đẹp
        barHeight = dataArray[i] * 1.2; 

        // Màu Gradient Neon (Hồng -> Xanh)
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#ff49db'); // Đỉnh sóng (Hồng)
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)'); // Chân sóng (Trong suốt)

        ctx.fillStyle = gradient;
        
        // Vẽ cột sóng (Căn đáy màn hình)
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
    }

    animationId = requestAnimationFrame(animateVisualizer);
}

// 6. ĐIỀU KHIỂN CHÍNH (PLAY / STOP)
function toggleSinging() {
    if (!audio.src) {
        alert("Vui lòng CHỌN BÀI hát trước!");
        openSongList();
        return;
    }

    if (!isSinging) {
        // --- BẮT ĐẦU ---
        setupVisualizer();
        // Chrome yêu cầu resume AudioContext khi tương tác
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume();
        }

        isSinging = true;
        singerWrapper.classList.add('singing');
        micBtnText.innerText = "TẠM DỪNG";
        
        audio.play();
        startLyricsRunning();
        startHearts();
        animateVisualizer(); // Bắt đầu vẽ sóng

    } else {
        // --- TẠM DỪNG ---
        stopKaraoke(false); 
    }
}

function stopKaraoke(reset = true) {
    isSinging = false;
    singerWrapper.classList.remove('singing');
    micBtnText.innerText = reset ? "HÁT NGAY" : "TIẾP TỤC";
    
    audio.pause();
    
    clearInterval(lyricInterval);
    clearInterval(heartInterval);
    cancelAnimationFrame(animationId);
    
    if (reset) {
        lyricIndex = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa sạch canvas
    }
}

// 7. CHẠY CHỮ (MÔ PHỎNG)
function startLyricsRunning() {
    updateLyricUI();
    
    // Chuyển dòng mỗi 4 giây (Bạn có thể chỉnh số này)
    lyricInterval = setInterval(() => {
        lyricIndex++;
        if (lyricIndex >= currentLyricsArr.length) {
            lyricIndex = 0; 
        }
        updateLyricUI();
    }, 4000); 
}

function updateLyricUI() {
    const currentLine = currentLyricsArr[lyricIndex] || "...";
    const nextLine = currentLyricsArr[lyricIndex + 1] || "";

    lyricsContainer.innerHTML = `
        <div class="lyric-line active">${currentLine}</div>
        <div class="lyric-line" style="font-size: 20px; opacity: 0.5;">${nextLine}</div>
    `;
}

// 8. KẾT THÚC & CHẤM ĐIỂM
function endSong() {
    stopKaraoke(true);
    
    // Random điểm 80-100
    const score = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    document.getElementById('final-score').innerText = score;
    
    let title = "Tuyệt vời!";
    if(score === 100) title = "Thần đồng âm nhạc! 🎤🔥";
    else if(score >= 90) title = "Giọng ca vàng 🌟";
    
    document.getElementById('final-title').innerText = title;
    document.getElementById('score-modal').style.display = 'flex';
}

function closeScoreModal() {
    document.getElementById('score-modal').style.display = 'none';
}

// 9. HIỆU ỨNG PHỤ
function startHearts() {
    heartInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '<i class="fa-solid fa-heart"></i>';
        heart.style.left = Math.random() * 90 + '%';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }, 600);
}

function hideToast() { document.getElementById('request-toast').classList.remove('show'); }
function acceptGuest() {
    hideToast();
    const list = document.getElementById('audience-list');
    const guest = document.createElement('img');
    guest.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Guest99";
    guest.className = "bot-avt";
    list.appendChild(guest);
}
function copyRoomID() { alert("Đã copy ID phòng: 8839"); }