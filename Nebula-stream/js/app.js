// js/app.js

const { useState, useEffect, useRef } = React;
const Icons = window.lucideReact || {};
const { Play, Info, Plus, Search, Bell, X, Maximize, Volume2, Star, TrendingUp, ChevronRight, Menu, LogOut } = Icons;

// --- COMPONENTS ---

const Navigation = ({ isScrolled }) => {
    // State để lưu tên người dùng
    const [username, setUsername] = useState(null);

    // Hiệu ứng phụ: Tự động kiểm tra xem có ai đăng nhập chưa khi load trang
    useEffect(() => {
        // Lấy tên từ "bộ nhớ tạm" (cái mà file login.js đã lưu vào)
        const storedUser = localStorage.getItem("nebula_user");
        if (storedUser) {
            setUsername(storedUser);
        }
    }, []);

    // Hàm đăng xuất (Xóa tên khỏi bộ nhớ và tải lại trang)
    const handleLogout = () => {
        if (confirm("Bạn muốn đăng xuất?")) {
            localStorage.removeItem("nebula_user");
            localStorage.removeItem("nebula_is_logged_in");
            window.location.reload();
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0f1020]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                
                {/* LOGO */}
                <div className="flex items-center gap-8">
                    <h1 className="text-2xl font-black tracking-tighter cursor-pointer select-none group">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:bg-gradient-to-l transition-all duration-500">NEBULA</span>
                        <span className="text-white">STREAM</span>
                    </h1>
                    
                    {/* MENU DESKTOP */}
                    <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
                        <a href="#" className="hover:text-cyan-400 transition-colors">Trang chủ</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Phim bộ</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Phim lẻ</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Mới & Phổ biến</a>
                    </div>
                </div>

                {/* RIGHT SIDE (Search + User) */}
                <div className="flex items-center gap-5 text-gray-300">
                    {/* Search Bar */}
                    <div className="hidden md:flex items-center bg-white/5 rounded-full px-3 py-1.5 backdrop-blur-sm border border-white/5 focus-within:border-cyan-500/50 transition-all group hover:bg-white/10">
                        {Search && <Search size={18} className="group-focus-within:text-cyan-400 transition-colors" />}
                        <input 
                            type="text" 
                            placeholder="Tìm kiếm..." 
                            className="bg-transparent border-none outline-none text-sm ml-2 w-24 group-focus-within:w-48 transition-all duration-300 text-white placeholder-gray-500"
                        />
                    </div>

                    {Bell && <Bell size={20} className="cursor-pointer hover:text-white hover:scale-110 transition-transform" />}
                    
                    {/* USER PROFILE SECTION (Thay đổi dựa trên trạng thái đăng nhập) */}
                    {username ? (
                        // TRƯỜNG HỢP 1: ĐÃ ĐĂNG NHẬP
                        <div className="flex items-center gap-3 group relative cursor-pointer" onClick={handleLogout} title="Bấm để đăng xuất">
                            <div className="text-right hidden sm:block">
                                <p className="text-xs text-gray-400">Xin chào,</p>
                                <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 truncate max-w-[100px]">
                                    {username}
                                </p>
                            </div>
                            <div className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 to-purple-600 shadow-lg shadow-purple-500/20 group-hover:shadow-cyan-400/40 transition-all">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`} alt="User" className="rounded-full bg-black h-full w-full object-cover" />
                            </div>
                        </div>
                    ) : (
                        // TRƯỜNG HỢP 2: CHƯA ĐĂNG NHẬP (Hiện nút Avatar cũ)
                        <div 
                            onClick={() => window.location.href = 'login.html'}
                            className="w-9 h-9 rounded-full bg-white/10 p-[2px] cursor-pointer hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center group"
                            title="Đăng nhập"
                        >
                            {Icons.User ? <Icons.User size={18} className="text-gray-400 group-hover:text-white" /> : <div className="w-full h-full bg-gray-500 rounded-full"></div>}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

const Hero = ({ onPlay }) => {
    return (
        <div className="relative w-full h-[85vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
            {/* Sử dụng biến HERO_MOVIE từ file data.js */}
            <img 
            src={HERO_MOVIE.image} 
            alt="Hero Background" 
            className="w-full h-full object-cover animate-pan-slow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c15] via-[#0b0c15]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c15] via-[#0b0c15]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex items-center px-4 md:px-12 max-w-7xl mx-auto pt-20">
            <div className="max-w-2xl space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-3 text-cyan-400 font-semibold text-xs tracking-widest uppercase">
                <span className="bg-cyan-500/20 px-2 py-1 rounded backdrop-blur-md border border-cyan-500/30">N E W</span>
                <span>{HERO_MOVIE.tags.join(" • ")}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                {HERO_MOVIE.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-300 font-medium">
                <span className="text-green-400 font-bold">{HERO_MOVIE.match}</span>
                <span>{HERO_MOVIE.year}</span>
                <span className="border border-gray-500 px-2 rounded text-xs py-0.5">{HERO_MOVIE.age}</span>
                <span className="flex items-center gap-1">{Star && <Star size={14} className="fill-yellow-400 text-yellow-400"/>} 9.0</span>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed line-clamp-3 md:line-clamp-none max-w-xl text-shadow-sm">
                {HERO_MOVIE.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                onClick={onPlay}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                >
                {Play && <Play className="fill-black group-hover:fill-purple-600 group-hover:text-purple-600 transition-colors" size={20} />}
                <span>Xem Ngay</span>
                </button>
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white font-bold rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                {Info && <Info size={20} />}
                <span>Thông Tin</span>
                </button>
            </div>
            </div>
        </div>
        </div>
    );
};

const MovieCard = ({ movie, onPlay }) => (
    <div 
        onClick={onPlay}
        className="relative group min-w-[200px] md:min-w-[280px] aspect-[16/9] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:z-20 hover:scale-110 shadow-lg hover:shadow-cyan-500/20"
    >
        <img 
        src={movie.image} 
        alt={movie.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:brightness-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="text-white font-bold text-lg mb-1">{movie.title}</h4>
            <div className="flex items-center justify-between text-xs text-gray-300">
            <span className="text-green-400 font-bold">{movie.match}</span>
            <span>{movie.duration}</span>
            <div className="flex gap-2">
                <div className="p-1.5 bg-white rounded-full text-black hover:bg-cyan-400 transition-colors">
                {Play && <Play size={10} className="fill-current" />}
                </div>
                <div className="p-1.5 border border-gray-400 rounded-full text-white hover:border-white transition-colors">
                {Plus && <Plus size={10} />}
                </div>
            </div>
            </div>
            <div className="mt-2 flex gap-2">
            <span className="text-[10px] text-gray-400">Hành động</span>
            <span className="text-white mx-1">•</span>
            <span className="text-[10px] text-gray-400">Viễn tưởng</span>
            </div>
        </div>
        </div>
    </div>
);

const MovieRow = ({ title, movies, onPlay }) => {
    const rowRef = useRef(null);

    const scroll = (direction) => {
        if (rowRef.current) {
        const { current } = rowRef;
        const scrollAmount = direction === 'left' ? -window.innerWidth / 2 : window.innerWidth / 2;
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="py-8 space-y-4 group">
        <div className="px-4 md:px-12 flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-bold text-white/90 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
            {title} {ChevronRight && <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"/>}
            </h3>
        </div>
        
        <div className="relative group/row">
            <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 w-12 bg-black/50 backdrop-blur-sm z-30 opacity-0 group-hover/row:opacity-100 transition-opacity hidden md:flex items-center justify-center hover:bg-black/70 text-white"
            >
            {ChevronRight && <ChevronRight className="rotate-180" size={32} />}
            </button>
            
            <div 
            ref={rowRef}
            className="flex gap-4 overflow-x-auto px-4 md:px-12 pb-8 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onPlay={onPlay} />
            ))}
            </div>

            <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 w-12 bg-black/50 backdrop-blur-sm z-30 opacity-0 group-hover/row:opacity-100 transition-opacity hidden md:flex items-center justify-center hover:bg-black/70 text-white"
            >
            {ChevronRight && <ChevronRight size={32} />}
            </button>
        </div>
        </div>
    );
};

const VideoPlayer = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-[100] bg-black animate-fade-in flex flex-col">
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex flex-col">
            <h2 className="text-white text-2xl font-bold">{HERO_MOVIE.title}</h2>
            <span className="text-gray-300 text-sm">Đang phát: Tập 1</span>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 transition-all hover:bg-red-500/20 hover:border-red-500/50">
            {X ? <X size={28} /> : <span>X</span>}
            </button>
        </div>

        <div className="flex-1 flex items-center justify-center bg-[#050505] relative group">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <img src={HERO_MOVIE.image} className="w-full h-full object-cover blur-md" alt="bg"/>
            </div>
            
            <div className="z-10 text-center">
            <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-cyan-400 tracking-widest text-sm uppercase animate-pulse">Loading Stream...</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full h-1.5 bg-gray-700 rounded-full mb-4 cursor-pointer relative overflow-hidden group/bar">
                <div className="absolute top-0 left-0 h-full w-[30%] bg-gradient-to-r from-purple-500 to-cyan-400"></div>
                <div className="absolute top-0 left-[30%] h-full w-4 bg-white rounded-full shadow-lg scale-0 group-hover/bar:scale-110 transition-transform"></div>
            </div>
            
            <div className="flex justify-between items-center text-white">
                <div className="flex items-center gap-6">
                {Play && <Play size={24} className="fill-white cursor-pointer hover:text-cyan-400 hover:fill-cyan-400 transition-colors" />}
                <div className="flex items-center gap-2 group/vol">
                    {Volume2 && <Volume2 size={24} className="cursor-pointer" />}
                    <div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-300">
                        <div className="h-1 bg-white w-full rounded-full"></div>
                    </div>
                </div>
                <span className="text-sm font-medium">12:45 / 1:45:00</span>
                </div>
                <div className="flex items-center gap-6">
                    <span className="font-bold text-sm bg-gray-800 px-2 py-1 rounded">4K Ultra HD</span>
                    {Maximize && <Maximize size={24} className="cursor-pointer hover:scale-110" />}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

const Footer = () => (
    <footer className="bg-[#050505] text-gray-400 py-16 px-4 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
            <h1 className="text-2xl font-black tracking-tighter text-white mb-6">
            NEBULA<span className="text-cyan-400">.</span>
            </h1>
            <div className="flex gap-4">
            <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all cursor-pointer">{TrendingUp && <TrendingUp size={18}/>}</div>
            <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-purple-500/20 hover:text-purple-400 transition-all cursor-pointer">{Star && <Star size={18}/>}</div>
            </div>
        </div>
        
        {[1, 2, 3].map((col) => (
            <div key={col} className="space-y-4">
            <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-2">Liên Kết</h4>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">Trung tâm hỗ trợ</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">Điều khoản sử dụng</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">Quyền riêng tư</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">Liên hệ</li>
            </ul>
            </div>
        ))}
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
        © 2024 Nebula Stream Inc. Designed by Gemini AI.
        </div>
    </footer>
);

// --- MAIN APP ---
const App = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handlePlay = () => {
        setIsPlayerOpen(true);
    };

    return (
        <div className="min-h-screen bg-[#0b0c15] text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
        <Navigation isScrolled={isScrolled} />
        
        <main>
            <Hero onPlay={handlePlay} />
            
            <div className="relative z-20 -mt-32 pb-20 bg-gradient-to-b from-transparent via-[#0b0c15] to-[#0b0c15]">
            {CATEGORIES.map((cat, index) => (
                <MovieRow 
                key={cat.id} 
                title={cat.title} 
                movies={[...MOVIES_DATA].sort(() => 0.5 - Math.random())} 
                onPlay={handlePlay}
                />
            ))}
            </div>
        </main>

        <Footer />

        {isPlayerOpen && <VideoPlayer onClose={() => setIsPlayerOpen(false)} />}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);