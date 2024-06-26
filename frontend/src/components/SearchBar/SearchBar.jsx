import { useContext, useState } from "react";
import "./SearchBar.css";
import { FetchMoviesContext } from "../../context/Context";
import { Link } from "react-router-dom";

const SearchBar = () => {
  // global context for all fetched movies
  const { movies, setMovies } = useContext(FetchMoviesContext);

  // state for userInput
  const [userInput, setUserInput] = useState("");

  // function to find and save movie from userInput
  const findMovie = (e) => {
    e.preventDefault();

    setMovies(
      movies?.filter((movie) =>
        movie.title.toLowerCase().includes(userInput.toLowerCase())
      )
    );
  };

  // reset searched movies
  const resetMovies = (e) => {
    e.preventDefault();
    window.location.reload(true);
  };

  return (
    <section className="searchbar">
      <input
        type="text"
        placeholder="e.g. The Godfather"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />

      <button className="green-btn" onClick={findMovie}>
        <Link to="/"> Submit </Link>
      </button>
      <button className="green-btn" onClick={resetMovies}>
        <Link to="/"> Reset </Link>
      </button>
    </section>
  );
};

export default SearchBar;
