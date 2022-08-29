import React, { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content";
//import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogues/Dialogs";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import Hero from "./components/Music/Hero";
import Searchview from "./components/Searchview";
import MovieView from "./MovieView";
function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=aef41840a99b5b133635b9ea9c13f87c&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResult(data.results);
        });
    }
  }, [searchText]);

  return (
    <BrowserRouter>
      <div className="grid">
        <Route path={"/"} exact render={() => <Hero text="TuNde" />} />
        <Content searchText={searchText} setSearchText={setSearchText} />
        <Route path={"/profile"} render={() => <Profile />} />
        <Route path={"/dialogue"} render={() => <Dialogs />} />
        <Route path={"/music"} render={() => <Hero text="Tamawa" />} />
        <Route
          path={"/search"}
          render={() => (
            <Searchview keyWord={searchText} searchResult={searchResult} />
          )}
        />
        <Route path={"/movie/:id"} render={() => <MovieView />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
