/* --- 1. DỮ LIỆU BÀI HÁT (NHÚNG TRỰC TIẾP) --- */
// Chúng ta để dữ liệu ở đây luôn để tránh lỗi không tìm thấy file
const playlist = [
  {
    name: "Nơi Này Có Anh",
    artist: "Sơn Tùng M-TP",
    img: "../img/noinaycoanh.jpg",
    src: "../mp3/nnca.mp3",
    lyrics: "Em là ai từ đâu bước đến nơi đây dịu dàng chân phương (dịu dàng chân phương)\nEm là ai tựa như ánh nắng ban mai ngọt ngào trong sương (ngọt ngào trong sương)\nNgắm em thật lâu, con tim anh yếu mềm\nĐắm say từ phút đó, từng giây trôi yêu thêm\nBao ngày qua bình minh đánh thức xua tan bộn bề nơi anh (bộn bề nơi anh)\nBao ngày qua niềm thương nỗi nhớ bay theo bầu trời trong xanh (bầu trời trong xanh)\nLiếc đôi hàng mi mong manh, anh thẫn thờ\nMuốn hôn nhẹ mái tóc, bờ môi em, anh mơ\nCầm tay anh (anh), dựa vai anh (anh)\nKề bên anh, nơi này có anh\nGió mang câu tình ca, ngàn ánh sao vụt qua, nhẹ ôm lấy em\n(Yêu em, thương em, con tim anh chân thành)\nCầm tay anh (anh), dựa vai anh (anh)\nKề bên anh, nơi này có anh\nKhép đôi mi thật lâu\nNguyện mãi bên cạnh nhau, yêu say đắm như ngày đầu\nMùa xuân đến bình yên, cho anh những giấc mơ\nHạ lưu giữ ngày mưa, ngọt ngào nên thơ\nMùa thu lá vàng rơi, đông sang, anh nhớ em\nTình yêu bé nhỏ xin dành tặng riêng em\n(Yeah)\nCòn đó tiếng nói ấy bên tai vấn vương bao ngày qua\nÁnh mắt bối rối nhớ thương bao ngày qua\nYêu em anh thẫn thờ, con tim bâng khuâng đâu có ngờ\nChẳng bao giờ phải mong chờ, đợi ai trong chiều hoàng hôn mờ\nĐắm chìm hòa vào vần thơ, ngắm nhìn khờ dại mộng mơ\nĐừng bước vội vàng rồi làm ngơ, lạnh lùng đó làm bộ dạng thờ ơ\nNhìn anh đi em nha, hướng nụ cười cho riêng anh nha\nĐơn giản là yêu, con tim anh lên tiếng thôi\nCầm tay anh (anh), dựa vai anh (anh)\nKề bên anh, nơi này có anh\nGió mang câu tình ca, ngàn ánh sao vụt qua, nhẹ ôm lấy em\n(Yêu em, thương em, con tim anh chân thành)\nCầm tay anh (anh), dựa vai anh (anh)\nKề bên anh, nơi này có anh\nKhép đôi mi thật lâu\nNguyện mãi bên cạnh nhau, yêu say đắm như ngày đầu\nMùa xuân đến bình yên, cho anh những giấc mơ\nHạ lưu giữ ngày mưa, ngọt ngào nên thơ\nMùa thu lá vàng rơi, đông sang, anh nhớ em\nTình yêu bé nhỏ xin dành tặng riêng em\nAh-ah-oh-oh-oh-oh-oh-oh-oh, nhớ thương em\nOh-oh-oh-oh-oh-oh-oh-oh-oh, nhớ thương em lắm\nAh, phía sau chân trời\nCó ai băng qua lối về, cùng em đi trên đoạn đường dài\nCầm tay anh (anh), dựa vai anh (anh)\nKề bên anh, nơi này có anh\nGió mang câu tình ca, ngàn ánh sao vụt qua, nhẹ ôm lấy em\n(Yêu em, thương em, con tim anh chân thành)\nCầm tay anh (anh), dựa vai anh (anh)\nKề bên anh, nơi này có anh\nKhép đôi mi thật lâu\nNguyện mãi bên cạnh nhau, yêu say đắm như ngày đầu (oh-oh)\nMùa xuân đến bình yên, cho anh những giấc mơ\nHạ lưu giữ ngày mưa, ngọt ngào nên thơ\nMùa thu lá vàng rơi, đông sang, anh nhớ em\nTình yêu bé nhỏ xin dành tặng riêng em"
  },
  {
    name: "Một Năm Mới Bình An",
    artist: "Sơn Tùng M-TP",
    img: "../img/motnammoibinhan.jpg",
    src: "../mp3/mnmba.mp3",
    lyrics: "Xuân mang tình yêu muôn nhà\nMang lời ca chan hoà\nYêu thương hạnh phúc sum vầy\nTết năm nay, nồng ấm đong đầy\nMưa rơi dịu êm gió mang hương về\nDập dìu trông cánh chim xa vời\nTừng nhịp giây qua, con tim sao bồi hồi\nXuân sang cành lá đâm chồi\nBao buồn vui qua rồi\nĐưa con về với yên bình\nVới gia đình nặng nghĩa ân tình\nCây mai đào khoe sắc hoa thêm màu\nNhẹ nhàng trong nắng xuân tươi hồng\nVề nhà nhanh thôi\nBa mẹ đang ngóng trông\nBạn bè vui khoe áo mới, xuân tới, phơi phới\nNhững bao lì xì ngay ngắn, may mắn, tươi tắn\nBánh chưng thơm lừng ngất ngây xuân về ngập tràn lộc muôn nơi\nNắng ban mai hé môi cười, dịu dàng xuân đến\nEh-oh-oh-oh-oh\nCó chú chim non mừng vui hót sau nhà\nEh-oh-oh-oh-oh\nCó tiếng em thơ mừng vui bóc bao quà\nEh-oh-oh-oh-oh\nCó gió mang xuân mừng vui chúc ông bà\nCười mãi thôi\nMột năm mới bình an\nNăm mới bình an\nOkay\nVề nhà với mẹ với ba\nQuanh bếp hồng ấm áp vui hát ca\nNắng mai rộn ràng e ấp thướt tha\nPháo hoa báo hiệu một năm cũ đã qua\nNăm mới sang chứa đựng bao hy vọng bình yên về muôn nhà\nTết đoàn viên sum vầy sẻ chia từng món quà\nRộn ràng mừng ngày xuân, hoà nhịp cùng ngày xuân\nNào cùng dang tay hoà vào mây mừng tết nay mùa xuân tới\nXuân sang cành lá đâm chồi\nBao buồn vui qua rồi\nĐưa con về với yên bình\nVới gia đình nặng nghĩa ân tình\nCây mai đào khoe sắc hoa thêm màu\nNhẹ nhàng trong nắng xuân tươi hồng\nVề nhà nhanh thôi\nBa mẹ đang ngóng trông\nBạn bè vui khoe áo mới, xuân tới, phơi phới\nNhững bao lì xì ngay ngắn, may mắn, tươi tắn\nBánh chưng thơm lừng ngất ngây xuân về ngập tràn lộc muôn nơi\nNắng ban mai hé môi cười, dịu dàng xuân đến\nEh-oh-oh-oh-oh\nCó chú chim non mừng vui hót sau nhà\nEh-oh-oh-oh-oh\nCó tiếng em thơ mừng vui bóc bao quà\nEh-oh-oh-oh-oh\nCó gió mang xuân mừng vui chúc ông bà\nCười mãi thôi, một năm mới bình an\nMột năm mới bình an\nNăm mới bình an\nNào cùng dang tay hoà vào mây mừng tết nay mùa xuân tới\nMừng tết sum vầy, nụ cười mãi đong đầy\nMừng tết năm này, rộn ràng pháo giao thừa\nMừng tết sum vầy, nụ cười mãi đong đầy\nEh-oh-oh-oh-oh\nCó chú chim non mừng vui hót sau nhà\nEh-oh-oh-oh-oh\nCó tiếng em thơ mừng vui bóc bao quà\nEh-oh-oh-oh-oh\nCó gió mang xuân mừng vui chúc ông bà\nCười mãi thôi, một năm mới bình an"
  },
  {
    name: "Có Chắc Yêu Là Đây",
    artist: "Sơn Tùng M-TP",
    img: "../img/cochacyeuladay.jpg",
    src: "../mp3/ccyld.mp3",
    lyrics: "Thấp thoáng ánh mắt, thấp thoáng ánh mắt\nThấp thoáng ánh mắt, thấp thoáng ánh mắt\nGood boy\nThấp thoáng ánh mắt đôi môi mang theo hương mê say\nEm cho anh tan trong miên man quên luôn đi đêm ngày\nChạm nhẹ vội vàng hai ba giây nhưng con tim đâu hay\nBối rối khẽ lên ngôi yêu thương đong đầy thật đầy\nAnh ngẩn ngơ cứ ngỡ (đó chỉ là giấc mơ)\nAnh ngẩn ngơ cứ ngỡ (như đang ngất ngây trong giấc mơ)\nThật ngọt ngào êm dịu đắm chìm\nPhút chốc viết tương tư gieo nên thơ (yeah, hey)\nCó câu ca trong gió hát ngân nga, ru trời mây\nNhẹ nhàng đón ban mai ngang qua trao nụ cười (trao nụ cười)\nNắng đua chen, khoe sắc, vui đùa giữa muôn ngàn hoa\nDịu dàng đến nhân gian âu yếm tâm hồn người\nHình như chính em (cho anh mong chờ)\nHình như chính là em (cho anh vấn vương)\nĐừng thờ ơ, xin hãy lắng nghe\nVà giúp anh trả lời đôi điều còn băn khoăn\nCó chắc yêu là đây, đây, đây\nCó chắc yêu là đây, đây\nCó chắc yêu là đây, đây, đây\nCó chắc yêu là đây, đây\nEm lang thang cả ngày trong tâm trí\nĐi không ngừng cả ngày trong tâm trí\nSi mê thêm cuồng quay\nOo-ooh, oo-oo-oo-ooh\nCó chắc yêu là đây\nChắc gì nữa mà chắc\nSáng thì nhớ đêm trắng tương tư còn không phải yêu là gì\nRồi thắc gì nữa mà mắc\nĐến bên nắm tay nói ra ngay ngồi mơ mộng thêm làm gì\nNhanh chân chạy mua một bó hoa (hey)\nThêm luôn một món quà (hooh)\nKhuôn mặt tươi cười lên vô tư gạt đi lo âu mạnh mẽ nha\nVà rồi bước ra, bước ra, bước ra\nCó câu ca trong gió hát ngân nga, ru trời mây\nNhẹ nhàng đón ban mai ngang qua trao nụ cười (trao nụ cười)\nNắng đua chen, khoe sắc, vui đùa giữa muôn ngàn hoa\nDịu dàng đến nhân gian âu yếm tâm hồn người\nHình như chính em (cho anh mong chờ)\nHình như chính là em (cho anh vấn vương)\nĐừng thờ ơ, xin hãy lắng nghe\nVà giúp anh trả lời đôi điều còn băn khoăn\nCó chắc yêu là đây, đây, đây\nCó chắc yêu là đây, đây\nCó chắc yêu là đây, đây, đây\nCó chắc yêu là đây, đây\nEm lang thang cả ngày trong tâm trí\nĐi không ngừng cả ngày trong tâm trí\nSi mê thêm cuồng quay\nOo-ooh, oo-oo-oo-ooh\nCó chắc yêu là đây\nCó chắc yêu là đây\nCó chắc yêu là đây\nPlease come to me! Please come to me!\nCó chắc yêu là đây, đây, đây\nCó chắc yêu là đây, đây\nCó chắc yêu là đây, đây, đây\nCó chắc yêu là đây, đây\nEm lang thang cả ngày trong tâm trí\nĐi không ngừng cả ngày trong tâm trí\nSi mê thêm cuồng quay\nOo-ooh, oo-oo-oo-ooh\n(Có chắc yêu là đây, đây, đây) M-TP\n(Có chắc yêu là đây, đây) Một bài hát\nDành đến cho tất cả những ai đang yêu\nChưa yêu, và sẽ được yêu\nHạnh phúc nhé!"
  }
];

