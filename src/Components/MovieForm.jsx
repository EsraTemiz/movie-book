
import React, { useState } from 'react'
import '../assets/css/forrm.css'
const MovieForm = ({onAddMovie}) => {
const [filmTitle ,setFilmTitle]=useState('');
const [filmUrl,setFilmUrl]=useState('');
const handleSubmit=(e)=>
  {e.preventDefault()
    
    if(!filmTitle || !filmUrl){
      alert("bu alanı boş bırakmayınız")
      return
    }
    const newMovie={
      id:Date.now().toString(),
      title:filmTitle,
      image:filmUrl
    }
    onAddMovie(newMovie)
    console.log(filmTitle,filmUrl);
    setFilmTitle('')
    setFilmUrl('')
};

  return (
    <div>
      <form id='filmForm' onSubmit={handleSubmit}>
     <input type="text"id='filmTitle' value={filmTitle} 
     onChange ={(e)=>setFilmTitle(e.target.value)} placeholder="film Adi" required/>
   <input type="text" id="filmImage" value={filmUrl}  onChange ={(e)=>setFilmUrl(e.target.value)} 
   placeholder=" afis Url" required/>
  
   <button type="submit" >Film Ekle</button>
      </form>
    </div>
  )
}

export default MovieForm
