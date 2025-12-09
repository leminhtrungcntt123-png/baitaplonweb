/* --- HOME.JS - LOGIC XỬ LÝ GIAO DIỆN --- */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. RENDER THỂ LOẠI (GENRES) ---
    const genreContainer = document.getElementById('genre-list');
    if (genreContainer && typeof genresData !== 'undefined') {
        genresData.forEach((g, index) => {
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

    // --- 2. RENDER NGHỆ SĨ (ARTISTS) ---
    const artistContainer = document.getElementById('artist-list');
    if (artistContainer && typeof artistsData !== 'undefined') {
        artistsData.forEach(artist => {
            const div = document.createElement('div');
            div.className = 'artist-card';
            div.onclick = () => alert(`Đã chọn nghệ sĩ: ${artist.name}`); // Demo click
            div.innerHTML = `
                <div class="artist-img-wrapper">
                    <img src="${artist.img}" alt="${artist.name}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3844/3844724.png'">
                </div>
                <div class="artist-name">${artist.name}</div>
                <div class="artist-label">Nghệ sĩ</div>
            `;
            artistContainer.appendChild(div);
        });
    }

    // --- 3. RENDER CÁC MỤC PLAYLIST (SECTIONS - QUAN TRỌNG) ---
    const mainContent = document.getElementById('main-content');
    if (mainContent && typeof sectionsData !== 'undefined') {
        sectionsData.forEach((section, secIndex) => {
            // Tạo Header
            const header = document.createElement('div');
            header.className = 'section-header';
            header.innerHTML = `<h2>${section.title}</h2>`;
            
            // Tạo Wrapper
            const scrollWrapper = document.createElement('div');
            scrollWrapper.className = 'scroll-wrapper';
            
            // Nút Left/Right
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

            // Lặp qua danh sách ID trong mỗi section
            section.items.forEach((songID, itemIndex) => {
                // TÌM BÀI HÁT TRONG KHO TỔNG
                const song = songsData.find(s => s.id === songID);

                if (song) {
                    const card = document.createElement('div');
                    card.className = 'music-card';
                    card.style.animationDelay = `${itemIndex * 0.1}s`; 
                    
                    // --- CLICK ĐỂ PHÁT NHẠC ---
                    card.onclick = () => {
                        // Lưu bài hiện tại
                        localStorage.setItem('currentSong', JSON.stringify(song));
                        
                        // Tạo playlist từ section này để qua kia next bài được
                        const currentPlaylist = section.items
                            .map(id => songsData.find(s => s.id === id))
                            .filter(Boolean);
                        localStorage.setItem('playlistData', JSON.stringify(currentPlaylist));
                        
                        // Chuyển trang
                        window.location.href = 'play.html';
                    };

                    card.innerHTML = `
                        <div class="card-img-wrapper">
                            <img src="${song.img}" alt="${song.title}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3844/3844724.png'">
                            <div class="play-btn-overlay">
                                <i class="fa-solid fa-circle-play"></i>
                            </div>
                        </div>
                        <div class="card-title">${song.title}</div>
                        <div class="card-desc">${song.artist}</div>
                    `;
                    list.appendChild(card);
                }
            });

            // Gắn vào DOM
            scrollWrapper.appendChild(btnLeft);
            scrollWrapper.appendChild(list);
            scrollWrapper.appendChild(btnRight);
            
            mainContent.appendChild(header);
            mainContent.appendChild(scrollWrapper);
        });
    }

    // --- 4. RENDER BẢNG XẾP HẠNG (CHARTS) ---
    const chartContainer = document.getElementById('chart-list');
    if (chartContainer && typeof chartsData !== 'undefined') {
        chartsData.forEach((songID, index) => {
            const song = songsData.find(s => s.id === songID);
            
            if (song) {
                const div = document.createElement('div');
                div.className = 'chart-item';
                
                div.onclick = () => {
                    localStorage.setItem('currentSong', JSON.stringify(song));
                    // Tạo playlist từ BXH
                    const chartPlaylist = chartsData.map(id => songsData.find(s => s.id === id)).filter(Boolean);
                    localStorage.setItem('playlistData', JSON.stringify(chartPlaylist));
                    window.location.href = 'play.html';
                };

                div.innerHTML = `
                    <div class="chart-rank">${index + 1}</div>
                    <img src="${song.img}" class="chart-img" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3844/3844724.png'">
                    <div class="chart-info">
                        <div class="chart-title">${song.title}</div>
                        <div class="chart-artist">${song.artist}</div>
                    </div>
                    <div class="chart-stats">
                        <i class="fa-regular fa-heart"></i>
                        <span>${song.time || '04:00'}</span>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                `;
                chartContainer.appendChild(div);
            }
        });
    }

    // --- 5. XỬ LÝ USER ---
    const email = localStorage.getItem('userEmail') || 'User';
    let username = email.includes('@') ? email.split('@')[0] : email;
    
    // Hiển thị trên navbar
    const userDisplay = document.getElementById('username-display');
    if(userDisplay) userDisplay.textContent = username;
    // Hiển thị tên trong thư viện nếu có
    const libraryUserDisplay = document.getElementById('library-username');
    if(libraryUserDisplay) libraryUserDisplay.textContent = username;
});

/* --- CÁC HÀM HỖ TRỢ --- */
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

// Menu Mobile
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
