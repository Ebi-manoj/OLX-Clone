import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ProductContextProvider } from './context/ProductContext.jsx';
import { UserContextProvider } from './context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </UserContextProvider>
);
