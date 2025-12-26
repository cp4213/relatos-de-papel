//React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Styles
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//App
import AppHookContainer from './AppHookContainer.jsx';
import "./i18n";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppHookContainer />
  </StrictMode>,
)
