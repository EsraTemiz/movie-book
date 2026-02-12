import React from 'react'
import '../assets/css/banner.css'
const Banner = ({enFavoriFilm}) => {
  return (
    <div >
     <div className="banner "   style={{
    backgroundImage: enFavoriFilm
      ? `url(${enFavoriFilm.image})`
      : "none",

  }}>
   
  <div className="banner-text">
    <h2>Kült Filmler Arşivi</h2>

    <p>Zamanda bir yolculuğa hazır mısın?</p>

  </div>
</div>

    </div>
  )
}

export default Banner

