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
        lyrics: "Anh sẽ chờ em\nDù biển xanh kia có cạn khô\nDù qua thêm bao kiếp\nAnh vẫn sẽ chờ\nNhân thế khổ đau\nTìm hoài sao không thấy nhau\nNgười thương chẳng thương mình\nCòn người không thương\nCứ theo ta cả một đời\nCây đã già nua\nChờ ngày chết cách xa cõi đời\nChiều hoàng hôn buông xuống\nPhía Tây nghẹn ngào\nUống chén tình say\nHọa người thương trong bức tranh\nHọa ánh mắt anh buồn\nHọa nụ cười thêm trên nét môi\nNhưng sao không được\nNhiều lần em muốn anh vui mà thôi\nHoạ vào nét môi anh nở cười tươi\nDòng lệ rớt rơi phai màu\nNhoè đi nụ cười khi ấy\nLòng thì đau đớn trong em khổ đau\nMà chẳng dám khóc đâu ai hiểu thấu\nVẫn họa thêm chiếc môi cười tiếp theo\nNhưng đau thấu trời\nCây đã già nua\nChờ ngày chết cách xa cõi đời\nChiều hoàng hôn buông xuống\nPhía Tây nghẹn ngào\nLỡ chén tình say\nHọa người thương trong bức tranh\nHọa ánh mắt anh buồn\nTìm nụ cười anh trên nét môi\nNhưng sao chẳng thấy\nNhiều lần em muốn anh vui mà thôi\nHọa vào nét môi anh nở cười tươi\nDòng lệ rớt rơi phai màu\nNhoè đi nụ cười khi ấy\nLòng thì đau đớn trong em khổ đau\nMà chẳng dám khóc đâu ai hiểu thấu\nVẫn họa thêm chiếc môi cười tiếp theo\nNhưng đau thấu trời\nKhóc thật nhiều\nNgồi khóc thật nhiều\nKhóc cho đời phong ba\nLắm đau mà chẳng nói ra\nĐến khi già\nBuồn hết một đời\nĐớn đau này của anh\nSẽ cao hơn trời\nNhiều lần em muốn anh vui mà thôi\nHọa vào nét môi em nở cười tươi\nDòng lệ rớt rơi phai màu\nNhoè đi nụ cười khi ấy\nLòng thì đau đớn trong em khổ đau\nMà chẳng dám khóc đâu ai hiểu thấu\nVẫn họa thêm chiếc môi cười tiếp theo\nNhưng đau ai thấu\nVẫn họa thêm chiếc môi cười lần nữa\nNhưng đau ai thấu?"
    },
    {
        id: "hit_2",
        title: "Gạt Đi Nước Mắt",
        artist: "Noo Phước Thịnh",
        img: "../img/GatDiNuocMat.jpeg",
        src: "../mp3/gatdinuopcmat.mp3",
        time: "04:43",
        lyrics: "Anh ngóng trông mãi\nMôi hôn vụng dại\nAnh khát khao mãi\nđôi tay ngày nào\nLà dĩ vãng\nQuá khứ mà thôi\nNay anh phải quên\nYêu dấu nay đã\nTrôi xa thật rồi\nTheo gió mây đến\nNơi phương trời nào\nChỉ còn anh và em với bao\nYêu thương nhạt nhoà\nNay giấc mơ ấy\nChia đôi ngả đường\nNay tiếng yêu ấy\nCất riêng mình ta\nLà dĩ vãng quá khứ mà thôi\nNay anh phải quên\nVì ai đã bước\nđi mãi không về\nVì ai lỡ quên\nBao câu ước thề\nNíu kéo chi người\nMuốn ra đi chẳng tiếc thương\nNgày trôi qua sẽ\nVùi lấp hy vọng\nChẳng còn dấu yêu\nCho anh mơ mộng\nXoá hết nỗi buồn\nGạt đi giọt nước mắt\nBaby Baby, I wanna go oh oh\nBaby Baby, I don't need to know oh oh\nNo trust, to cry\nNo love against\nBaby Baby, I wanna go oh oh\nBaby Baby, I don't need to know oh oh\nNo trust, to cry\nNo love against\nAnh sẽ làm quen với những niềm đau\nDần quên môi hôn sâu đành gạt nước mắt đi\nDẫu không biết bao nhiêu lâu\nđể mãi chôn sâu\nÁnh mắt đã nhạt khi\nEm vội đi rồi sớm mai\nChẳng có anh đây\nUh ho ah ha ah\nTrả lại em bao nhiêu yêu thương bấy lâu\nKhi chẳng còn nhau nơi đây ta phân ly\nLý do buông tay vì đâu you wanna go\nCó lẽ em hay biết nhưng anh siết\nTừng nỗi đau hằn sâu\nLẽ nào yêu thương là\nChỉ đợi chờ một ngày về hai lối\nLẽ nào cũng chỉ là đoạn đường gian dối\nXé ngang kỷ niệm tìm lại nơi đâu\nLẽ nào cũng chỉ là lời hẹn ước\nKhuất xa theo đợi chờ\nĐành vậy thôi gạt đi nước mắt còn vương\nVì ai đã bước\nđi mãi không về\nVì ai lỡ quên\nBao câu ước thề\nNíu kéo chi người\nMuốn ra đi chẳng tiếc thương\nNgày trôi qua sẽ\nVùi lấp hy vọng\nChẳng còn dấu yêu\nCho anh mơ mộng\nXoá hết nỗi buồn\nGạt đi giọt nước mắt\nVì ai đã bước\nđi mãi không về\nVì ai lỡ quên\nBao câu ước thề\nNíu kéo chi người\nMuốn ra đi chẳng tiếc thương\nNgày trôi qua sẽ\nVùi lấp hy vọng\nChẳng còn dấu yêu\nCho anh mơ mộng\nXoá hết nỗi buồn\nGạt đi giọt nước mắt"
    },

    // --- SƠN TÙNG M-TP ---
    {
        id: "st_1",
        title: "Nơi Này Có Anh",
        artist: "Sơn Tùng M-TP",
        img: "../img/NoiNayCoAnh.jpeg",
        src: "../mp3/nnca.mp3",
        lyrics: "Em là ai từ đâu bước đến nơi đây\nDịu dàng chân phương\nEm là ai tựa như ánh nắng ban mai\nNgọt ngào trong sương\nNgắm em thật lâu\nCon tim anh yếu mềm\nĐắm say từ phút đó\nTừng giây trôi yêu thêm\nBao ngày qua bình minh đánh thức\nXua tan bộn bề nơi anh\nBao ngày qua niềm thương nỗi nhớ\nBay theo bầu trời trong xanh\nLướt đôi hàng mi\nMong manh anh thẫn thờ\nMuốn hôn nhẹ mái tóc\nBờ môi em anh mơ\nCầm tay anh dựa vai anh\nKề bên anh nơi này có anh\nGió mang câu tình ca\nNgàn ánh sao vụt qua\nNhẹ ôm lấy em\nCầm tay anh dựa vai anh\nKề bên anh nơi này có anh\nKhép đôi mi thật lâu\nNguyện mãi bên cạnh nhau\nYêu say đắm như ngày đầu\nMùa xuân đến bình yên\nCho anh những giấc mơ\nHạ lưu giữ ngày mưa\nNgọt ngào nên thơ\nMùa thu lá vàng rơi\nĐông sang anh nhớ em\nTình yêu bé nhỏ xin\nDành tặng riêng em\nCòn đó tiếng nói ấy\nBên tai vấn vương bao ngày qua\nÁnh mắt bối rối\nNhớ thương bao ngày qua\nYêu em anh thẫn thờ\nCon tim bâng khuâng đâu có ngờ\nChẳng bao giờ phải mong chờ\nĐợi ai trong chiều hoàng hôn mờ\nĐắm chìm hoà vào vần thơ\nNgắm nhìn khờ dại mộng mơ\nĐừng bước vội vàng rồi làm ngơ\nLạnh lùng đó làm bộ dạng thờ ơ\nNhìn anh đi em nha\nHướng nụ cười cho riêng anh nha\nĐơn giản là yêu\nCon tim anh lên tiếng thôi\nCầm tay anh dựa vai anh\nKề bên anh nơi này có anh\nGió mang câu tình ca\nNgàn ánh sao vụt qua\nNhẹ ôm lấy em\nCầm tay anh dựa vai anh\nKề bên anh nơi này có anh\nKhép đôi mi thật lâu\nNguyện mãi bên cạnh nhau\nYêu say đắm như ngày đầu\nMùa xuân đến bình yên\nCho anh những giấc mơ\nHạ lưu giữ ngày mưa\nNgọt ngào nên thơ\nMùa thu lá vàng rơi\nĐông sang anh nhớ em\nTình yêu bé nhỏ xin\nDành tặng riêng em\nNhớ thương em\nNhớ thương em lắm\nPhía sau chân trời\nCó ai băng qua lối về\nCùng em đi trên đoạn đường dài\nCầm tay anh dựa vai anh\nKề bên anh nơi này có anh\nGió mang câu tình ca\nNgàn ánh sao vụt qua\nNhẹ ôm lấy em\nCầm tay anh dựa vai anh\nKề bên anh nơi này có anh\nKhép đôi mi thật lâu\nNguyện mãi bên cạnh nhau\nYêu say đắm như ngày đầu\nMùa xuân đến bình yên\nCho anh những giấc mơ\nHạ lưu giữ ngày mưa\nNgọt ngào nên thơ\nMùa thu lá vàng rơi\nĐông sang anh nhớ em\nTình yêu bé nhỏ xin\nDành tặng riêng em"
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
        src: "../mp3/gatdinuocmat.mp3",
        lyrics: "Anh ngóng trông mãi\nMôi hôn vụng dại\nAnh khát khao mãi\nđôi tay ngày nào\nLà dĩ vãng\nQuá khứ mà thôi\nNay anh phải quên\nYêu dấu nay đã\nTrôi xa thật rồi\nTheo gió mây đến\nNơi phương trời nào\nChỉ còn anh và em với bao\nYêu thương nhạt nhoà\nNay giấc mơ ấy\nChia đôi ngả đường\nNay tiếng yêu ấy\nCất riêng mình ta\nLà dĩ vãng quá khứ mà thôi\nNay anh phải quên\nVì ai đã bước\nđi mãi không về\nVì ai lỡ quên\nBao câu ước thề\nNíu kéo chi người\nMuốn ra đi chẳng tiếc thương\nNgày trôi qua sẽ\nVùi lấp hy vọng\nChẳng còn dấu yêu\nCho anh mơ mộng\nXoá hết nỗi buồn\nGạt đi giọt nước mắt\nBaby Baby, I wanna go oh oh\nBaby Baby, I don't need to know oh oh\nNo trust, to cry\nNo love against\nBaby Baby, I wanna go oh oh\nBaby Baby, I don't need to know oh oh\nNo trust, to cry\nNo love against\nAnh sẽ làm quen với những niềm đau\nDần quên môi hôn sâu đành gạt nước mắt đi\nDẫu không biết bao nhiêu lâu\nđể mãi chôn sâu\nÁnh mắt đã nhạt khi\nEm vội đi rồi sớm mai\nChẳng có anh đây\nUh ho ah ha ah\nTrả lại em bao nhiêu yêu thương bấy lâu\nKhi chẳng còn nhau nơi đây ta phân ly\nLý do buông tay vì đâu you wanna go\nCó lẽ em hay biết nhưng anh siết\nTừng nỗi đau hằn sâu\nLẽ nào yêu thương là\nChỉ đợi chờ một ngày về hai lối\nLẽ nào cũng chỉ là đoạn đường gian dối\nXé ngang kỷ niệm tìm lại nơi đâu\nLẽ nào cũng chỉ là lời hẹn ước\nKhuất xa theo đợi chờ\nĐành vậy thôi gạt đi nước mắt còn vương\nVì ai đã bước\nđi mãi không về\nVì ai lỡ quên\nBao câu ước thề\nNíu kéo chi người\nMuốn ra đi chẳng tiếc thương\nNgày trôi qua sẽ\nVùi lấp hy vọng\nChẳng còn dấu yêu\nCho anh mơ mộng\nXoá hết nỗi buồn\nGạt đi giọt nước mắt\nVì ai đã bước\nđi mãi không về\nVì ai lỡ quên\nBao câu ước thề\nNíu kéo chi người\nMuốn ra đi chẳng tiếc thương\nNgày trôi qua sẽ\nVùi lấp hy vọng\nChẳng còn dấu yêu\nCho anh mơ mộng\nXoá hết nỗi buồn\nGạt đi giọt nước mắt"
    },
    {
        id: "r5",
        title: "Khó Vẽ Nụ Cười",
        artist: "ĐạtG, DuUyên",
        img: "../img/KhoVeNuCuoi.jpeg",
        src: "../mp3/khovenucuoi.mp3",
        lyrics: "Anh sẽ chờ em\nDù biển xanh kia có cạn khô\nDù qua thêm bao kiếp\nAnh vẫn sẽ chờ\nNhân thế khổ đau\nTìm hoài sao không thấy nhau\nNgười thương chẳng thương mình\nCòn người không thương\nCứ theo ta cả một đời\nCây đã già nua\nChờ ngày chết cách xa cõi đời\nChiều hoàng hôn buông xuống\nPhía Tây nghẹn ngào\nUống chén tình say\nHọa người thương trong bức tranh\nHọa ánh mắt anh buồn\nHọa nụ cười thêm trên nét môi\nNhưng sao không được\nNhiều lần em muốn anh vui mà thôi\nHoạ vào nét môi anh nở cười tươi\nDòng lệ rớt rơi phai màu\nNhoè đi nụ cười khi ấy\nLòng thì đau đớn trong em khổ đau\nMà chẳng dám khóc đâu ai hiểu thấu\nVẫn họa thêm chiếc môi cười tiếp theo\nNhưng đau thấu trời\nCây đã già nua\nChờ ngày chết cách xa cõi đời\nChiều hoàng hôn buông xuống\nPhía Tây nghẹn ngào\nLỡ chén tình say\nHọa người thương trong bức tranh\nHọa ánh mắt anh buồn\nTìm nụ cười anh trên nét môi\nNhưng sao chẳng thấy\nNhiều lần em muốn anh vui mà thôi\nHọa vào nét môi anh nở cười tươi\nDòng lệ rớt rơi phai màu\nNhoè đi nụ cười khi ấy\nLòng thì đau đớn trong em khổ đau\nMà chẳng dám khóc đâu ai hiểu thấu\nVẫn họa thêm chiếc môi cười tiếp theo\nNhưng đau thấu trời\nKhóc thật nhiều\nNgồi khóc thật nhiều\nKhóc cho đời phong ba\nLắm đau mà chẳng nói ra\nĐến khi già\nBuồn hết một đời\nĐớn đau này của anh\nSẽ cao hơn trời\nNhiều lần em muốn anh vui mà thôi\nHọa vào nét môi em nở cười tươi\nDòng lệ rớt rơi phai màu\nNhoè đi nụ cười khi ấy\nLòng thì đau đớn trong em khổ đau\nMà chẳng dám khóc đâu ai hiểu thấu\nVẫn họa thêm chiếc môi cười tiếp theo\nNhưng đau ai thấu\nVẫn họa thêm chiếc môi cười lần nữa\nNhưng đau ai thấu?"
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