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

  // cek apakah layar mobile
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

  // smooth scroll
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

  // background image
  const getBackgroundImage = (museum) => {
    // Jika ada field background langsung, gunakan itu (hapus /public/)
    if (museum.background) {
      return museum.background.replace('/public/', '/')
    }
    
    // nama museum sesuai json
    if (museum.nama) {
      const kebabCase = museum.nama
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
      
      return `/images/${kebabCase}/${kebabCase}-tampak-depan.svg`
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
          color: '#725D3B',
          fontWeight: 'bold'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '4px solid #725D3B',
              borderTop: '4px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            Memuat informasi museum...
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container-detail">
        <div 
          className="page1"
          style={{
            backgroundImage: `url(${getBackgroundImage(museum)})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: isMobile ? 'scroll' : 'fixed'
          }}
        >
          <div className="black-box">
            <div className='deskripsi-museum'>
              <p style={{
                fontWeight: "bold", 
                fontSize: isMobile ? "32px" : "48px",
                lineHeight: isMobile ? "1.2" : "1.1",
                marginBottom: isMobile ? "16px" : "12px",
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}>
                {museum.nama || "Museum"}
              </p>
              <p style={{
                fontSize: isMobile ? "16px" : "20px",
                lineHeight: "1.5",
                marginBottom: isMobile ? "20px" : "16px",
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}>
                {museum.deskripsi || "Deskripsi museum akan muncul di sini."}
              </p>
              <a 
                href="#daftar-koleksi" 
                className='button'
                onClick={scrollToCollections}
                style={{
                  padding: isMobile ? "12px 24px" : "12px 20px",
                  fontSize: isMobile ? "16px" : "16px",
                  display: 'inline-block',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
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
              paddingBottom: "8px",
              fontWeight: 'bold'
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
                    backgroundImage: data.gambar ? `url(${data.gambar.replace('/public/', '/')})` : 'none',
                    backgroundColor: !data.gambar ? '#f5f5f5' : 'transparent',
                    display: 'flex',
                    alignItems: 'flex-end',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onClick={() => {
                    console.log('Clicked collection:', data.nama)
                  }}
                >
                  {/* Overlay for better text readability */}
                  <div className='card-overlay'></div>
                  
                  {/* Placeholder icon if no image */}
                  {!data.gambar && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '48px',
                      opacity: 0.5,
                      zIndex: 1
                    }}>
                      🏛️
                    </div>
                  )}
                  
                  <div className='nama-koleksi' style={{
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                    color: '#FFFBD9',
                    padding: isMobile ? '12px' : '16px',
                    width: '100%',
                    borderRadius: '0 0 8px 8px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <h3 style={{
                      margin: 0,
                      fontSize: isMobile ? '14px' : '16px',
                      fontWeight: 'bold',
                      lineHeight: '1.3'
                    }}>
                      {data.nama}
                    </h3>
                    {data.deskripsi && data.deskripsi !== "-" && (
                      <p style={{
                        margin: '4px 0 0 0',
                        fontSize: isMobile ? '11px' : '12px',
                        opacity: 0.9,
                        lineHeight: '1.3',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {data.deskripsi.length > 80 
                          ? data.deskripsi.substring(0, 80) + '...' 
                          : data.deskripsi
                        }
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Fallback placeholder cards - 8 cards
            <div className="daftar-koleksi">
              {Array.from({length: 8}, (_, index) => (
                <div 
                  key={index + 1} 
                  className="card-koleksi placeholder-card"
                  style={{
                    background: `linear-gradient(135deg, 
                      ${index % 4 === 0 ? '#f8f9fa' : 
                        index % 4 === 1 ? '#e9ecef' : 
                        index % 4 === 2 ? '#dee2e6' : '#ced4da'}, 
                      ${index % 4 === 0 ? '#e9ecef' : 
                        index % 4 === 1 ? '#dee2e6' : 
                        index % 4 === 2 ? '#ced4da' : '#adb5bd'})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px dashed #adb5bd',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    textAlign: 'center',
                    color: '#6c757d'
                  }}>
                    <div style={{
                      fontSize: isMobile ? '32px' : '40px',
                      marginBottom: '8px',
                      opacity: 0.7
                    }}>
                      🏛️
                    </div>
                    <p style={{
                      fontSize: isMobile ? '12px' : '14px',
                      margin: 0,
                      fontWeight: 'bold'
                    }}>
                      Koleksi {index + 1}
                    </p>
                    <p style={{
                      fontSize: isMobile ? '10px' : '12px',
                      margin: '4px 0 0 0',
                      opacity: 0.7
                    }}>
                      Segera hadir
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Show more button if there are more than 8 collections */}
          {listKoleksi.length > 8 && (
            <div style={{
              textAlign: 'center',
              marginTop: '32px'
            }}>
              <button 
                className="button"
                style={{
                  backgroundColor: '#725D3B',
                  color: '#FFFBD9',
                  border: 'none',
                  padding: '12px 24px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => {
                  // Add logic to show more collections
                  console.log('Show more collections')
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#847253'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#725D3B'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                Lihat Koleksi Lainnya ({listKoleksi.length - 8})
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MuseumDetail;