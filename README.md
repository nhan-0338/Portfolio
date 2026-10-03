# Modern Personal Portfolio Website

Trang web Personal Portfolio hiện đại, cao cấp dành cho Software Engineer / Developer, lấy cảm hứng thiết kế từ **porfolio.id.vn** và profile **github.com/thangak18**.

---

## 🌟 Tính Năng Nổi Bật

1. **Giao diện Modern Cyberpunk / Minimal Tech**:
   - Typography cao cấp: `Space Grotesk` (Headings) & `IBM Plex Mono` (Code/Meta/Tags).
   - Hiệu ứng **[data-glow-card]**: Viền sáng thông minh di chuyển theo tiêu điểm chuột (Dynamic Mouse Spotlight Tracker).
   - Khung ảnh đại diện với vòng quỹ đạo xoay (`portrait-orbit`) và cửa sổ giả lập code `profile.json` kèm trạng thái `🟢 online`.

2. **Chế độ Dark / Light Mode**:
   - Nút chuyển đổi nhanh theme mượt mà, lưu trạng thái vào `localStorage`.

3. **Thanh tiến trình Scroll & ScrollSpy Navigation**:
   - Header dạng Glassmorphism mờ hậu cảnh với thanh đo tiến độ đọc ở đỉnh màn hình (`scroll-progress`).
   - Tự động nhận diện và làm nổi bật mục đang xem trên thanh điều hướng.

4. **Interactive CLI Terminal Simulator (`Ctrl + K` hoặc phím `` ` ``)**:
   - Cửa sổ dòng lệnh tương tác trực tiếp với các lệnh: `help`, `bio`, `skills`, `projects`, `exp`, `certs`, `socials`, `contact`, `theme`, `matrix`, `sudo hire-me`, `clear`.

5. **Zen Space / Immersive Focus Room (`immersive.html`)**:
   - Không gian tập trung sâu với đồng hồ **Pomodoro Focus Timer** (25m / 5m / 15m).
   - Bộ phát âm thanh nền thư giãn (**Rain**, **Cyber Waves**, **Lo-Fi Chords**) tạo trực tiếp bằng **Web Audio API** (không cần tải file mp3 bên ngoài, hoạt động 100% offline).
   - Canvas đồ họa các chòm sao hạt phát sáng tương tác với chuột.

6. **Lộ trình học tập (Journey Roadmap)** & **Kinh nghiệm làm việc (Experience Tabs)**:
   - Các cột mốc học tập tại HCMUS, kỳ thực tập tại Netcompany.

7. **Bộ lọc Dự án (Project Filtering)** & **Popup xem Chứng chỉ (Credentials Modal)**:
   - Lọc dự án theo danh mục (All, Backend & Cloud, Full-Stack, Security).
   - Hộp thoại Modal xem chi tiết chứng chỉ và xác thực online.

---

## 📁 Cấu Trúc Thư Mục

```
Build/
├── index.html                 # Trang chủ Portfolio chính
├── immersive.html             # Trang Zen Space tập trung làm việc
├── css/
│   └── style.css              # Toàn bộ CSS phong cách, hiệu ứng phát sáng, responsive
├── js/
│   ├── config.js              # ⭐ FILE CẤU HÌNH DỮ LIỆU CÁ NHÂN (chỉnh sửa tại đây)
│   ├── main.js                # Xử lý render động, sự kiện UI, modal, theme, scrollspy
│   ├── terminal.js            # Trình giả lập terminal tương tác dòng lệnh
│   └── zen.js                 # Xử lý canvas hạt, âm thanh Web Audio, đồng hồ Pomodoro
├── assets/
│   ├── images/                # Chứa ảnh đại diện, ảnh dự án, ảnh chứng chỉ (SVG/JPG/PNG)
│   │   ├── personal.jpg       # Ảnh chân dung của bạn
│   │   ├── threatlens.jpg     # Ảnh mockup dự án ThreatLens
│   │   ├── eduvault.jpg       # Ảnh mockup dự án EduVault
│   │   ├── auction.jpg        # Ảnh mockup dự án Online Auction
│   │   └── cert-*.jpg         # Ảnh các chứng chỉ
│   └── icons/                 # Logo công ty, trường học
└── README.md                  # Tài liệu hướng dẫn
```

---

## 🛠️ Hướng Dẫn Tùy Chỉnh Thông Tin Cá Nhân

Bạn chỉ cần mở file `js/config.js` để chỉnh sửa toàn bộ dữ liệu. Giao diện sẽ tự động cập nhật ngay lập tức:

### 1. Thay đổi thông tin cá nhân & mạng xã hội:
```javascript
// js/config.js
const PORTFOLIO_DATA = {
  personal: {
    fullName: "Nguyen Tan Thang",
    shortName: "Thang",
    title: "Software Engineer",
    tagline: "Software Engineering · HCMUS",
    description: "I build reliable backend systems and modern digital products...",
    location: "Ho Chi Minh City, Vietnam",
    university: "HCMUS",
    graduationYear: "Expected 2027",
    // ...
  },
  socials: {
    github: "https://github.com/thangak18",
    linkedin: "https://www.linkedin.com/in/...",
    email: "thangak18@gmail.com",
    // ...
  }
}
```

### 2. Thêm hoặc sửa dự án trong `projects`:
```javascript
projects: [
  {
    id: "my-project",
    index: "01",
    title: "Tên Dự Án Của Bạn",
    categoryBadge: "Backend",
    categorySub: "Cloud Microservices",
    categoryFilter: "backend",
    description: "Mô tả ngắn gọn về giải pháp và kết quả đạt được...",
    image: "assets/images/my-project.jpg",
    highlights: [
      "Tính năng nổi bật 1",
      "Tính năng nổi bật 2"
    ],
    techStack: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  }
]
```

### 3. Thay ảnh chân dung:
Chỉ cần copy ảnh của bạn vào thư mục `assets/images/` với tên `personal.jpg` (hoặc đổi đường dẫn trong `config.js`).

---

## 🚀 Hướng Dẫn Chạy & Deploy Miễn Phí

### Cách 1: Mở trực tiếp trên máy tính (Không cần cài đặt gì)
- Click đúp vào file `index.html` để mở trên Google Chrome, Edge, Safari hoặc Firefox.

### Cách 2: Deploy lên GitHub Pages (Miễn phí 100%)
1. Tạo một repository mới trên GitHub (ví dụ: `portfolio` hoặc `thangak18.github.io`).
2. Push toàn bộ các file trong thư mục này lên nhánh `main`.
3. Vào repository trên GitHub -> **Settings** -> **Pages** -> Tại mục **Branch**, chọn `main` / `root` -> Nhấn **Save**.
4. Website của bạn sẽ hoạt động tại địa chỉ: `https://<your-username>.github.io/`

### Cách 3: Deploy lên Vercel / Netlify
1. Truy cập [vercel.com](https://vercel.com) hoặc [netlify.com](https://netlify.com).
2. Kéo thả trực tiếp thư mục này hoặc liên kết với GitHub Repo.
3. Website sẽ được cấp tên miền `.vercel.app` hoặc `.netlify.app` và chứng chỉ SSL miễn phí ngay lập tức.
