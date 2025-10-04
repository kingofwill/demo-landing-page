import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ user, onLogout }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">Landing Page</Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Trang chủ</Link>
          <Link to="/about" className="nav-link">Giới thiệu</Link>
          {user ? (
            <div className="user-info">
              <span className="user-email">Xin chào, {user}</span>
              <button onClick={onLogout} className="btn-logout">Đăng xuất</button>
            </div>
          ) : (
            <Link to="/login" className="btn-login">Đăng nhập</Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