/* --- 2. KHAI BÁO BIẾN --- */
let currentSongIndex = 0;
let isPlaying = false;
const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("btn1-control");
const playText = document.getElementById("play-pause-text");
const albumArt = document.getElementById("album-art");
const visualizerBars = document.querySelectorAll(".bar");
const progressBar = document.getElementById("progress-bar");
const wheels = document.querySelectorAll(".s_wheel, .e_wheel");

/* --- 3. HÀM KHỞI TẠO (CHẠY KHI MỞ TRANG) --- */
function init() {
    // KHÔNG CẦN FETCH NỮA, CHẠY THẲNG LUÔN
    renderPlaylist();
    
    // Xử lý tên người dùng
    const email = localStorage.getItem('userEmail') || 'Guest';
    const username = email.includes('@') ? email.split('@')[0] : email;
    const userDisplay = document.getElementById('username-display');
    if(userDisplay) userDisplay.textContent = username;

    // Xử lý Auto Play từ trang khác
    const autoPlayId = localStorage.getItem('autoPlaySongId');
    if (autoPlayId) {
        const index = playlist.findIndex(song => 
            encodeURIComponent(song.name) === autoPlayId || song.name === autoPlayId
        );
        if (index !== -1) {
            loadSong(index);
            playSong();
        } else {
            loadSong(0);
        }
        localStorage.removeItem('autoPlaySongId');
    } else {
        loadSong(0);
    }

    // Xử lý Menu Mobile
    const menuToggle = document.getElementById("menu-toggle");
    if(menuToggle) {
        menuToggle.addEventListener("click", () => {
            const navLinks = document.getElementById("nav-links");
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if(navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(0,0,0,0.9)';
                navLinks.style.width = '100%';
                navLinks.style.padding = '20px';
                navLinks.style.zIndex = '1000';
            }
        });
    }
}

