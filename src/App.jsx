import "./App.css";

function App() {
  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form>
          <input type="text" placeholder="Busca una película" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>Peliculas</main>
    </div>
  );
}

export default App;
