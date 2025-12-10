/* --- HOME.JS - LOGIC XỬ LÝ GIAO DIỆN & TÌM KIẾM (ĐÃ HOÀN THIỆN) --- */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- KHAI BÁO CÁC PHẦN TỬ CẦN QUẢN LÝ HIỂN THỊ ---
    const searchInput = document.querySelector('.search-box-new input[type="text"]');
    const searchResultsWrapper = document.getElementById('search-results-wrapper'); 
    const searchResultsList = document.getElementById('search-list');
    const searchResultsTitle = document.getElementById('search-results-title');

    // Các phần tử chính của trang HOME cần ẩn khi tìm kiếm:
    const mainContentSections = document.getElementById('main-content');
    const heroSection = document.querySelector('.hero'); // Sửa: Dùng selector '.hero' thay vì '.hero-section'
    
    // Lấy các container cha chứa Artist List, Library Grid và Chart List 
    // (Vì chúng không có ID, ta tìm phần tử cha gần nhất có class 'content-container')
    const artistContainerWrapper = document.getElementById('artist-list') ? document.getElementById('artist-list').closest('.content-container') : null;
    const libraryContainerWrapper = document.querySelector('.library-grid') ? document.querySelector('.library-grid').closest('.content-container') : null;
    const chartContainerWrapper = document.getElementById('chart-list') ? document.getElementById('chart-list').closest('.content-container') : null;


    // --- 1. RENDER NGHỆ SĨ (ARTISTS) ---
    const artistContainer = document.getElementById('artist-list');
    if (artistContainer && typeof artistsData !== 'undefined' && typeof songsData !== 'undefined') {
        artistsData.forEach(artist => {
            const div = document.createElement('div');
            div.className = 'artist-card';
            
            // --- LOGIC ONCLICK CỦA ARTIST ---
            div.onclick = () => {
                const artistSongs = songsData.filter(song => song.artist.includes(artist.name.trim()));

                if (artistSongs.length > 0) {
                    localStorage.setItem('currentSong', JSON.stringify(artistSongs[0]));
                    localStorage.setItem('playlistData', JSON.stringify(artistSongs));
                    window.location.href = 'play.html';
                } else {
                    alert(`Chưa có bài hát nào của ${artist.name} trong hệ thống!`);
                }
            };
            // --- KẾT THÚC LOGIC ONCLICK ---

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

    // --- 2. RENDER CÁC MỤC PLAYLIST (SECTIONS) ---
    if (mainContentSections && typeof sectionsData !== 'undefined' && typeof songsData !== 'undefined') {
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

            // Lọc và tạo playlist cho Section này
            const sectionPlaylist = section.items
                .map(id => songsData.find(s => s.id === id))
                .filter(song => song); 

            sectionPlaylist.forEach((song, itemIndex) => {
                const card = createMusicCard(song, sectionPlaylist);
                card.style.animationDelay = `${itemIndex * 0.1}s`; 
                list.appendChild(card);
            });

            // Gắn vào DOM
            scrollWrapper.appendChild(btnLeft);
            scrollWrapper.appendChild(list);
            scrollWrapper.appendChild(btnRight);
            
            mainContentSections.appendChild(header);
            mainContentSections.appendChild(scrollWrapper);
        });
    }

    // --- 3. RENDER BẢNG XẾP HẠNG (CHARTS) ---
    const chartContainer = document.getElementById('chart-list');
    if (chartContainer && typeof chartsData !== 'undefined' && typeof songsData !== 'undefined') {
        const chartPlaylist = chartsData.map(id => songsData.find(s => s.id === id)).filter(Boolean);
        chartsData.forEach((songID, index) => {
            const song = songsData.find(s => s.id === songID);
            
            if (song) {
                const div = document.createElement('div');
                div.className = 'chart-item';
                
                div.onclick = () => {
                    localStorage.setItem('currentSong', JSON.stringify(song));
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


    // --- 4. LOGIC TÌM KIẾM TỰ ĐỘNG (AUTO-SEARCH LOGIC) ---
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            const query = event.target.value.toLowerCase().trim();
            performSearch(query, {
                searchResultsWrapper, searchResultsList, searchResultsTitle,
                mainContentSections, heroSection, libraryContainerWrapper, artistContainerWrapper, chartContainerWrapper
            });
        });
    }
    
    // --- 5. XỬ LÝ USER VÀ DROPDOWN (Giữ nguyên) ---
    const email = localStorage.getItem('userEmail') || 'Guest';
    let username = email.includes('@') ? email.split('@')[0] : email;
    
    // Hiển thị trên navbar
    const userDisplay = document.getElementById('username-display');
    if(userDisplay) userDisplay.textContent = username;
    // Hiển thị tên trong thư viện nếu có
    const libraryUserDisplay = document.getElementById('library-username');
    if(libraryUserDisplay) libraryUserDisplay.textContent = username;

    const profileBtn = document.getElementById('user-profile-btn');
    const dropdownMenu = document.getElementById('profile-dropdown');
    const dropdownUsername = document.getElementById('dropdown-username');
    const dropdownEmail = document.getElementById('dropdown-email');
    
    // Cập nhật thông tin trong dropdown
    function updateDropdownInfo() {
        const email = localStorage.getItem('userEmail') || 'guest@musicwave.com';
        const username_val = userDisplay ? userDisplay.textContent : 'Guest';
        
        if(dropdownUsername) dropdownUsername.textContent = username_val;
        if(dropdownEmail) dropdownEmail.textContent = email;
    }

    if (profileBtn) {
        profileBtn.addEventListener('click', (event) => {
            event.preventDefault();
            updateDropdownInfo();
            
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            } else {
                dropdownMenu.style.display = 'block';
            }
        });
    }
    
    document.addEventListener('click', (event) => {
        if (dropdownMenu && dropdownMenu.style.display === 'block' && profileBtn && !profileBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Menu Mobile (Giữ nguyên)
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
});


/* --- CÁC HÀM HỖ TRỢ CHUNG --- */

/**
 * Tạo thẻ nhạc (music-card) và gắn sự kiện click để phát nhạc.
 * @param {object} song - Dữ liệu bài hát.
 * @param {Array<object>} playlist - Danh sách bài hát để tạo playlist.
 * @returns {HTMLElement} Thẻ div.music-card
 */
function createMusicCard(song, playlist) {
    const card = document.createElement('div');
    card.className = 'music-card';
    
    card.onclick = () => {
        localStorage.setItem('currentSong', JSON.stringify(song));
        localStorage.setItem('playlistData', JSON.stringify(playlist));
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
    return card;
}


/**
 * Hàm tìm kiếm và cập nhật giao diện.
 * @param {string} query - Từ khóa tìm kiếm (đã được normalize thành chữ thường).
 * @param {object} elements - Các phần tử DOM cần quản lý ẩn/hiện.
 */
function performSearch(query, elements) {
    // Đảm bảo songsData tồn tại và được load
    if (typeof songsData === 'undefined') {
        console.error("Lỗi: Không tìm thấy songsData. Đảm bảo data.js được load trước home.js.");
        return;
    }

    // Gán các phần tử từ object elements
    const { 
        searchResultsWrapper, searchResultsList, searchResultsTitle,
        mainContentSections, heroSection, libraryContainerWrapper, artistContainerWrapper, chartContainerWrapper
    } = elements;

    // 1. Xử lý khi không có từ khóa tìm kiếm
    if (query.length === 0) {
        if(searchResultsWrapper) searchResultsWrapper.style.display = 'none';
        
        // Hiển thị lại các phần nội dung chính
        if(heroSection) heroSection.style.display = 'flex'; // Dùng 'flex' theo style inline trong HTML
        if(artistContainerWrapper) artistContainerWrapper.style.display = 'block'; 
        if(libraryContainerWrapper) libraryContainerWrapper.style.display = 'block';
        if(mainContentSections) mainContentSections.style.display = 'block'; 
        if(chartContainerWrapper) chartContainerWrapper.style.display = 'block'; 
        return;
    }

    // 2. Ẩn các phần nội dung chính khi có từ khóa
    if(heroSection) heroSection.style.display = 'none';
    if(artistContainerWrapper) artistContainerWrapper.style.display = 'none';
    if(libraryContainerWrapper) libraryContainerWrapper.style.display = 'none';
    if(mainContentSections) mainContentSections.style.display = 'none';
    if(chartContainerWrapper) chartContainerWrapper.style.display = 'none';


    // 3. Lọc dữ liệu từ songsData
    // (TÌM KIẾM TRÊN CẢ TÊN BÀI HÁT VÀ NGHỆ SĨ)
    const filteredSongs = songsData.filter(song => {
        const titleMatch = song.title.toLowerCase().includes(query);
        const artistMatch = song.artist.toLowerCase().includes(query);
        return titleMatch || artistMatch;
    });

    // 4. Cập nhật tiêu đề và hiển thị container kết quả
    if (searchResultsTitle) searchResultsTitle.textContent = `Kết quả tìm kiếm cho: "${query}" (${filteredSongs.length} bài hát)`;
    if (searchResultsList) searchResultsList.innerHTML = ''; // Xóa kết quả cũ
    if (searchResultsWrapper) searchResultsWrapper.style.display = 'block';


    // 5. Render kết quả
    if (filteredSongs.length > 0) {
        filteredSongs.forEach((song, index) => {
            // Sử dụng hàm createMusicCard, truyền filteredSongs làm playlist
            const card = createMusicCard(song, filteredSongs);
            card.style.animationDelay = `${index * 0.05}s`; 
            if (searchResultsList) searchResultsList.appendChild(card);
        });
    } else {
        if (searchResultsList) searchResultsList.innerHTML = '<p style="color:#aaa; text-align:center; padding: 40px; font-size: 1.1em; width: 100%;">Không tìm thấy bài hát hoặc nghệ sĩ nào phù hợp với từ khóa.</p>';
    }
}


function scrollList(id, amount) {
    const container = document.getElementById(id);
    if(container) {
        container.scrollBy({ left: amount, behavior: 'smooth' });
    }
}

// Hàm đăng xuất (được gọi từ onclick của button trong HTML)
function logout() {
    window.location.href = 'login.html';
}
function logoutAndRedirect() {
    localStorage.removeItem('userEmail');
    alert("Đã đăng xuất thành công!");
    window.location.href = 'login.html';
}