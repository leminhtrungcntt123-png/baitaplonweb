/* --- DATABASE TẬP TRUNG --- */

// 1. KHO BÀI HÁT TỔNG (Tất cả bài hát phải nằm ở đây)
const songsData = [
    {
        id: "hit_1",
        title: "Khó Vẽ Nụ Cười",
        artist: "Đạt G, Du Uyên",
        img: "../img/KhoVeNuCuoi.jpeg",
        src: "../mp3/khovenucuoi.mp3",
        time: "05:20",
        lyrics: "Vẽ nụ cười lên môi anh đi..."
    },
    {
        id: "hit_2",
        title: "Gạt Đi Nước Mắt",
        artist: "Noo Phước Thịnh",
        img: "../img/GatDiNuocMat.jpeg",
        src: "../mp3/gdnm.mp3",
        time: "04:43",
        lyrics: "..."
    },

    // --- SƠN TÙNG M-TP ---
    {
        id: "st_1",
        title: "Nơi Này Có Anh",
        artist: "Sơn Tùng M-TP",
        img: "../img/NoiNayCoAnh.jpeg",
        src: "../mp3/nnca.mp3",
        lyrics: "Em là ai từ đâu bước đến nơi đây..."
    },
    {
        id: "st_2",
        title: "Một Năm Mới Bình An",
        artist: "Sơn Tùng M-TP",
        img: "../img/motnammoibinhan.jpg",
        src: "../mp3/mnmba.mp3",
        lyrics: "Xuân mang tình yêu muôn nhà..."
    },
    {
        id: "st_3",
        title: "Có Chắc Yêu Là Đây",
        artist: "Sơn Tùng M-TP",
        img: "../img/cochacyeuladay.jpg",
        src: "../mp3/ccyld.mp3",
        lyrics: "..."
    },
    {
        id: "st_4",
        title: "Chắc Ai Đó Sẽ Về",
        artist: "Sơn Tùng M-TP",
        img: "../img/ChacAiDoSeVe.jpeg",
        src: "../mp3/cadsv.mp3", // Nhớ tải nhạc về nhé
        lyrics: "..."
    },
    {
        id: "st_5",
        title: "Âm Thầm Bên Em",
        artist: "Sơn Tùng M-TP",
        img: "../img/AmThamBenEm.jpeg",
        src: "../mp3/atbe.mp3", // Nhớ tải nhạc về nhé
        lyrics: "..."
    },
    {
        id: "st_6",
        title: "Hãy Trao Cho Anh",
        artist: "Sơn Tùng M-TP",
        img: "../img/HayTraoChoAnh.jpeg",
        src: "../mp3/htca.mp3", // Nhớ tải nhạc về nhé
        lyrics: "..."
    },
    {
        id: "st_7",
        title: "Anh Sai Rồi",
        artist: "Sơn Tùng M-TP",
        img: "../img/AnhSaiRoi.jpeg",
        src: "../mp3/asr.mp3", // Nhớ tải nhạc về nhé
        lyrics: "..."
    },

    // --- JACK 97 ---
    {
        id: "jack_1",
        title: "Đom Đóm",
        artist: "Jack97",
        img: "../img/DomDom.jpeg",
        src: "../mp3/dd.mp3",
        lyrics: "..."
    },
    {
        id: "jack_2",
        title: "Sóng Gió",
        artist: "Jack x K-ICM",
        img: "../img/SongGio.jpeg",
        src: "../mp3/sg.mp3",
        lyrics: "..."
    },
    {
        id: "jack_3",
        title: "Hoa Hải Đường",
        artist: "Jack x K-ICM",
        img: "../img/HoaHaiDuong.jpeg",
        src: "../mp3/hhd.mp3",
        lyrics: "..."
    },
    {
        id: "jack_4",
        title: "Bạc Phận",
        artist: "Jack x K-ICM",
        img: "../img/BacPhan.jpeg",
        src: "../mp3/bp.mp3",
        lyrics: "..."
    },
    {
        id: "jack_5",
        title: "Em Gì Ơi",
        artist: "Jack x K-ICM",
        img: "../img/EmGiOi.jpeg",
        src: "../mp3/ego.mp3",
        lyrics: "..."
    },
    {
        id: "jack_6",
        title: "Về Bên Anh",
        artist: "Jack x K-ICM",
        img: "../img/VeBenAnh.jpeg",
        src: "../mp3/vba.mp3",
        lyrics: "..."
    },
    {
        id: "jack_7",
        title: "Sao Em Vô Tình",
        artist: "Jack x K-ICM",
        img: "../img/SaoEmVoTinh.jpeg",
        src: "../mp3/sevt.mp3",
        lyrics: "..."
    },
    {
        id: "jack_9",
        title: "Hồng Nhan",
        artist: "Jack x K-ICM",
        img: "../img/HongNhan.png",
        src: "../mp3/hn.mp3",
        lyrics: "..."
    },
    {
        id: "jack_10",
        title: "Việt Nam Tôi",
        artist: "Jack x K-ICM",
        img: "../img/VietNamToi.jpeg",
        src: "../mp3/vnt.mp3",
        lyrics: "..."
    },
    {
        id: "jack_8",
        title: "Mẹ Ơi 2",
        artist: "Jack x K-ICM",
        img: "../img/MeOi2.jpeg",
        src: "../mp3/mo2.mp3",
        lyrics: "..."
    },
    // --- CHILL & LOFI ---
    {
        id: "chill_1",
        title: "Chill Vibes",
        artist: "Various Artists",
        img: "../img/ChillVibes.jpeg",
        src: "../mp3/chill1.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "lofi_1",
        title: "Lofi Study",
        artist: "Lofi Fruits",
        img: "../img/LofiStudy.jpeg",
        src: "../mp3/lofi1.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "ballad_1",
        title: "Ballad",
        artist: "Hoàng Dũng...",
        img: "../img/ChoAnhNhe.jpeg",
        src: "../mp3/can.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "vu_1",
        title: "Bảo tàng của tiếc nuối",
        artist: "Vũ",
        img: "../img/NhungLoiHuaBoQuen.jpeg",
        src: "../mp3/nlhbq.mp3",
        lyrics: "..."
    },
    {
        id: "vpop_1",
        title: "Nhạc Hot Nhất VPop",
        artist: "Hiếu Thứ Hai, Dương Domic...",
        img: "../img/HitVpop.jpg",
        src: "../mp3/lofi1.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "christmas_1",
        title: "Last Christmas",
        artist: "Modric...",
        img: "../img/LastChristmas.jpeg",
        src: "../mp3/lcm.mp3",
        lyrics: "(Nhạc không lời)"
    },
    // Có thể bạn sẽ thích
    // 
    {
        id: "fav_1",
        title: "1 Phút",
        artist: "ANDIEZ",
        img: "../img/1Phut.jpeg",
        src: "../mp3/1p.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "fav_2",
        title: "Ghé Qua",
        artist: "Modric...",
        img: "../img/GheQua.jpeg",
        src: "../mp3/gq.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "fav_3",
        title: "10 Ngàn Năm",
        artist: "Modric...",
        img: "../img/10NganNam.jpeg",
        src: "../mp3/10nn.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "fav_4",
        title: "Lối Nhỏ",
        artist: "Modric...",
        img: "../img/LoiNho.jpeg",
        src: "../mp3/ln.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "fav_5",
        title: "Cảm Ơn Và Xin Lỗi",
        artist: "Modric...",
        img: "../img/CamOnVaXinLoi.jpeg",
        src: "../mp3/covxl.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "fav_6",
        title: "Chờ Anh Nhé",
        artist: "Modric...",
        img: "../img/ChoAnhNhe.jpeg",
        src: "../mp3/can.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "fav_7",
        title: "Phép Màu",
        artist: "Modric...",
        img: "../img/PhepMau.jpeg",
        src: "../mp3/pm.mp3",
        lyrics: "(Nhạc không lời)"
    },
    // Mới Phát Hành
    {
        id: "new_1",
        title: "Tháng Tư Là Lời Nối Dối Của Em",
        artist: "Ca sĩ: Hà Anh Tuấn",
        img: "../img/Thang4LaLoiNoiDoi.jpeg",
        src: "../mp3/ttllndce.mp3",
        lyrics: "Mùa xuân có em như chưa bắt đầu\nVà cơn gió đang khẽ mơn man\nLay từng nhành hoa rơi\nEm đã bước tới như em đã từng\nChạy trốn với anh trên cánh đồng xanh\nKhúc nhạc hòa cùng\nNắng chiều dịu dàng\nĐể mình gần lại mãi\nNói lời thì thầm\nNhững điều thật thà\nĐã giữ trong tim mình\nNhững chặng đường dài\nNgỡ mình mệt nhoài\nĐã một lần gục ngã\nTháng tư có em ở đây\nNhìn tôi mỉm cười\nNhững cánh hoa phai tàn thật nhanh\nEm có bay xa em có đi xa mãi\nTháng tư đôi khi thật mong manh\nĐể mình nói ra những câu chân thật\nGiá như tôi một lần tin em\nCô gái tôi thương\nNay hóa theo mây gió\nĐể lại tháng tư ở đó\nMùa xuân có em như chưa bắt đầu\nVà cơn gió đang khẽ vô tình\nLay từng nhành hoa rơi\nEm vội xa khuất theo tia nắng chiều\nĐể lại dấu chân giữa cánh đồng xanh\nKhúc nhạc thầm lặng\nGiữa chiều muộn \nĐể mình gần lại mãi\nNói lời thì thầm\nNhững điều thật thà\nĐã giữ trong tim mình\nNhững chặng đường dài\nNgỡ mình mệt nhoài\nĐã một lần gục ngã\nTháng tư ánh sao phía xa\nBỗng nhiên dần tàn\nNhững cánh hoa phai tàn thật nhanh\nEm có bay xa em có đi xa mãi\nTháng tư đôi khi thật mong manh\nĐể mình nói ra những câu chân thật\nGiá như tôi một lần tin em\nCô gái tôi thương\nNay hóa theo mây gió\nĐể lại tháng tư ở đó\nVà tôi sẽ sống như\nNhững gì em thầm mơ\nVà tôi sẽ bước tiếp trên\nCon đường mình đã chọn\nVà khi tôi chết\nSẽ mỉm cười khi gặp em\nKhẽ chào cô gái tháng tư của tôi\nNhững kỷ niệm phai tàn thật nhanh\nEm đã bay xa em đã đi xa mãi\nTháng tư đôi khi thật mong manh\nĐể mình nói ra\nGiá như tôi một lần tin em\nCô gái tôi thương\nNay hóa theo mây gió\nĐể lại tháng tư xa mãi\nĐể lại tháng tư mình anh"
    },
    {
        id: "new_2",
        title: "Nơi Tình Yêu Kết Thúc",
        artist: "Modric...",
        img: "../img/NoiTinhYeuKetThuc.jpeg",
        src: "../mp3/ntykt.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "new_3",
        title: "Em Đồng Ý",
        artist: "Modric...",
        img: "../img/EmDongY.jpeg",
        src: "../mp3/edy.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "new_4",
        title: "Những Kẻ Mộng Mơ",
        artist: "Modric...",
        img: "../img/NhungKeMongMo.jpeg",
        src: "../mp3/nkmm.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "new_5",
        title: "Suýt Nữa Thì",
        artist: "Modric...",
        img: "../img/SuytNuaThi.jpeg",
        src: "../mp3/snt.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "new_6",
        title: "Đau Để Trưởng Thành",
        artist: "Modric...",
        img: "../img/DauDeTruongThanh.jpeg",
        src: "../mp3/ddtt.mp3",
        lyrics: "(Nhạc không lời)"
    },
    // Bảng xếp hạng tuần
    {
        id: "r1",
        title: "W/n 3107-2",
        artist: "Modric...",
        img: "../img/3107-2.jpeg",
        src: "../mp3/31072.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "r2",
        title: "Cảm Ơn và Xin Lỗi",
        artist: "Modric...",
        img: "../img/CamOnVaXinLoi.jpeg",
        src: "../mp3/covxl.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "r3",
        title: "Chờ Ngày Mưa Tan",
        artist: "Modric...",
        img: "../img/ChoNgayMuaTan.jpeg",
        src: "../mp3/cnmt.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "r4",
        title: "Gạt Đi Nước Mắt",
        artist: "Modric...",
        img: "../img/GatDiNuocMat.jpeg",
        src: "../mp3/gdnm.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "r5",
        title: "Khó Vẽ Nụ Cười",
        artist: "Modric...",
        img: "../img/KhoVeNuCuoi.jpeg",
        src: "../mp3/kvnc.mp3",
        lyrics: "(Nhạc không lời)"
    },
    {
        id: "r6",
        title: "Lễ Đường",
        artist: "Modric...",
        img: "../img/LeDuong.jpeg",
        src: "../mp3/ld.mp3",
        lyrics: "(Nhạc không lời)"
    }
];


