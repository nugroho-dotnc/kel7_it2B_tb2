import React from 'react';
import { useParams } from 'react-router-dom';

function MuseumDetail() {
  const { id } = useParams(); 
  return (
    <div>
      <h2>Detail Produk</h2>
      <p>ID Produk: {id}</p>
    </div>
  );
}

export default MuseumDetail;