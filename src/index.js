import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    {/* Properties werden von aussen an die Komponente übergeben */}
    <App message="Hello to: "/>
  </React.StrictMode>
);