# 🎨 Landing Page Demo

> Một landing page hiện đại được xây dựng với React và chủ đề màu xanh

![React](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Tính năng

- 🏠 **Trang chủ (Home)** - Hero section và features nổi bật
- ℹ️ **Trang giới thiệu (About)** - Thông tin về dự án và giá trị
- 🔐 **Đăng nhập** - Authentication với dữ liệu giả lập
- 📱 **Responsive** - Tối ưu cho mọi thiết bị
- 🎨 **Blue Theme** - Thiết kế màu xanh hiện đại
- ⚡ **Fast** - React với optimized performance

## 🔐 Thông tin đăng nhập Demo

```
Email: admin@gmail.com
Password: 123
```

## 🚀 Cài đặt và Chạy

### Yêu cầu
- Node.js 14+ 
- npm hoặc yarn

### Cài đặt

```bash
# Clone repository
git clone https://github.com/your-username/demo-landing-page.git

# Di chuyển vào thư mục
cd demo_fe

# Cài đặt dependencies
npm install

# Chạy development server
npm start
```

Mở trình duyệt và truy cập: `http://localhost:3000`

## 📦 Build Production

```bash
# Build cho production
npm run build

# Test production build locally
npx serve -s build
```

## 🌐 Deploy

Xem hướng dẫn chi tiết tại: **[DEPLOY_GUIDE.md](DEPLOY_GUIDE.md)**

### Deploy nhanh với Vercel (Khuyến nghị)

```bash
# Cài đặt Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Các nền tảng deploy miễn phí:
- ✅ **Vercel** (Khuyến nghị) - https://vercel.com
- ✅ **Netlify** - https://netlify.com
- ✅ **GitHub Pages** - Miễn phí hoàn toàn
- ✅ **Render** - https://render.com
- ✅ **Railway** - https://railway.app

## 🛠️ Công nghệ sử dụng

- **React 18** - UI Library
- **React Router DOM v6** - Client-side routing
- **CSS3** - Styling với animations
- **React Hooks** - State management

## 📁 Cấu trúc dự án

```
demo_fe/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── Header.js           # Navigation component
│   │   └── Header.css          # Header styles
│   ├── pages/
│   │   ├── Home.js             # Home page
│   │   ├── Home.css            # Home styles
│   │   ├── About.js            # About page
│   │   ├── About.css           # About styles
│   │   ├── Login.js            # Login page
│   │   └── Login.css           # Login styles
│   ├── App.js                  # Main app component
│   ├── App.css                 # Global app styles
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── netlify.toml                # Netlify config
├── package.json                # Dependencies
├── DEPLOY_GUIDE.md             # Hướng dẫn deploy chi tiết
└── README.md                   # Documentation
```

## 🎨 Features chi tiết

### Header Component
- Responsive navigation bar
- User authentication state
- Smooth transitions
- Sticky positioning

### Home Page
- Hero section với gradient background
- Feature cards với hover effects
- Call-to-action button
- Modern layout

### About Page
- Company information
- Core values với icons
- Responsive grid layout
- Professional design

### Login Page
- Form validation
- Error handling
- Demo credentials hint
- Secure-looking UI

## 🔧 Scripts có sẵn

```bash
npm start          # Chạy development server
npm run build      # Build production
npm test           # Chạy tests
npm run deploy     # Deploy lên GitHub Pages
```

## 📝 Customization

### Thay đổi màu chủ đề:

Mở file CSS và tìm các giá trị màu xanh:
- `#1e88e5` - Primary blue
- `#1565c0` - Darker blue
- `#667eea` - Light purple-blue

### Thay đổi thông tin đăng nhập:

Mở `src/pages/Login.js`:
```javascript
const mockEmail = 'your-email@example.com';
const mockPassword = 'your-password';
```

## 🐛 Troubleshooting

### Build errors?
```bash
rm -rf node_modules build
npm install
npm run build
```

### Router không hoạt động sau deploy?
- Xem file `netlify.toml` đã được config redirects
- Với Vercel, tự động handle React Router

## 📄 License

MIT License - Tự do sử dụng cho dự án cá nhân và thương mại

## 🤝 Contributing

Mọi đóng góp đều được chào đón! Hãy tạo pull request hoặc mở issue.

## 📧 Contact

Nếu có câu hỏi, vui lòng tạo issue trong repository.

---

**Made with ❤️ and React**
