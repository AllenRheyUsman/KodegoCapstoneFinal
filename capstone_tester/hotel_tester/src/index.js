import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { AuthProvider } from './component/authenticator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider> {/* Wrap the App2 component with AuthProvider */}
        <App2 />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
