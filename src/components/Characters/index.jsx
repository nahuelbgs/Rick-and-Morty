import React from "react";
import "../Characters/index.css";

const Character = ({ image, id, name, status, location, event }) => {
  return (
    <div className="character-container" key={id}>
      <div
        className="character-image-container"
      >
        <img className="character-image" src={image} alt={`image of ${name}`} />
        <p  onClick={() => event(image, id, name, status)} className="heart-fav">❤️</p>
      </div>
      <p
        className={`character-status ${
          status === "Alive"
            ? "background-alive"
            : status === "Dead"
            ? "background-dead"
            : "background-unknown"
        }`}
      >
        {status}
      </p>
      <div className="flex">
        <div className="character-name-container">
          <p className="character-name">{name}</p>
        </div>
        <div className="location">
          <p className="last-location">Last location:</p>
          <p className="location">{location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Character;
