import React from 'react';
import "../../../style/detail.css"
import { data, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GalleryCard from '../../../components/gallery-card';

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
      <div className="container-detail" >
        <div 
          className="page1"
          style={{
            backgroundImage: `url(${getBackgroundImage(museum)})`,
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

          {(
            <div className="daftar-koleksi">
             {
              listKoleksi.map((data, index)=>{
                return <GalleryCard data={data} key={index}/>
              })
             }
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default MuseumDetail;