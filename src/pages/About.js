import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <h1 className="about-title">Giới thiệu về chúng tôi</h1>
        <p className="about-subtitle">Tìm hiểu thêm về dự án và đội ngũ của chúng tôi</p>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="about-section">
            <h2 className="content-title">Về dự án</h2>
            <p className="content-text">
              Đây là một dự án landing page được xây dựng với React, tập trung vào trải nghiệm 
              người dùng và thiết kế hiện đại. Chúng tôi cam kết mang đến những giải pháp 
              tốt nhất cho khách hàng.
            </p>
          </div>

          <div className="about-section">
            <h2 className="content-title">Sứ mệnh</h2>
            <p className="content-text">
              Sứ mệnh của chúng tôi là tạo ra những sản phẩm công nghệ chất lượng cao, 
              đáp ứng nhu cầu của người dùng và góp phần vào sự phát triển của cộng đồng.
            </p>
          </div>

          <div className="values-section">
            <h2 className="content-title">Giá trị cốt lõi</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">💡</div>
                <h3>Sáng tạo</h3>
                <p>Luôn đổi mới và tìm kiếm giải pháp tối ưu</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>Hợp tác</h3>
                <p>Làm việc nhóm hiệu quả và hỗ trợ lẫn nhau</p>
              </div>
              <div className="value-item">
                <div className="value-icon">⭐</div>
                <h3>Chất lượng</h3>
                <p>Cam kết cung cấp sản phẩm và dịch vụ tốt nhất</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <h3>Tập trung</h3>
                <p>Hướng đến mục tiêu và kết quả rõ ràng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
