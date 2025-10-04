import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Chào mừng đến với Landing Page</h1>
          <p className="hero-subtitle">
            Khám phá những tính năng tuyệt vời và trải nghiệm người dùng đẳng cấp
          </p>
          <button className="cta-button">Bắt đầu ngay</button>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2 className="section-title">Tính năng nổi bật</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Hiệu suất cao</h3>
              <p>Tối ưu hóa tốc độ và hiệu suất cho trải nghiệm mượt mà</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Thiết kế đẹp</h3>
              <p>Giao diện hiện đại, thân thiện với người dùng</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Bảo mật</h3>
              <p>Đảm bảo an toàn thông tin và dữ liệu của bạn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
