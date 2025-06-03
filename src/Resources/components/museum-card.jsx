import React from 'react';
import "../style/component.css"
const MuseumCard = ({image, title, desc}) => {
  return (
   <div className="museum-card">
  <img src={image} alt="Museum Jakarta Barat" />
  <div className="overlay">
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
</div>
  );
};
export default MuseumCard

