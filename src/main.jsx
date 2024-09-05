import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/style/index.css'
import './assets/style/css2.css'
import './assets/style/bootstrap.min.css'
import './assets/style/magnific-popup.css'
import './assets/style/owl.carousel.css'
import './assets/style/owl.theme.default.min.css'
import './assets/style/jquery.animatedheadline.css'
import './assets/style/meanmenu.min.css'
import './assets/style/imgal.min.css'
import './assets/style/all.min.css'
import './assets/style/aos.css'
import './assets/style/normalize.css'
import './assets/style/style.css'
import './assets/style/responsive.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
