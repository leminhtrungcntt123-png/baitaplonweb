/* --- 1. DỮ LIỆU (DATA) --- */

// Dữ liệu Thể loại
const genres = ["Tất cả", "V-Pop", "K-Pop", "US-UK", "Ballad", "Lofi", "EDM", "Indie", "Rap/Hip-hop"];

// Dữ liệu các Mục nhạc (Playlist ngang)
const sections = [
    {
        title: "Dành riêng cho bạn",
        items: [
            { title: "Chill Vibes", desc: "Thư giãn cực mạnh", img: "../img/ChillVibes.jpeg" },
            { title: "Ballad", desc: "Andree, Hoàng Dũng...", img: "../img/1Phut.jpeg" },
            { title: "Lofi Study", desc: "Tập trung học tập", img: "../img/LofiStudy.jpeg" },
            { title: "Hit V-Pop", desc: "Nhạc Việt hay nhất", img: "../img/HitVpop.jpg" },
            { title: "Bảo tàng của tiếc nuối", desc: "Album của Vũ", img: "../img/NhungLoiHuaBoQuen.jpeg" },
            { title: "Mùa đông", desc: "Modric...", img: "../img/LastChristmas.jpeg" },
            { title: "Kpop", desc: "Gragon, Son Heung-min...", img: "../img/ThisLove.jpeg" },
        ]
    },
    {
        title: "Có thể bạn sẽ thích",
        items: [
            { title: "Ghé Qua", desc: "Tác giả", img: "../img/GheQua.jpeg" },
            { title: "10 Ngàn Năm", desc: "Tác giả", img: "../img/10NganNam.jpeg" },
            { title: "Lối Nhỏ", desc: "Tác giả", img: "../img/LoiNho.jpeg" },
            { title: "Đại Lộ Mặt Trời", desc: "Tác giả", img: "../img/DaiLoMatTroi.jpeg" },
            { title: "Cảm Ơn Và Xin Lỗi", desc: "Tác giả", img: "../img/CamOnVaXinLoi.jpeg" },
            { title: "Chờ Anh Nhé", desc: "Tác giả", img: "../img/ChoAnhNhe.jpeg" },
            { title: "Phép Màu", desc: "Tác giả", img: "../img/PhepMau.jpeg" },
            { title: "Lễ Đường", desc: "Tác giả", img: "../img/LeDuong.jpeg" }
        ]
    },
    {
        title: "Mới phát hành",
        items: [
            { title: "Tháng Tư Là Lời Nối Dối Của Em", desc: "Hà Anh Tuấn", img: "../img/Thang4LaLoiNoiDoi.jpeg" },
            { title: "Nơi Tình Yêu Kết Thúc", desc: "Bùi Anh Tuấn", img: "../img/NoiTinhYeuKetThuc.jpeg" },
            { title: "Em Đồng Ý", desc: "Đức Phúc x 911", img: "../img/EmDongY.jpeg" },
            { title: "Những Kẻ Mộng Mơ", desc: "Noo Phước Thịnh", img: "../img/NhungKeMongMo.jpeg" },
            { title: "Về Phía Mưa", desc: "Thế Bảo", img: "../img/VePhiaMua.jpeg" },
            { title: "Suýt Nữa Thì", desc: "ANDIEZ", img: "../img/SuytNuaThi.jpeg" },
            { title: "W/n-3107-2", desc: "ft. Nâu, Dương", img: "../img/3107-2.jpeg" },
            { title: "Day Dứt Nỗi Đau", desc: "Mr.siro", img: "../img/DayDutNoiDau.jpeg" },
            { title: "Thêm Bao Nhiêu Lâu", desc: "Đạt G", img: "../img/ThemBaoNhieuLau.jpeg" }
        ]
    },
    {
        title: "Jack97",
        items: [
            { title: "Đom Đóm", desc: "Jack", img: "../img/DomDom.jpeg" },
            { title: "Về Bên Anh", desc: "Jack", img: "../img/VeBenAnh.jpeg" },
            { title: "Sóng Gió", desc: "Jack", img: "../img/SongGio.jpeg" },
            { title: "Hoa Hải Đường", desc: "Jack", img: "../img/HoaHaiDuong.jpeg" },
            { title: "Em Gì Ơi", desc: "Jack", img: "../img/EmGiOi.jpeg" },
            { title: "Sao Em Vô Tình", desc: "Jack", img: "../img/SaoEmVoTinh.jpeg" },
            { title: "Việt Nam Tôi", desc: "Jack", img: "../img/VietNamToi.jpeg" },
            { title: "Mẹ Ơi 2", desc: "Jack", img: "../img/MeOi2.jpeg" },
            { title: "Bạc Phận", desc: "Jack", img: "../img/BacPhan.jpeg" }
        ]
    },
    {
        title: "Sơn Tùng M-TP",
        items: [
            { title: "Chắc Ai Đó Sẽ Về", desc: "Sơn Tùng M-TP", img: "../img/ChacAiDoSeVe.jpeg" },
            { title: "Âm Thầm Bên Em", desc: "Sơn Tùng M-TP", img: "../img/AmThamBenEm.jpeg" },
            { title: "Hay Trao Cho Anh", desc: "Sơn Tùng M-TP", img: "../img/HayTraoChoAnh.jpeg" },
            { title: "Chúng Ta Của Hiện Tại", desc: "Sơn Tùng M-TP", img: "../img/ChungTaCuaHienTai.jpeg" },
            { title: "Anh Sai Rồi", desc: "Sơn Tùng M-TP", img: "../img/AnhSaiRoi.jpeg" },
            { title: "Nơi Này Có Anh", desc: "Sơn Tùng M-TP", img: "../img/NoiNayCoAnh.jpeg" },
            { title: "Nắng Ấm Xa Dần", desc: "Sơn Tùng M-TP", img: "../img/NangAmXaDan.jpeg" },
            { title: "Chúng Ta Không Thuộc Về Nhau", desc: "Sơn Tùng M-TP", img: "../img/ChungTaKhongThuocVeNhau.jpeg" }
        ]
    }
];

