import React from 'react'
import '../assets/css/header.css'
import logo from '../assets/images/logo.jpg'
const Header = () => {
  return (
   
     
        <div className="film-cerceve">
        <header>
            <div className="col-12">
                <div className="logo">
                <img  className="logo_resim"src={logo} alt='logo'></img>
                </div>
                <h1>Nostalji Şeridi</h1>
            </div>
        </header>
   <nav className="navbar">
  <ul className="navigasyon">
    <li><a href="#">Anasayfa</a></li>
    <li><a href="#">Filmler</a></li>
    <li><a href="#">Kitaplar</a></li>
    <li><a href="#">Hakkımda</a></li>
  </ul>
   </nav>
    </div>
  
  )
}

export default Header

