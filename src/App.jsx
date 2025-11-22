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

  const searchAll = [...movies, ...series]

  const url_img = "https://image.tmdb.org/t/p/"
  const url_size = "w342"


  return (
    <>
      <header>
        <nav className="bg-dark d-flex justify-content-between align-items-center px-4 py-2">
          <h1 className="text-danger">BOOLFLIX</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-dark text-danger fw-bold" onClick={handleSearch}>Search</button>
          </form>
        </nav>
      </header>

      <main>
        <div>
          <div className="row g-3 p-4 bg-dark">
            {
              searchAll.map((search) => (
                <div key={search.id} className="col-3">
                  <div className="card">
                    <div className="card-img-top">
                      <img src={`${url_img}${url_size}${search.poster_path}`} alt={search.title || search.name} />
                    </div>

                    <div className="card-body bg-dark">
                      <p>Title: {search.title || search.name}</p>
                      <p>Original Title: {search.original_title || search.original_name}</p>
                      <p>Original Language: <span className={`fi fi-${flags[search.original_language] || "cx"}`}></span></p>
                      <p>Voto: {Math.ceil(search.vote_average / 2)}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </main>
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
     - aggiungo variabile di stato per le serie
     - effettuo la seconda chiamata axios  

  3. creo variabile per richiamare sia l'array per i film sia quelo per le serie "searchAll"
     - mappo il nuovo array
     - per la ricerca di titolo: search.title (film) oppure search.name (serie)
     - per la ricerca di titolo originale: search.original_title (film) oppure search.original_name (serie)

  M3
  1. aggiungere copertina
     - recupero url img da file
     - recupero url dimensione da file
     - recupero poster_path da API

  2. stelle
     - npm i bootstrap icons
     - recupero icona da bootstrap ( <i class="bi bi-star-fill"></i> )
     - trasformare voto 1 a 10 decimale in un numero intero da 1 a 5
     - arrotonda per eccesso 
     - le stelle....

  M4
  1. aggiungere style


*/}