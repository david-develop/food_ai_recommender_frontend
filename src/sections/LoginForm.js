import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ setLoggedIn }) => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    // if not username or password entered then set error
    if (!username || !password) {
      setError('Please enter a username and password.');
      return;
    }
    await axios.post('http://localhost:8000/auth/login', { username, password }, {withCredentials: true, headers: { 'Content-Type': 'multipart/form-data'}})
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        setLoggedIn(true);
      }).catch(error => {
        setError(error.response.data.detail);
      })
  };

  return (
    <div>
      <h2 className='text-center'>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="username" placeholder="Email" value={username} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
