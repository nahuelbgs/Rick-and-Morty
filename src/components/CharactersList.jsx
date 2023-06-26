import React, { useEffect } from "react";
import { useState } from "react";
import Character from "./Characters";
import Search from "./Search/Search";
import Pagination from "./Pagination";
import Favorites from "./Favorites/Favorites";

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${searchValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw new Error("Character not found") 
        } else {
          setCharacters(data.results);
        }
      })
      .catch(error => console.error('Error:', error));
  }, [filteredCharacters]);
  const [favorites, setFavorites] = useState([]);
  const isAlreadyFavorite = (id) =>
    favorites.findIndex((character) => character.id === id);
  const addToFavorite = (image, id, name) => {
    let index = isAlreadyFavorite(id);
    if (index === -1) {
      setFavorites([...favorites, { image, id, name }]);
    } else {
      setFavorites([...favorites]);
    }
  };
  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <h2>FAVORITES</h2>
      <div className="fav-list">
        {favorites.length > 0 ? (
          <Favorites favorites={favorites} setFavorites={setFavorites} />
        ) : (
          <p className="add-favs">
            It seems you don't have favorite characters, try adding some!
          </p>
        )}
      </div>
      {filteredCharacters.length > 0 ? (
        <div>
          <ul className="character-list">
            {filteredCharacters.map((character) => (
              <li key={character.id}>
                <Character {...character} event={addToFavorite} />
              </li>
            ))}
          </ul>
          <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </div>
      ) : (
        <p>
          No characters were found with the search{" "}
          <strong>"{searchValue}"</strong>.
        </p>
      )}
    </>
  );
}

export default CharactersList;
