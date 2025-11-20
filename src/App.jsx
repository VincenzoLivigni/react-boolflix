import axios from "axios";
import { useState } from "react"

const movies_Api_Url = "https://api.themoviedb.org/3/search/movie"
const series_Api_Url = "https://api.themoviedb.org/3/search/tv"

function App() {

  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  function handleSearch() {
    console.log(search);

    const movies_url = `${movies_Api_Url}?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&query=${search}`
    const series_url = `${series_Api_Url}?api_key=${import.meta.env.VITE_SERIES_API_KEY}&query=${search}`
    console.log(movies_url, series_url);

    axios.get(movies_url)
      .then((res) => {
        console.log(res);
        setMovies(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      })


    axios.get(series_url)
      .then((res) => {
        console.log(res);
        setSeries(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const flags = {
    en: "gb",
    us: "us",
    it: "it",
    fr: "fr",
    es: "es",
    pt: "pt",
    de: "de",
    ru: "ru",
    gr: "gr",
    jp: "jp",
    chi: "cn",
    ko: "ko"
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
              <li className={`fi fi-${flags[movie.original_language] || "cx"}`}></li>
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
  1. sostituire stringa della "lingua" con la bandiera corrispondente.
     - recupero le bandiere importandole da "flag-icons" 
     - creo una variabile contenenti i codici delle bandiere
     - riporto l'icona al posto della stringa

    2. aggiungere ricerca per serie tv
       - ripeto i passaggi? nel dubbio...Si
       - ma la domanda è come cerco insieme film e serie? 🐔 (...?)



  M3
  M4
*/}