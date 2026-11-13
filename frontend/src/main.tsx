import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { restaurantConfig } from './config/restaurantConfig'

document.title = `${restaurantConfig.restaurantName} | ${restaurantConfig.tagline}`
document.querySelector('meta[name="theme-color"]')?.setAttribute('content', restaurantConfig.themeColor)
document.querySelector('meta[name="apple-mobile-web-app-title"]')?.setAttribute('content', restaurantConfig.restaurantName)
document.querySelector('meta[name="description"]')?.setAttribute(
  'content',
  `${restaurantConfig.restaurantName} — ${restaurantConfig.tagline}. Visit us at ${restaurantConfig.address}.`,
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
