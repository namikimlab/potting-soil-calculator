/**
 * main.tsx
 *
 * Entry point for the React application.
 * Attaches the <App /> component to the #root element in index.html.
 * Wraps the app in React.StrictMode for highlighting potential issues.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
