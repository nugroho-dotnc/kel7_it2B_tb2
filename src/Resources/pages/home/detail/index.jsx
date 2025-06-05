import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function MuseumDetail() {
  const { id } = useParams(); 
      const [museum, setMuseum] = useState({})
      const fetchMuseum = async () =>{
          const response = await fetch("/data/museum.json")
          const data = await response.json()
          const dataMuseum = data.find(item =>  item.id === parseInt(id))
          setMuseum(dataMuseum);
      }
      useEffect(() => {
          fetchMuseum()
      }, [])
  return (
    <div className='mt-96'>
      <h2>{museum.nama}</h2>
      <p>ID Produk: {id}</p>
    </div>
  );
}

export default MuseumDetail;