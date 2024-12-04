import React, { useState } from 'react';
import './login.css'; // เรียกใช้ไฟล์ CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { username, password });
  };

  const handleSignUp = () => {
    console.log('Redirecting to Sign Up page...');
    // เพิ่มลิงก์ไปยังหน้าสมัครใช้งาน
    window.location.href = '/signup'; // เปลี่ยนเป็น URL ของหน้าสมัครใช้งาน
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button className="signup-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
