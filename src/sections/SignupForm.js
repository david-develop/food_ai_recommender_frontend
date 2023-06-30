import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [password_2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await axios.post('http://localhost:8000/auth/register', { email, username, password, password_2}, { withCredentials: true, headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
      // Assuming successful signup redirects to the login page
      window.location.href = '/login';
    } catch (error) {
      setError(error.response.data.detail);
    }
  };

  return (
    <div>
      <h2 className='text-center'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="username" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Password Confirmation" value={password_2} onChange={(e) => setPassword2(e.target.value)} />
        <button type="submit">Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignupForm;
