import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Actors() {
  const [actors,setActors] =useState([])
  useEffect(() => {
   fetch('http://localhost:8000/actors')
   .then(response => response.json())
   .then(data => setActors(data))
   .catch(error => console.error(error))
  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
        <h1>Actors Page</h1>
      </header>
      <main>
      {actors.map(actor => (
          <article key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map(movie => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
        {/* {actors.map(actor =>
         <MovieCard key={actor.id} 
         name={actor.name} 
         movies={actor.movies}/>)} */}
      </main>
    </>
  );
};

export default Actors;