// Dữ liệu Nghệ sĩ (MỚI THÊM)
const artists = [
    { name: "Sơn Tùng M-TP", img: "../img/SonTung.jpeg" },
    { name: "Vũ", img: "../img/Vu.jpeg" },
    { name: "Hà Anh Tuấn", img: "../img/HaAnhTuan.jpeg" },
    { name: "Thùy Chi", img: "../img/ThuyChi.jpeg" },
    { name: "Justin Bieber", img: "../img/JustinBieber.jpeg" },
    { name: "Jack97", img: "../img/Jack.jpeg" },
    { name: "Dương Domic", img: "../img/DuongDomic.jpeg" }
];

// Dữ liệu Bảng xếp hạng (MỚI THÊM)
const charts = [
    { rank: 1, title: "Khó Vẽ Nụ Cười", artist: "Đạt G, Du Uyên", img: "../img/KhoVeNuCuoi.jpeg", time: "05:20" },
    { rank: 2, title: "Gạt Đi Nước Mắt", artist: "Noo Phước Thịnh", img: "../img/GatDiNuocMat.jpeg", time: "04:43" },
    { rank: 3, title: "Thương Em Là Điều Anh Không Thể Ngờ", artist: "Noo Phước Thịnh", img: "../img/ThuongEmLaDieuAnhKhongTheNgo.jpeg", time: "04:29" },
    { rank: 4, title: "Pin Dự Phòng", artist: "Duong Domic", img: "../img/PinDuPhong.jpeg", time: "03:55" },
    { rank: 5, title: "Đau Để Trưởng Thành", artist: "Only C", img: "../img/DauDeTruongThanh.jpeg", time: "02:55" }
];

