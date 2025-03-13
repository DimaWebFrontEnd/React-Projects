
import './App.css';
import Square from './Square';
import SearchColor from './SearchColor';
import { useState } from "react"


function App() {

  const [color, setColor] = useState("");

  const [search, setSearch] = useState("");

  const setNewColor = (e) => {
    setColor(e)
  }

  const handleSearch = (e) => {
    setNewColor(e.target.value)
    setSearch(e.target.value)
  }


  return (
    <section className="App">
      <Square
        search={search}
        color={color}
      />
      <SearchColor
        handleSearch={(e) => handleSearch(e)}
      />
    </section>
  );
}

export default App;
