// js/data.js

// Dữ liệu phim nổi bật (Hero Banner)
const HERO_MOVIE = {
    id: 0,
    title: "CYBER ODYSSEY",
    description: "Trong một tương lai nơi ký ức có thể mua bán, một hacker buộc phải đánh cắp quá khứ của chính mình để cứu lấy nhân loại khỏi sự lãng quên vĩnh cửu.",
    // Hiện tại vẫn dùng link online. 
    // Nếu bạn muốn dùng ảnh trong máy, sửa thành: "./images/ten-anh.jpg"
    image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&w=1600&q=80",
    match: "98% Match",
    year: "2024",
    age: "16+",
    tags: ["Sci-Fi", "Action", "Cyberpunk"]
};

// Danh sách các danh mục phim
const CATEGORIES = [
    { id: 'trending', title: "Thịnh Hành Trên Nebula" },
    { id: 'new', title: "Mới Phát Hành" },
    { id: 'scifi', title: "Vũ Trụ & Khoa Học Viễn Tưởng" },
    { id: 'anime', title: "Anime Tuyển Chọn" },
];

// Danh sách phim lẻ
const MOVIES_DATA = [
    { id: 1, title: "Neon Nights", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800&q=80", match: "95%", duration: "1h 45m" },
    { id: 2, title: "The Void Walker", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80", match: "87%", duration: "2h 10m" },
    { id: 3, title: "Lost in Tokyo", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80", match: "92%", duration: "1h 30m" },
    { id: 4, title: "Mars Mission", image: "https://images.unsplash.com/photo-1614728853913-1e2203d9d73e?auto=format&fit=crop&w=800&q=80", match: "88%", duration: "2h 05m" },
    { id: 5, title: "Blue Protocol", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", match: "99%", duration: "2h 30m" },
    { id: 6, title: "Desert Storm", image: "https://images.unsplash.com/photo-1547234935-80c7142ee969?auto=format&fit=crop&w=800&q=80", match: "75%", duration: "1h 55m" },
    { id: 7, title: "Urban Legend", image: "https://images.unsplash.com/photo-1517604931442-71053e3e2e3c?auto=format&fit=crop&w=800&q=80", match: "82%", duration: "1h 40m" },
    { id: 8, title: "Deep Sea", image: "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?auto=format&fit=crop&w=800&q=80", match: "91%", duration: "1h 50m" },
];