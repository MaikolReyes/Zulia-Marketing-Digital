import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar, Footer } from './layout'
import { Principal, QuienesSomos, Servicios, Contacto, Planes } from './sections'
import './styles/style.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Principal />
    <Servicios />
    <QuienesSomos />
    <Planes />
    {/* <Projects /> */}
    <Contacto />
    <Footer />
  </React.StrictMode>,
)