/* --- 4. HÀM LƯU LỊCH SỬ --- */
function addToHistory(song) {
    try {
        let history = JSON.parse(localStorage.getItem('musicHistory') || '[]');
        const newItem = {
            id: song.name,
            title: song.name,
            artist: song.artist,
            cover: song.img,
            timestamp: Date.now(),
            duration: audioPlayer.duration || 0
        };
        history = history.filter(item => item.title !== newItem.title);
        history.unshift(newItem);
        if (history.length > 50) history.pop();
        localStorage.setItem('musicHistory', JSON.stringify(history));
    } catch (e) { console.error(e); }
}

/* --- 5. HÀM HIỂN THỊ PLAYLIST BÊN PHẢI --- */
function renderPlaylist() {
    const container = document.getElementById("playlist-container");
    if(!container) return;
    container.innerHTML = "";
    
    playlist.forEach((song, index) => {
        const item = document.createElement("div");
        item.className = "playlist-item";
        
        // Fallback ảnh nếu link lỗi
        const imgUrl = song.img.startsWith("..") ? "https://cdn-icons-png.flaticon.com/512/3844/3844724.png" : song.img;
        
        item.innerHTML = `
            <img src="${song.img}" onerror="this.src='${fallbackImg}'" style="width:50px; height:50px; border-radius:8px; margin-right:10px; object-fit:cover;"> 
            <div>
                <div style="font-weight:bold; color:white;">${song.name}</div>
                <div style="font-size:12px; opacity:0.7; color:#ccc;">${song.artist}</div>
            </div>
        `;
        item.onclick = () => { loadSong(index); playSong(); };
        container.appendChild(item);
    });
}