// 2. CẤU TRÚC HIỂN THỊ TRANG HOME (SECTIONS)
// Bây giờ ở đây ta chỉ cần khai báo ID bài hát thôi.
// Code sẽ tự động dùng ID này mò vào 'songsData' để lấy Ảnh, Tên, Link nhạc...
const sectionsData = [
    // MỤC 1
    {
        title: "Dành riêng cho bạn",
        items: ["chill_1", "ballad_1", "lofi_1", "vpop_1", "vu_1", "christmas_1"] 
        // (Lưu ý: Các ID này phải có thật trong songsData ở trên, nếu chưa có bạn phải khai báo thêm)
    },

    // MỤC 2
    {
        title: "Có thể bạn sẽ thích",
        items: ["fav_1", "fav_2", "fav_3", "fav_4", "fav_5", "fav_6", "fav_7"]
    },

    // MỤC 3
    {
        title: "Mới phát hành",
        items: ["new_1", "new_2", "new_3", "new_4", "new_5","new-6"]
    },

    // MỤC 4
    {
        title: "Jack97",
        items: ["jack_1", "jack_2", "jack_3", "jack_4", "jack_5", "jack_6", "jack_7", "jack_8", "jack_9"]
    },

    // MỤC 5
    {
        title: "Sơn Tùng M-TP",
        items: ["st_1", "st_2", "st_3", "st_4", "st_5", "st_6", "st_7", "st_8"]
    }
];

// 3. DỮ LIỆU NGHỆ SĨ (Chỉ để hiển thị tròn tròn, không cần phát nhạc nên giữ nguyên)
const artistsData = [
    { name: "Sơn Tùng M-TP", img: "../img/SonTung.jpeg" },
    { name: "Jack97", img: "../img/Jack.jpeg" },
    { name: "Vũ", img: "../img/Vu.jpeg" },
    { name: "Justin Bieber", img: "../img/JustinBieber.jpeg" },
    { name: "Thùy Chi", img: "../img/ThuyChi.jpeg" },
    { name: "Hà Anh Tuấn", img: "../img/HaAnhTuan.jpeg" }
];
// 4. BẢNG XẾP HẠNG TUẦN 
    const chartsData = ["r1", "r2", "r3", "r4", "r5","r6"];
// 5. DỮ LIỆU THỂ LOẠI
    const genresData = ["Tất cả", "V-Pop", "K-Pop", "Ballad", "Lofi", "Rap"];