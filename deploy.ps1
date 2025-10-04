# PowerShell Deploy Script for Landing Page

Write-Host "================================" -ForegroundColor Cyan
Write-Host "   Landing Page Deploy Script   " -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Menu
Write-Host "Chọn nền tảng deploy:" -ForegroundColor Yellow
Write-Host "1. Vercel (Khuyến nghị)" -ForegroundColor Green
Write-Host "2. Netlify" -ForegroundColor Green
Write-Host "3. GitHub Pages" -ForegroundColor Green
Write-Host "4. Build Production chỉ" -ForegroundColor Green
Write-Host "5. Test Production Build" -ForegroundColor Green
Write-Host ""

$choice = Read-Host "Nhập lựa chọn (1-5)"

switch ($choice) {
    "1" {
        Write-Host "`n📦 Deploying to Vercel..." -ForegroundColor Cyan
        
        # Check if Vercel CLI is installed
        $vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
        
        if (-not $vercelInstalled) {
            Write-Host "⚠️  Vercel CLI chưa được cài đặt." -ForegroundColor Yellow
            $install = Read-Host "Bạn có muốn cài đặt không? (y/n)"
            
            if ($install -eq "y") {
                Write-Host "📥 Đang cài đặt Vercel CLI..." -ForegroundColor Cyan
                npm install -g vercel
            } else {
                Write-Host "❌ Hủy deploy" -ForegroundColor Red
                exit
            }
        }
        
        Write-Host "🚀 Đang deploy lên Vercel..." -ForegroundColor Green
        vercel --prod
        
        Write-Host "`n✅ Deploy hoàn tất!" -ForegroundColor Green
    }
    
    "2" {
        Write-Host "`n📦 Deploying to Netlify..." -ForegroundColor Cyan
        
        # Check if Netlify CLI is installed
        $netlifyInstalled = Get-Command netlify -ErrorAction SilentlyContinue
        
        if (-not $netlifyInstalled) {
            Write-Host "⚠️  Netlify CLI chưa được cài đặt." -ForegroundColor Yellow
            $install = Read-Host "Bạn có muốn cài đặt không? (y/n)"
            
            if ($install -eq "y") {
                Write-Host "📥 Đang cài đặt Netlify CLI..." -ForegroundColor Cyan
                npm install -g netlify-cli
            } else {
                Write-Host "❌ Hủy deploy" -ForegroundColor Red
                exit
            }
        }
        
        Write-Host "🏗️  Đang build..." -ForegroundColor Yellow
        npm run build
        
        Write-Host "🚀 Đang deploy lên Netlify..." -ForegroundColor Green
        netlify deploy --prod
        
        Write-Host "`n✅ Deploy hoàn tất!" -ForegroundColor Green
    }
    
    "3" {
        Write-Host "`n📦 Deploying to GitHub Pages..." -ForegroundColor Cyan
        
        Write-Host "⚠️  Lưu ý: Đảm bảo bạn đã cập nhật 'homepage' trong package.json" -ForegroundColor Yellow
        Write-Host "Ví dụ: https://your-username.github.io/demo-landing-page" -ForegroundColor Yellow
        Write-Host ""
        
        $continue = Read-Host "Tiếp tục? (y/n)"
        
        if ($continue -eq "y") {
            Write-Host "🚀 Đang deploy lên GitHub Pages..." -ForegroundColor Green
            npm run deploy
            
            Write-Host "`n✅ Deploy hoàn tất!" -ForegroundColor Green
            Write-Host "Đợi 5-10 phút để GitHub Pages cập nhật" -ForegroundColor Yellow
        } else {
            Write-Host "❌ Hủy deploy" -ForegroundColor Red
        }
    }
    
    "4" {
        Write-Host "`n🏗️  Building production..." -ForegroundColor Cyan
        npm run build
        
        Write-Host "`n✅ Build hoàn tất!" -ForegroundColor Green
        Write-Host "📁 Output: ./build" -ForegroundColor Yellow
    }
    
    "5" {
        Write-Host "`n🏗️  Building production..." -ForegroundColor Cyan
        npm run build
        
        Write-Host "`n🌐 Starting production server..." -ForegroundColor Cyan
        Write-Host "Truy cập: http://localhost:3000" -ForegroundColor Green
        Write-Host "Nhấn Ctrl+C để dừng server" -ForegroundColor Yellow
        Write-Host ""
        
        npx serve -s build
    }
    
    default {
        Write-Host "`n❌ Lựa chọn không hợp lệ" -ForegroundColor Red
    }
}

Write-Host "`n================================" -ForegroundColor Cyan
Write-Host "      Script hoàn tất!          " -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
