/* FILE DỮ LIỆU CỦA KHO LƯU TRỮ
   Hướng dẫn:
   - Copy file này lưu tên là: database.js
   - Để thêm truyện mới, hãy thêm vào khu vực MY_NOVELS.
   - Để thêm nhật ký mới, hãy thêm vào khu vực MY_DIARY.
*/

const SITE_CONFIG = {
    adminName: "Kirya Yuki",
    siteName: "Kho lưu trữ",
    since: "2026",
    welcomeText: "Chào mừng bạn đến với Kho lưu trữ của Kirya Yuki. Chúc bạn có những giây phút đọc truyện vui vẻ!",
    introTitle: "About Me",
    introContent: `
        <p><strong>Admin:</strong> Kirya Yuki</p>
        <p>Đây là trang web cá nhân phi lợi nhuận.</p>
        <p>Nơi lưu trữ các Fanfic và Blog cá nhân.</p>
        <p>Liên hệ: kirya@example.com</p>
    `
};

const MY_DIARY = [
    { 
        date: "2026/02/02", 
        content: "Đã dọn dẹp lại giao diện trang web. Bây giờ mọi thứ gọn gàng hơn nhiều." 
    },
    { 
        date: "2026/01/30", 
        content: "Trời hôm nay mưa to, ngồi viết code cảm giác thật chill." 
    }
];

const MY_NOVELS = [
    {
        id: 1,
        title: "Summer Pockets - Ký ức",
        desc: "Fanfic về đảo Torishirojima.",
        chapters: [
            { 
                title: "Chương 1: Mở đầu", 
                content: `Đây là nội dung chương 1.
                
                Bạn có thể xuống dòng thoải mái trong dấu huyền.` 
            },
            { 
                title: "Chương 2: Gặp gỡ", 
                content: `Nội dung chương 2...` 
            }
        ]
    },
    {
        id: 2,
        title: "Tuyển tập Oneshot",
        desc: "Những câu chuyện ngắn.",
        chapters: [
            { 
                title: "Câu chuyện nhỏ", 
                content: `Ngày xửa ngày xưa...` 
            }
        ]
    }
];