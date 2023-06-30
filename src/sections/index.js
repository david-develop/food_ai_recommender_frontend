import React from 'react';
import ReactDOM from 'react-dom';
import RecipePage from './RecipePage';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


ReactDOM.render(
  <React.StrictMode>
    <RecipePage />
  </React.StrictMode>,
  document.getElementById('root')
);
