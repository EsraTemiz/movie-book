
import './App.css'
import MovieForm from './Components/MovieForm'
import MovieItem from './Components/MovieItem'
import MovieList from './Components/MovieList'
import FilterBar from './Components/FilterBar'
import Header from './Components/Header'
import Banner from './Components/Banner'
import { useEffect, useState } from 'react'
function App() {
const [movies,setMovies]=useState(localStorage.getItem("movies") ? JSON.parse(localStorage.getItem("movies")):[]);
const[ oylar,setOylar]=useState(
  localStorage.getItem("oylar")
    ? JSON.parse(localStorage.getItem("oylar"))
    : {});
const addMovie=(newMovie)=>{setMovies([...movies,newMovie])}
const enFavoriId=Object.keys(oylar).length>0
? Object.keys(oylar).reduce((a,b)=>oylar[a]>oylar[b] ? a:b):null;
const enFavoriFilm=movies.find(movie=>movie.id===enFavoriId);
useEffect(()=>{localStorage.setItem("movies",JSON.stringify(movies))},[movies])
useEffect(() => {
  localStorage.setItem("oylar", JSON.stringify(oylar))
}, [oylar])
const handleVote = (id) => {
  setOylar(prev => ({
    ...prev,
    [id]: (prev[id] || 0) + 1
  }));
};
    console.log("Favori ID:", enFavoriId);
  return (
    <>
   <Header/>
   <Banner enFavoriFilm={enFavoriFilm}/>
  <h2>Sevdiğiniz Filmleri Ekleyiniz</h2>
  <h4 > Sevdiğiniz Filmleri isim ve Url olarak ekleyerek,Favori Filminizin Banner da görünmesini sağlayabilirsiniz </h4>
  <MovieForm onAddMovie={addMovie}/>
    
  <section className='afis-kartlar'>
  
  <MovieList movies={movies}
  oylar={oylar}
  onVote={handleVote}
  enFavoriFilm={enFavoriFilm}/>
  </section>

   <MovieItem/>
  
  <FilterBar/>
    </>
  )
}

export default App
