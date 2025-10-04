import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Giả lập data login
    const mockEmail = 'admin@gmail.com';
    const mockPassword = '123';

    if (email === mockEmail && password === mockPassword) {
      onLogin(email);
      navigate('/');
    } else {
      setError('Email hoặc mật khẩu không chính xác!');
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Đăng nhập</h2>
          <p className="login-subtitle">Chào mừng bạn trở lại!</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                required
              />
            </div>

            <button type="submit" className="login-button">
              Đăng nhập
            </button>
          </form>

          <div className="login-hint">
            <p><strong>Thông tin đăng nhập demo:</strong></p>
            <p>Email: admin@gmail.com</p>
            <p>Mật khẩu: 123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
