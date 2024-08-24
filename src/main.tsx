import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar, Footer } from './layout'
import './styles/style.scss'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
)
