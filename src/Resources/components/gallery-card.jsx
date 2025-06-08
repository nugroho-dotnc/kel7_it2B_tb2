import "../style/component.css"
const GalleryCard = ({data}) => {
    return <>
        <div 
                  className='card-koleksi' 
                  style={{
                    backgroundImage: data.gambar ? `url(${data.gambar.replace('/public/', '/')})` : 'none',
                    backgroundColor: !data.gambar ? '#f5f5f5' : 'transparent',
                    display: 'flex',
                    alignItems: 'flex-end',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    console.log('Clicked collection:', data.nama)
                  }}>
                  {/* Overlay for better text readability */}
                  <div className='card-overlay'></div>
                  
                  {/* Placeholder icon if no image */}
                  {!data.gambar && (
                    <div style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '48px',
                      opacity: 0.5,
                    }}>
                      🏛️
                    </div>
                  )}
                  
                  <div className='nama-koleksi' style={{
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                    color: '#FFFBD9',
                    padding: '12px',
                    width: '100%',
                    borderRadius: '0 0 8px 8px',
                  }}>
                    <h3 style={{
                      margin: 0,
                      fontWeight: 'bold',
                      lineHeight: '1.3'
                    }}>
                      {data.nama}
                    </h3>
                     <p>
                      {data.deskripsi}
                     </p>
                  </div>
                </div>
    </>
}
export default GalleryCard;