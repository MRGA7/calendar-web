import React, { useState } from 'react';
import Snowfall from 'react-snowfall';
import './Login.css';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    if (email === 'mariatest' && password === '1234') {
      history.push('/home');
    }
  };

  return (
    <div className="login-page">
      {/* Efecto de nieve */}
      <Snowfall />

      <div className="login-container">
        <h1>Calendario de Adviento</h1>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