/* --- 2. HÀM RENDER GIAO DIỆN --- */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 2.1 RENDER THANH THỂ LOẠI (GENRES) ---
    const genreContainer = document.getElementById('genre-list');
    if (genreContainer) {
        genres.forEach((g, index) => {
            const btn = document.createElement('div');
            btn.className = `genre-chip ${index === 0 ? 'active' : ''}`;
            btn.innerText = g;
            btn.onclick = () => {
                document.querySelectorAll('.genre-chip').forEach(el => el.classList.remove('active'));
                btn.classList.add('active');
            };
            genreContainer.appendChild(btn);
        });
    }

    // --- 2.2 RENDER NGHỆ SĨ (ARTISTS) - PHẦN BẠN HỎI ---
    const artistContainer = document.getElementById('artist-list');
    if (artistContainer) {
        artists.forEach(artist => {
            const div = document.createElement('div');
            div.className = 'artist-card';
            div.onclick = () => window.location.href = '#';
            div.innerHTML = `
                <div class="artist-img-wrapper">
                    <img src="${artist.img}" alt="${artist.name}">
                </div>
                <div class="artist-name">${artist.name}</div>
                <div class="artist-label">Nghệ sĩ</div>
            `;
            artistContainer.appendChild(div);
        });
    }

    // --- 2.3 RENDER CÁC MỤC PLAYLIST (SECTIONS) ---
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        sections.forEach((section, secIndex) => {
            // Tạo Header
            const header = document.createElement('div');
            header.className = 'section-header';
            header.innerHTML = `<h2>${section.title}</h2>`;
            
            // Tạo Wrapper cho Scroll
            const scrollWrapper = document.createElement('div');
            scrollWrapper.className = 'scroll-wrapper';
            
            // Nút Left
            const btnLeft = document.createElement('button');
            btnLeft.className = 'scroll-btn scroll-left';
            btnLeft.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
            btnLeft.onclick = () => scrollList(`list-${secIndex}`, -300);

            // Nút Right
            const btnRight = document.createElement('button');
            btnRight.className = 'scroll-btn scroll-right';
            btnRight.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
            btnRight.onclick = () => scrollList(`list-${secIndex}`, 300);

            // List chứa các card
            const list = document.createElement('div');
            list.className = 'horizontal-list';
            list.id = `list-${secIndex}`;

            // Render từng card
            section.items.forEach((item, itemIndex) => {
                const card = document.createElement('div');
                card.className = 'music-card';
                card.style.animationDelay = `${itemIndex * 0.1}s`; 
                card.onclick = () => window.location.href = 'play.html';
                
                card.innerHTML = `
                    <div class="card-img-wrapper">
                        <img src="${item.img}" alt="${item.title}">
                        <div class="play-btn-overlay">
                            <i class="fa-solid fa-circle-play"></i>
                        </div>
                    </div>
                    <div class="card-title">${item.title}</div>
                    <div class="card-desc">${item.desc}</div>
                `;
                list.appendChild(card);
            });

            // Gắn vào DOM
            scrollWrapper.appendChild(btnLeft);
            scrollWrapper.appendChild(list);
            scrollWrapper.appendChild(btnRight);
            
            mainContent.appendChild(header);
            mainContent.appendChild(scrollWrapper);
        });
    }

    // --- 2.4 RENDER BẢNG XẾP HẠNG (CHARTS) - PHẦN BẠN HỎI ---
    const chartContainer = document.getElementById('chart-list');
    if (chartContainer) {
        charts.forEach(item => {
            const div = document.createElement('div');
            div.className = 'chart-item';
            div.onclick = () => window.location.href = 'play.html';
            div.innerHTML = `
                <div class="chart-rank">${item.rank}</div>
                <img src="${item.img}" class="chart-img">
                <div class="chart-info">
                    <div class="chart-title">${item.title}</div>
                    <div class="chart-artist">${item.artist}</div>
                </div>
                <div class="chart-stats">
                    <i class="fa-regular fa-heart"></i>
                    <span>${item.time}</span>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            `;
            chartContainer.appendChild(div);
        });
    }

    // --- 2.5 XỬ LÝ TÊN USER TỪ LOGIN ---
    const email = localStorage.getItem('userEmail') || 'User';
    let username = email;
    if (email.includes('@')) {
        username = email.split('@')[0];
    }
    
    // Hiển thị tên trên Navbar
    const userDisplay = document.getElementById('username-display');
    if(userDisplay) userDisplay.textContent = username;

    // Hiển thị tên trong phần Thư viện (Nếu có)
    const libraryUserDisplay = document.getElementById('library-username');
    if(libraryUserDisplay) libraryUserDisplay.textContent = username;
});

/* --- 3. CÁC HÀM HỖ TRỢ --- */

// Hàm cuộn danh sách
function scrollList(id, amount) {
    const container = document.getElementById(id);
    if(container) {
        container.scrollBy({ left: amount, behavior: 'smooth' });
    }
}

// Hàm đăng xuất
function logout() {
    window.location.href = 'login.html';
}

// Hàm menu mobile
const menuToggle = document.getElementById('menu-toggle');
if(menuToggle){
    menuToggle.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '0';
            navLinks.style.backgroundColor = 'rgba(0,0,0,0.9)';
            navLinks.style.padding = '20px';
            navLinks.style.width = '100%';
            navLinks.style.zIndex = '1000';
        }
    });
}