# 📹 VIDEO TUTORIAL SCRIPT - Deploy Landing Page

## 🎬 PHẦN 1: GIỚI THIỆU PROJECT (30 giây)

"Xin chào! Hôm nay mình sẽ hướng dẫn deploy landing page React lên server miễn phí trong vài phút.

Project này bao gồm:
- Trang chủ với hero section
- Trang giới thiệu
- Trang đăng nhập với mock data
- Responsive design với theme màu xanh

Thông tin login demo:
- Email: admin@gmail.com
- Password: 123"

---

## 🎬 PHẦN 2: DEMO PROJECT (1 phút)

"Để bắt đầu, chạy lệnh npm start"

[Screen: Terminal]
```
npm start
```

"Website sẽ mở tại localhost:3000"

[Screen: Browser]
- Show trang chủ
- Click "Giới thiệu"
- Click "Đăng nhập"
- Login với admin@gmail.com / 123
- Show email hiển thị ở header
- Click logout

"OK, project hoạt động tốt! Giờ deploy lên server miễn phí"

---

## 🎬 PHẦN 3A: DEPLOY VỚI VERCEL (2 phút)

"Cách 1: Deploy với Vercel - nhanh nhất!

Bước 1: Cài Vercel CLI"

[Screen: Terminal]
```
npm install -g vercel
```

"Bước 2: Login"
```
vercel login
```

[Screen: Browser mở để login]

"Bước 3: Deploy"
```
vercel --prod
```

[Screen: Terminal showing deploy process]

"Và đó! Website đã live!"

[Screen: Browser với URL vercel]

"URL: https://demo-landing-page.vercel.app"

---

## 🎬 PHẦN 3B: DEPLOY VỚI NETLIFY (2 phút)

"Cách 2: Deploy với Netlify - siêu dễ!

Bước 1: Build project"

[Screen: Terminal]
```
npm run build
```

"Bước 2: Vào Netlify"

[Screen: Browser - netlify.com]

"Sign up miễn phí với GitHub"

"Bước 3: Drag & Drop"

[Screen: Kéo folder build vào Netlify]

"Chỉ cần kéo thả folder build vào đây"

[Screen: Deploy progress]

"Đợi vài giây..."

"Done! Website đã live!"

[Screen: Website với URL Netlify]

---

## 🎬 PHẦN 3C: DEPLOY VỚI GITHUB PAGES (3 phút)

"Cách 3: GitHub Pages - hoàn toàn miễn phí!

Bước 1: Cập nhật package.json"

[Screen: VS Code - package.json]

```json
"homepage": "https://username.github.io/demo-landing-page"
```

"Thay username bằng tên GitHub của bạn"

"Bước 2: Push lên GitHub"

[Screen: Terminal]
```
git init
git add .
git commit -m "Deploy"
git remote add origin https://github.com/username/demo-landing-page.git
git push -u origin main
```

"Bước 3: Deploy"
```
npm run deploy
```

[Screen: Terminal showing deploy]

"Bước 4: Enable GitHub Pages"

[Screen: GitHub.com - Settings]

"Vào Settings → Pages → Chọn gh-pages branch"

[Screen: Save button]

"Đợi khoảng 5 phút..."

[Screen: Website live]

"Done! Website đã live trên GitHub Pages!"

---

## 🎬 PHẦN 4: SO SÁNH (30 giây)

"So sánh 3 cách:

**Vercel:**
✅ Nhanh nhất - 2 phút
✅ Auto deploy
✅ Unlimited bandwidth

**Netlify:**  
✅ Dễ nhất - drag & drop
✅ 100GB bandwidth/tháng
✅ Form handling

**GitHub Pages:**
✅ 100% miễn phí
✅ Unlimited bandwidth
✅ Tích hợp Git"

---

## 🎬 PHẦN 5: TIPS & TRICKS (1 phút)

"Một số tips hữu ích:

**Tip 1: Custom Domain**
Cả 3 platform đều hỗ trợ custom domain miễn phí

**Tip 2: Auto Deploy**
Push code lên Git, website tự động update!

**Tip 3: HTTPS**
Tất cả đều có HTTPS miễn phí

**Tip 4: Preview**
Vercel và Netlify cho phép preview mỗi commit

**Tip 5: PowerShell Script**
Project có sẵn script deploy.ps1 để deploy dễ dàng"

---

## 🎬 PHẦN 6: KẾT (30 giây)

"Vậy là xong! Bạn đã học được 3 cách deploy miễn phí:

1. **Vercel** - Nhanh nhất
2. **Netlify** - Dễ nhất  
3. **GitHub Pages** - Free 100%

Mình khuyến nghị dùng **Vercel** cho tốc độ và tính năng tốt nhất.

Trong project có đầy đủ tài liệu hướng dẫn:
- START_HERE.md
- DEPLOY_GUIDE.md
- DEPLOY_NHANH.md

Chúc các bạn deploy thành công!

Đừng quên like và subscribe nhé! 👍"

---

## 📝 NOTES CHO VIDEO EDITOR

### Timestamps:
- 0:00 - Intro
- 0:30 - Demo project
- 1:30 - Vercel deploy
- 3:30 - Netlify deploy
- 5:30 - GitHub Pages deploy
- 8:30 - Comparison
- 9:00 - Tips & Tricks
- 10:00 - Outro

### B-Roll Suggestions:
- Code editor close-ups
- Terminal commands
- Browser loading animations
- Success checkmarks
- Website screenshots

### Text Overlays:
- Commands
- URLs
- Key points
- Platform logos

### Background Music:
- Upbeat, tech-focused
- Not too loud
- Fade at speech

---

## 🎯 KEY TAKEAWAYS (cho Description)

**3 Cách Deploy Landing Page React Miễn Phí:**

1️⃣ **VERCEL** (Khuyến nghị)
   - Nhanh: 2 phút
   - Command: `vercel`
   - URL: https://vercel.com

2️⃣ **NETLIFY**
   - Dễ: Drag & Drop
   - URL: https://netlify.com

3️⃣ **GITHUB PAGES**
   - Free: 100%
   - Command: `npm run deploy`

**Timeline:**
0:00 - Giới thiệu
0:30 - Demo project
1:30 - Deploy Vercel
3:30 - Deploy Netlify
5:30 - Deploy GitHub Pages
8:30 - So sánh
9:00 - Tips
10:00 - Kết

**Links:**
- GitHub Repo: [link]
- Vercel: https://vercel.com
- Netlify: https://netlify.com
- Docs: Xem trong repo

**Tags:**
#React #Deploy #WebDevelopment #Vercel #Netlify #GitHubPages #Tutorial #Vietnamese #LandingPage #Free

---

## 📸 THUMBNAIL IDEAS

**Option 1:**
```
┌─────────────────────────────┐
│   DEPLOY REACT              │
│   MIỄN PHÍ                  │
│                             │
│   3 CÁCH                    │
│   2 PHÚT                    │
│                             │
│   [Vercel][Netlify][GitHub] │
└─────────────────────────────┘
```

**Option 2:**
```
┌─────────────────────────────┐
│                             │
│  ⚡ DEPLOY                  │
│  🚀 SIÊU NHANH              │
│  💰 MIỄN PHÍ               │
│                             │
│  REACT → VERCEL             │
└─────────────────────────────┘
```

**Colors:**
- Blue gradient background
- White/Yellow text
- Platform logos

---

**Happy Recording! 🎥**
