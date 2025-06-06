import React from 'react';
import "../../../style/detail.css"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MuseumDetail() {
  const { id } = useParams(); 
  const [museum, setMuseum] = useState({})
  const [listKoleksi, setListKoleksi] = useState([])
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const fetchMuseum = async () => {
    try {
      setLoading(true)
      const response = await fetch("/data/museum.json")
      const data = await response.json()
      const dataMuseum = data.find(item => item.id === parseInt(id))
      
      if (dataMuseum) {
        setListKoleksi(dataMuseum.koleksi || [])
        setMuseum(dataMuseum)
      }
    } catch (error) {
      console.error("Error fetching museum data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMuseum()
  }, [id])

  // Smooth scroll to collections
  const scrollToCollections = (e) => {
    e.preventDefault()
    const element = document.getElementById('daftar-koleksi')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  if (loading) {
    return (
      <div className="container-detail">
        <div className="loading-container" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '18px',
          color: '#725D3B'
        }}>
          Memuat informasi museum...
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container-detail">
        <div className="page1">
          <div className="black-box">
            <div className='deskripsi-museum'>
              <p style={{
                fontWeight: "bold", 
                fontSize: isMobile ? "32px" : "48px",
                lineHeight: isMobile ? "1.2" : "1.1",
                marginBottom: isMobile ? "16px" : "12px"
              }}>
                {museum.nama || "Museum"}
              </p>
              <p style={{
                fontSize: isMobile ? "16px" : "20px",
                lineHeight: "1.5",
                marginBottom: isMobile ? "20px" : "16px"
              }}>
                {museum.deskripsi || "Deskripsi museum akan muncul di sini."}
              </p>
              <a 
                href="#daftar-koleksi" 
                className='button'
                onClick={scrollToCollections}
                style={{
                  padding: isMobile ? "12px 24px" : "8px 16px",
                  fontSize: isMobile ? "16px" : "14px"
                }}
              >
                {isMobile ? "Jelajahi Koleksi" : "Lihat Koleksi"}
              </a>
            </div>
          </div>
        </div>

        <div className='page2'>
          <div className='judul' id='daftar-koleksi'>
            <h1 style={{
              fontSize: isMobile ? "24px" : "32px",
              margin: 0,
              paddingBottom: "8px"
            }}>
              Daftar Koleksi
            </h1>
          </div>

          {/* Show actual collections if available */}
          {listKoleksi.length > 0 ? (
            <div className="daftar-koleksi">
              {listKoleksi.slice(0, 8).map((data, index) => (
                <div 
                  className='card-koleksi' 
                  key={index} 
                  style={{
                    backgroundImage: `url(${data.gambar})`,
                    display: 'flex',
                    alignItems: 'flex-end',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    // Add click handler if needed
                    console.log('Clicked collection:', data.nama)
                  }}
                >
                  <div className='nama-koleksi' style={{
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    color: '#FFFBD9',
                    padding: isMobile ? '12px' : '16px',
                    width: '100%',
                    borderRadius: '0 0 8px 8px'
                  }}>
                    <h3 style={{
                      margin: 0,
                      fontSize: isMobile ? '14px' : '16px',
                      fontWeight: 'bold'
                    }}>
                      {data.nama}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Fallback placeholder cards - 8 cards in 2 rows
            <div className="daftar-koleksi">
              {Array.from({length: 8}, (_, index) => (
                <div 
                  key={index + 1} 
                  className="card-koleksi"
                  style={{
                    background: `linear-gradient(135deg, 
                      ${index % 2 === 0 ? '#f5f5f5' : '#ffe6e6'}, 
                      ${index % 2 === 0 ? '#e0e0e0' : '#ffcccc'})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px dashed #ccc',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: '#666'
                  }}>
                    <div style={{
                      fontSize: isMobile ? '24px' : '32px',
                      marginBottom: '8px',
                      opacity: 0.7
                    }}>
                      🏛️
                    </div>
                    <p style={{
                      color: '#666',
                      fontSize: isMobile ? '12px' : '14px',
                      margin: 0,
                      fontWeight: 'bold'
                    }}>
                      Koleksi {index + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MuseumDetail;