/* --- 6. HÀM LOAD BÀI HÁT --- */
function loadSong(index) {
    currentSongIndex = index;
    const song = playlist[index];

    document.getElementById("song-name").innerText = song.name;
    document.getElementById("artist").innerText = song.artist;
    
    const infoArtistEl = document.getElementById("info-artist");
    if(infoArtistEl) infoArtistEl.innerText = song.artist;
    
    // Xử lý lời bài hát (Thay \n bằng <br>)
    const lyricsEl = document.getElementById("song-lyrics");
    if(lyricsEl) {
        const formattedLyrics = song.lyrics 
            ? song.lyrics.replace(/\n/g, "<br>") 
            : "Đang cập nhật lời bài hát...";
        lyricsEl.innerHTML = formattedLyrics;
    }

    // Cập nhật ảnh đĩa (Code cũ đã có, kiểm tra lại cho chắc)
    const imgUrl = song.img.startsWith("..") ? "../img/noinaycoanh.jpg" : song.img;
    // Dùng ảnh từ dữ liệu làm background cho đĩa
    if(albumArt) albumArt.style.backgroundImage = `url('${song.img}'), url('${imgUrl}')`;
    
    audioPlayer.src = song.src;
    
    // Highlight bài đang hát
    const items = document.querySelectorAll(".playlist-item");
    items.forEach(el => el.style.background = "transparent");
    if(items[index]) items[index].style.background = "rgba(255,255,255,0.1)";

    rate(0);
}

