import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import LoginForm from './sections/LoginForm';
import SignupForm from './sections/SignupForm';
import RecipePage from './sections/RecipePage';
import MyRecipesPage from './sections/MyRecipesPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in by verifying the token
    const token = localStorage.getItem('token');
    if (token) {
      // Perform token verification here
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear the token and log out the user
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1 className="container">Recipe AI Gen</h1>
          <nav className='navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark'>
            <div className='container container-fluid'>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-bg-dark"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                {loggedIn ? (
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link text-bg-dark" to="/">Generate</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-bg-dark" to="/my-recipes">My Recipes</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-bg-dark" to="/" onClick={handleLogout}>Logout</Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link text-bg-dark" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-bg-dark" to="/signup">Signup</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <LoginForm setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={loggedIn ? <Navigate to="/" /> : <SignupForm />} />
          <Route path="/" element={loggedIn ? <RecipePage /> : <Navigate to="/login" />} />
          <Route path="/my-recipes" element={loggedIn ? <MyRecipesPage /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

