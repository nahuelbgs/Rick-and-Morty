import React from "react";
import './Favorites.css'

function Favorites({favorites, setFavorites}) {
  const deleteFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };
  return (
    <>
      {favorites.map((fav) => (
        <div className="fav-container" key={fav.id}>
          <div className="character-image-container">
            <img
              className="fav-image"
              src={fav.image}
              alt={`image of ${fav.name}`}
            />
            <p onClick={() => deleteFavorite(fav.id)} className="delete-fav">
              💔
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Favorites;
