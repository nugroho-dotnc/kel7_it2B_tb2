import React from 'react';
import "../style/component.css"
const MuseumCard = ({image, title, desc, link}) => {
  return (
    <a className="museum-card" href={link}>
    <img src={image} alt="Museum Jakarta Barat" />
    <div className="overlay">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </a>
  );
};
export default MuseumCard

