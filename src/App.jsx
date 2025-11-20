import { useState } from "react"

function App() {

  const initial_Api_Url = "https://api.themoviedb.org/3/search/movie"

  const [search, setSearch] = useState("")

  function handleSearch() {
    console.log(search);

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
    </>
  )
}

export default App


{/*
  
  1. creo input
     - il valore corrisponde a ciò che scrivo
  2. creo bottone
     - al click del bottone viene richiamata la funzione handleSearch che mi fa vedere il risultato in console

*/}