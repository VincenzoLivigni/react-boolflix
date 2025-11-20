import axios from "axios";
import { useState } from "react"

const initial_Api_Url = "https://api.themoviedb.org/3/search/movie"

function App() {

  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  function handleSearch() {
    console.log(search);

    const url = `${initial_Api_Url}?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&query=${search}`
    console.log(url);

    axios.get(url)
      .then((res) => {
        console.log(res);
        setMovies(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <h1>Boolflix</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {
          movies.map((movie) => (
            <>
              <li>{movie.title}</li>
              <li>{movie.original_title}</li>
              <li>{movie.original_language}</li>
              <li>{movie.vote_average}</li>
              <br />
            </>
          ))
        }
      </ul>
    </>
  )
}

export default App


{/*
  M1
  1. creo input
     - il valore corrisponde a ciò che scrivo
  2. creo bottone
     - al click del bottone viene richiamata la funzione handleSearch che mi fa vedere il risultato in console
  3. aggiungo url completo
  4. effettuo chiamata axios
     - stampo in console
       - il risultato se la chiamata va a buon fine
       - l'errore altrimenti
  5. creo variabile di stato "movies"
     - salvo i risultati nel setter
  6. mappo l'array
     - per ogni fil mostro i valori: titolo, titolo originale, lingua originale, voto


  M2
  M3
  M4
*/}