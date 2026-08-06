import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/base/base.css'
import './styles/components/components.css'
import './styles/components/sub-components.css'
import './styles/layout/layout.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
