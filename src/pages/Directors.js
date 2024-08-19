import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors,setDirectors] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/directors")
    .then(response => response.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
       
          {directors.map(director => (
          <article key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map(movie => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
