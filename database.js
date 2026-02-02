/* FILE CHỨA NỘI DUNG TRANG WEB
   - Bạn hãy thay thế nội dung tiếng Nhật trong dấu ngoặc kép "" bằng tiếng Việt.
   - Giữ nguyên các thẻ html như <br>, <hr>, <a>.
*/

const DB = {
    // --- NỘI DUNG CỘT BÊN TRÁI (MENU) ---
    menuContent: `
        <div style="text-align: center; margin-bottom: 20px;">
            <h3>SYL</h3>
        </div>
        
        <ul class="menu-list">
            <li><a href="#">Top</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Diary</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">BBS</a></li>
            <li><a href="#">Clap</a></li>
        </ul>
        <br>
        <div style="font-size: 12px; text-align: center;">
            Since 200x.<br>
            Master: Syl
        </div>
    `,

    // --- NỘI DUNG CỘT BÊN PHẢI (CHÍNH) ---
    mainContent: `
        <h2>Main Content Area</h2>
        
        <hr class="dashed-line">

        <h3>Information</h3>
        <ul class="content-list">
            <li>2026/02/02: Cập nhật trang web.</li>
            <li>202X/XX/XX: Nội dung mẫu...</li>
        </ul>

        <hr class="dashed-line">

        <h3>Về trang web này</h3>
        <p>
            Đây là khu vực nội dung chính. Giao diện đã được phục dựng lại để giống hệt trang gốc syl.sakura.ne.jp.<br>
            Font chữ đã được thay đổi sang loại có chân (Serif) để hỗ trợ tốt tiếng Việt và giữ lại nét cổ điển.
        </p>
        <p>
            Trang gốc sử dụng công nghệ "Frameset" cũ. Phiên bản này sử dụng CSS Flexbox để giả lập lại giao diện đó, cho phép hai cột trái và phải có thanh cuộn độc lập.
        </p>

        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <p>(Dòng trống để test thanh cuộn...)</p>
    `
};
