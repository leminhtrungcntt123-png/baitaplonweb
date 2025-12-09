/* index.js */
const { useState, useEffect } = React;

// --- ICONS ---
const IconWrapper = ({ children, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {children}
    </svg>
);

const Menu = (props) => <IconWrapper {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></IconWrapper>;
const X = (props) => <IconWrapper {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></IconWrapper>;
const Rocket = (props) => <IconWrapper {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-5.2L15 2a2 2 0 0 1 2 2 4.06 4.06 0 0 1-3.8 4.2 22 22 0 0 1-5.2 2z"/></IconWrapper>;
const Zap = (props) => <IconWrapper {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></IconWrapper>;
const Shield = (props) => <IconWrapper {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></IconWrapper>;
const ChevronRight = (props) => <IconWrapper {...props}><path d="m9 18 6-6-6-6"/></IconWrapper>;
const Check = (props) => <IconWrapper {...props}><path d="M20 6 9 17l-5-5"/></IconWrapper>;
const Star = (props) => <IconWrapper {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></IconWrapper>;
const Globe = (props) => <IconWrapper {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></IconWrapper>;
const Server = (props) => <IconWrapper {...props}><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></IconWrapper>;
const Users = (props) => <IconWrapper {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></IconWrapper>;

// --- DATA ---
const NAV_LINKS = [
    { name: 'Tính năng', href: '#features' },
    { name: 'Đánh giá', href: '#solutions' },
    { name: 'Bảng giá', href: '#pricing' },
    { name: 'Về chúng tôi', href: '#about' },
];

const FEATURES = [
    { icon: <Rocket className="w-8 h-8 text-cyan-400" />, title: "Hiệu Suất Vượt Trội", desc: "Tối ưu hóa tốc độ tải trang và xử lý dữ liệu với công nghệ core mới nhất." },
    { icon: <Shield className="w-8 h-8 text-violet-400" />, title: "Bảo Mật Cấp Cao", desc: "Mã hóa đầu cuối, bảo vệ dữ liệu của bạn 24/7." },
    { icon: <Zap className="w-8 h-8 text-amber-400" />, title: "Đa nhiệm", desc: "Tạo ra không gian mới nơi âm nhạc đồng hành cùng bạn." }
];

const STATS = [
    { icon: <Users className="w-5 h-5 text-cyan-400" />, value: "3+", label: "Người dùng " },
    { icon: <Server className="w-5 h-5 text-violet-400" />, value: "99.99%", label: "Độ tin cậy" },
    { icon: <Globe className="w-5 h-5 text-pink-400" />, value: "1+", label: "Quốc gia hỗ trợ" },
];

const TESTIMONIALS = [
    { name: "Nguyễn Văn A", role: "User", content: "Giao diện quá đẹp và trực quan. Tôi cảm thấy rất hài lòng sau khi sử dụng.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" },
    { name: "Trần Thị B", role: "User", content: "Giải pháp công nghệ tuyệt vời nhất mà tôi từng trải nghiệm trong 5 năm qua.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" },
    { name: "Le Hoang C", role: "User", content: "Ôi chúa ơi không thể tin được trang web hay như này.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" }
];

const PRICING_PLANS = [
    { name: "Cơ bản", price: "$5", features: ["Không quảng cáo", "1GB Lưu trữ","Tải xuống chất lượng cao"], recommended: false },
    { name: "Premium", price: "$9", features: ["Không quảng cáo", "Hỗ trợ Email", "2GB Lưu trữ","Tải nhạc chất lượng cao","Phòng karaoke 3 người"], recommended: false },
    { name: "Premium VIP", price: "$29", features: ["Không quảng cáo", "Hỗ trợ 24/7","50GB Lưu trữ", "Phân tích nâng cao","Hát không giới hạn"], recommended: true }
];

// --- COMPONENTS ---
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 border border-transparent",
        outline: "bg-transparent border border-slate-600 text-slate-300 hover:border-white hover:text-white hover:bg-white/5",
        ghost: "bg-transparent text-slate-400 hover:text-white"
    };
    return <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const btnClass = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 border border-transparent !py-2 !px-5 text-sm";

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer flex items-center gap-2">
                    <Zap className="w-6 h-6 text-cyan-400" /> MUSIC
                </div>
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a key={link.name} href={link.href} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">{link.name}</a>
                    ))}
                </div>
                <div className="hidden md:block">
                    <a href="login.html" className={btnClass}>Đăng ký ngay</a>
                </div>
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
            </div>
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
                    {NAV_LINKS.map((link) => (
                        <a key={link.name} href={link.href} className="text-slate-300 hover:text-white py-2 block" onClick={() => setIsOpen(false)}>{link.name}</a>
                    ))}
                    <a href="login.html" className={btnClass + " w-full"}>Đăng ký ngay</a>
                </div>
            )}
        </nav>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] -z-10"></div>
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium">
                        <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span></span>
                        Phiên bản 2.0 đã ra mắt
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">Âm Nhạc Là <br /><span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Sự Khác Biệt</span></h1>
                    <p className="text-slate-400 text-lg lg:text-xl max-w-lg leading-relaxed">Khám phá giai điệu của bạn với công nghệ tiên tiến nhất hiện nay.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="login.html"><Button variant="primary">Bắt đầu miễn phí <ChevronRight className="w-4 h-4" /></Button></a>
                        <Button variant="outline">Xem Demo</Button>
                    </div>
                    <div className="pt-8 flex items-center gap-6 text-slate-500 text-sm">
                        <span>Được tin dùng bởi:</span>
                        <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                            <div className="font-bold text-xl">Jack36</div>
                            <div className="font-bold text-xl">Sơn Tùng M-TP</div>
                            <div className="font-bold text-xl">Neymor</div>
                        </div>
                    </div>
                </div>
                <div className="relative animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">
                    <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-32 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-lg w-full animate-pulse"></div>
                            <div className="grid grid-cols-3 gap-4"><div className="h-20 bg-white/5 rounded-lg"></div><div className="h-20 bg-white/5 rounded-lg"></div><div className="h-20 bg-white/5 rounded-lg"></div></div>
                            <div className="h-8 bg-white/5 rounded w-3/4"></div><div className="h-8 bg-white/5 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Features = () => {
    return (
        <section id="features" className="py-24 relative bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Tính Năng <span className="text-violet-400">Đột Phá</span></h2>
                    <p className="text-slate-400">Mọi thứ bạn cần để xây dựng nên thế giới âm nhạc của riêng bạn.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <div key={idx} className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-500/20 transition-all"></div>
                            <div className="mb-6 p-3 bg-slate-950 rounded-xl w-fit border border-white/10 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Stats = () => (
    <section className="py-12 border-y border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-around gap-8 text-center md:text-left">
            {STATS.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-white/5 border border-white/10">{stat.icon}</div>
                    <div><div className="text-2xl font-bold text-white">{stat.value}</div><div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div></div>
                </div>
            ))}
        </div>
    </section>
);

