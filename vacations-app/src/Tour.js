import React, { useState } from "react";

const Tour = ({ id, name, info, price, image }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name}></img>

      <footer>
        <div className="tour-info">
          <h2>{name}</h2>
          <h2 className="tour-price">${price}</h2>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
