import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Banner from './components/Banner'
import CV from './components/CV'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Banner />
    <CV></CV>
  </StrictMode>,
)
