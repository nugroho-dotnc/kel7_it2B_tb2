import React from 'react';
import "../../../style/detail.css"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function MuseumDetail() {
  const { id } = useParams(); 
      // eslint-disable-next-line no-unused-vars
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
    <>
      <div className="container-detail">
        <div className="page1">
          <div className="black-box">
            <div className='deskripsi-museum'>
              <p style={{fontWeight: "bold", fontSize: "48px"}}>Museum Nasional</p>
              <p style={{fontSize: "20px"}}>Museum Nasional Republik Indonesia, atau Museum Gajah, adalah ikon di Jakarta dan museum terbesar di Asia Tenggara yang menyimpan lebih dari 190.000 artefak sejarah dan budaya bangsa. Dari peninggalan prasejarah hingga era kemerdekaan, koleksi arkeologi, etnografi, dan lainnya menawarkan perjalanan edukatif menelusuri kekayaan peradaban Indonesia.</p>
              <a href="#page2" className='button'>
                Lihat Koleksi
              </a>
            </div>
          </div>
        </div>
        <div className="page2" id='page2'>
          <div className="black-box">
            <div className="page2-content">
              <div className="judul">
                <h1>Daftar Koleksi</h1>
              </div>
              <div className="frame-koleksi" style={{marginBottom: "24px"}}>
                <div className='koleksi'>
                  <div className='nama-koleksi'>
                    <h1>Keris</h1>
                  </div>
                </div>
                <div className='koleksi'>
                  <div className='nama-koleksi'>
                    <h1>Keris</h1>
                  </div>
                </div>
                <div className='koleksi'>
                  <div className='nama-koleksi'>
                    <h1>Keris</h1>
                  </div>
                </div>
                <div className='koleksi'>
                  <div className='nama-koleksi'>
                    <h1>Keris</h1>
                  </div>
                </div>
              </div>
              <div className="frame-koleksi">
                <div className='koleksi'>
                  <div className='nama-koleksi'>
                    <h1>Keris</h1>
                  </div>
                </div>
                <div className='koleksi'>
                  <div className='nama-koleksi'>
                    <h1>Keris</h1>
                  </div>
                </div>
                <div className='koleksi'>
                  <div className='nama-koleksi'>
                    <h1>Keris</h1>
                  </div>
                </div>
                <div className='koleksi'>
                  <div className='nama-koleksi'>
                    <h1>Keris</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MuseumDetail;