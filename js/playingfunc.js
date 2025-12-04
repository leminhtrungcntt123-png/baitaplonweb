// --- DANH SÁCH BÀI HÁT VÀ BIẾN ĐIỀU KHIỂN ---
// Danh sách bài hát (playlist) SẼ ĐƯỢC TẢI BẤT ĐỒNG BỘ từ data/playlist.json
let playlist = [];
let currentSongIndex = 0;
let isPlaying = false;

// --- DOM ELEMENTS ---
const audioPlayer = document.getElementById("audio-player");
const currentSongTitle = document.getElementById("current-song");
const songNameDisplay = document.getElementById("song-name");
const artistDisplay = document.getElementById("artist");
const albumArt = document.querySelector(".album-art");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");
const playPauseButton = document.getElementById("btn1-control");
const playPauseText = document.getElementById("play-pause-text");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const visualizerBars = document.querySelectorAll("#visualizer .bar");
const songLyricsDisplay = document.getElementById("song-lyrics");

// --- CHỨC NĂNG HỖ TRỢ ---

// Chuyển đổi giây thành định dạng MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${minutes}:${formattedSeconds}`;
}

// Cập nhật giao diện (tên bài, ảnh) và Tải bài hát
function loadSong(songIndex) {
  // Đảm bảo playlist đã được tải và có bài hát
  if (
    !playlist ||
    playlist.length === 0 ||
    songIndex < 0 ||
    songIndex >= playlist.length
  ) {
    console.error("Không tìm thấy bài hát hoặc danh sách trống.");
    return;
  }

  const song = playlist[songIndex];
  audioPlayer.src = song.src;
  currentSongTitle.textContent = song.name;
  songNameDisplay.textContent = song.name;
  artistDisplay.textContent = song.artist;
  albumArt.style.backgroundImage = `url('${song.img}')`;

  // Cập nhật Lyric: thay thế ký tự xuống dòng (\n) bằng thẻ <br>
  songLyricsDisplay.innerHTML = song.lyrics
    ? song.lyrics.replace(/\n/g, "<br>")
    : "Không có lời bài hát.";

  currentSongIndex = songIndex;

  // Reset rating
  document.querySelectorAll(".star").forEach((star) => {
    star.classList.remove("selected");
  });
  // Tải lại audio để cập nhật thời lượng (load)
  audioPlayer.load();
}

// Chức năng Phát nhạc
function playSong() {
  // Chỉ phát nếu playlist đã được tải và có bài hát
  if (playlist && playlist.length > 0) {
    isPlaying = true;
    playPauseText.textContent = "PAUSE";
    audioPlayer.play();
    albumArt.style.animationPlayState = "running";

    // BẬT VISUALIZER
    visualizerBars.forEach((bar) => {
      bar.style.animationPlayState = "running";
    });
  }
}

// Chức năng Dừng nhạc
function pauseSong() {
  isPlaying = false;
  playPauseText.textContent = "PLAY";
  audioPlayer.pause();
  albumArt.style.animationPlayState = "paused";

  // DỪNG VISUALIZER
  visualizerBars.forEach((bar) => {
    bar.style.animationPlayState = "paused";
  });
}

// --- XỬ LÝ SỰ KIỆN NÚT ---

playPauseButton.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

btnNext.addEventListener("click", () => {
  if (playlist.length === 0) return;
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  loadSong(currentSongIndex);
  playSong();
});

btnPrev.addEventListener("click", () => {
  if (playlist.length === 0) return;
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentSongIndex);
  playSong();
});

// Chức năng chọn bài hát từ playlist
window.selectSong = function (songName) {
  if (playlist.length === 0) return;
  const index = playlist.findIndex((song) => song.name === songName);
  if (index !== -1) {
    loadSong(index);
    playSong();
  }
};

// --- XỬ LÝ SỰ KIỆN AUDIO VÀ PROGRESS BAR ---

// Cập nhật tổng thời lượng khi audio được tải
audioPlayer.addEventListener("loadedmetadata", () => {
  durationDisplay.textContent = formatTime(audioPlayer.duration);
  progressBar.max = audioPlayer.duration;
});

// Cập nhật thanh progress và thời gian hiện tại
audioPlayer.addEventListener("timeupdate", () => {
  const currentTime = audioPlayer.currentTime;
  progressBar.value = currentTime;
  currentTimeDisplay.textContent = formatTime(currentTime);
});

// Tua nhạc
progressBar.addEventListener("change", () => {
  audioPlayer.currentTime = progressBar.value;
  // Giữ trạng thái chơi nhạc nếu đang chơi
  if (isPlaying) {
    audioPlayer.play();
  }
});

// Tự động chuyển bài khi kết thúc
audioPlayer.addEventListener("ended", () => {
  btnNext.click(); // Sử dụng logic của nút Next
});

// Đánh giá sao (giữ nguyên logic cũ)
window.rate = function (stars) {
  const starElements = document.querySelectorAll(".star");
  starElements.forEach((star, index) => {
    if (index < stars) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
};

// --- TẢI DỮ LIỆU VÀ KHỞI TẠO ---

async function loadPlaylistData() {
  try {
    // Tải file JSON. Giả định file nằm ở thư mục 'data/' so với file HTML gốc.
    const response = await fetch("../data/playlist.json");

    if (!response.ok) {
      throw new Error(
        `Lỗi HTTP: ${response.status} - Không tìm thấy file JSON. Vui lòng kiểm tra đường dẫn.`
      );
    }

    playlist = await response.json();

    if (playlist.length > 0) {
      // Sau khi tải xong, mới load bài hát đầu tiên
      loadSong(currentSongIndex);
      console.log(`Đã tải thành công ${playlist.length} bài hát.`);
    } else {
      console.warn("Danh sách playlist trống.");
    }

    // Đảm bảo Visualizer ở trạng thái paused khi load trang
    pauseSong();
  } catch (error) {
    console.error("Lỗi KHỞI TẠO TRÌNH PHÁT NHẠC:", error);
  }
}

// Logic xử lý Responsive Navbar cho Mobile (Giữ nguyên)
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const searchIconMobile = document.getElementById("search-icon-mobile");
const searchBox = document.getElementById("search-box");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    if (searchBox.classList.contains("active")) {
      searchBox.classList.remove("active");
    }
  });
}

if (searchIconMobile && searchBox) {
  searchIconMobile.addEventListener("click", function () {
    searchBox.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
}

// Bắt đầu tải dữ liệu khi file JS chạy
loadPlaylistData();