const Pricing = () => (
    <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16"><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Bảng Giá Linh Hoạt</h2></div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {PRICING_PLANS.map((plan, idx) => (
                    <div key={idx} className={`relative p-8 rounded-2xl border ${plan.recommended ? 'border-violet-500 bg-violet-900/10' : 'border-white/10 bg-white/5'} flex flex-col hover:-translate-y-2 transition-transform duration-300`}>
                        {plan.recommended && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-lg">Phổ biến nhất</div>}
                        <h3 className="text-lg font-medium text-slate-300 mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-white mb-6">{plan.price}<span className="text-lg text-slate-500 font-normal">/tháng</span></div>
                        <ul className="space-y-4 mb-8 flex-1">{plan.features.map((feature, fIdx) => (<li key={fIdx} className="flex items-center gap-3 text-slate-400 text-sm"><Check className={`w-5 h-5 ${plan.recommended ? 'text-cyan-400' : 'text-slate-500'}`} />{feature}</li>))}</ul>
                        <Button variant={plan.recommended ? 'primary' : 'outline'} className="w-full justify-center">Chọn gói này</Button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// --- COMPONENT NÀY CÓ ID "solutions" ĐỂ LINK VỚI MENU ---
const Testimonials = () => (
    <section id="solutions" className="py-24 bg-gradient-to-b from-transparent to-violet-900/10">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-16">Khách Hàng Nói Gì?</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((item, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-white/5 p-8 rounded-2xl relative">
                        <div className="flex text-amber-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                        <p className="text-slate-300 mb-6 italic">"{item.content}"</p>
                        <div className="flex items-center gap-4">
                            <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full bg-slate-700" />
                            <div><div className="text-white font-bold text-sm">{item.name}</div><div className="text-slate-500 text-xs">{item.role}</div></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// --- FOOTER CHUẨN (STYLE SPOTIFY - TAILWIND) ---
const Footer = () => {
    return (
        <footer id="about" className="bg-black pt-20 pb-10 border-t border-white/10 mt-24 font-sans text-left">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
                    <div className="flex flex-wrap gap-12 lg:gap-24">
                        <div>
                            <h4 className="text-white text-xs font-black tracking-widest uppercase mb-6">Công ty</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors no-underline">Giới thiệu</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors no-underline">Việc làm</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors no-underline">For the Record</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-xs font-black tracking-widest uppercase mb-6">Cộng đồng</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors no-underline">Dành cho Nghệ sĩ</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors no-underline">Nhà phát triển</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors no-underline">Quảng cáo</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-xs font-black tracking-widest uppercase mb-6">Liên kết</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors no-underline">Hỗ trợ</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors no-underline">Gói Premium</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-600 transition-colors text-xl"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-600 transition-colors text-xl"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-600 transition-colors text-xl"><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <div className="flex gap-6 flex-wrap justify-center">
                        <a href="#" className="hover:text-white transition-colors">Pháp lý</a>
                        <a href="#" className="hover:text-white transition-colors">Trung tâm Bảo mật</a>
                        <a href="#" className="hover:text-white transition-colors">Chính sách Quyền riêng tư</a>
                    </div>
                    <div>© 2025 MusicNPC</div>
                </div>
            </div>
        </footer>
    );
};

const App = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <Features />
                <Testimonials />
                <Pricing />
            </main>
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);