/* --- 7. ĐIỀU KHIỂN PHÁT NHẠC --- */
function playSong() {
    isPlaying = true;
    if(playText) playText.innerText = "PAUSE";
    
    // --- THÊM DÒNG NÀY ĐỂ ĐĨA XOAY ---
    if(albumArt) albumArt.classList.add('playing');

    if(albumArt) albumArt.style.animation = "spin 6s linear infinite";
    visualizerBars.forEach(bar => bar.style.animationPlayState = "running");
    wheels.forEach(wheel => wheel.style.animationPlayState = "running");

    audioPlayer.play()
        .then(() => { addToHistory(playlist[currentSongIndex]); })
        .catch(e => console.log("Cần tương tác người dùng"));
}

function pauseSong() {
    isPlaying = false;
    if(playText) playText.innerText = "PLAY";
    
    // --- THÊM DÒNG NÀY ĐỂ ĐĨA DỪNG ---
    if(albumArt) albumArt.classList.remove('playing');

    if(albumArt) albumArt.style.animation = "none";
    visualizerBars.forEach(bar => bar.style.animationPlayState = "paused");
    wheels.forEach(wheel => wheel.style.animationPlayState = "paused");

    audioPlayer.pause();
}

/* --- 8. SỰ KIỆN CLICK --- */
if(playBtn) playBtn.addEventListener("click", () => isPlaying ? pauseSong() : playSong());

document.getElementById("btn-prev").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    playSong();
});

document.getElementById("btn-next").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    playSong();
});

/* --- 9. THANH TIẾN TRÌNH --- */
audioPlayer.addEventListener("timeupdate", () => {
    const current = audioPlayer.currentTime;
    const duration = audioPlayer.duration || 0;
    if(progressBar) {
        progressBar.max = duration;
        progressBar.value = current;
    }
    document.getElementById("current-time").innerText = formatTime(current);
    document.getElementById("duration").innerText = formatTime(duration);
});

if(progressBar) {
    progressBar.addEventListener("input", () => {
        audioPlayer.currentTime = progressBar.value;
    });
}

// Tự chuyển bài
audioPlayer.addEventListener("ended", () => {
    document.getElementById("btn-next").click();
});

// Format thời gian
function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' + s : s}`;
}

// Đánh giá sao
window.rate = function(n) {
    const stars = document.querySelectorAll(".star");
    stars.forEach((s, i) => {
        if(i < n) s.classList.add("selected");
        else s.classList.remove("selected");
    });
}

function logout() { window.location.href = 'login.html'; }

// BẮT ĐẦU CHƯƠNG TRÌNH
document.addEventListener('DOMContentLoaded', init);