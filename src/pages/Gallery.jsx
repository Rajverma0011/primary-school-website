import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // All school photos combined in one array
  const allSchoolPhotos = [
    {
      id: 1,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Fefb05eacf01b4bdaad05af3ec3a6c4e9?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 2,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F58556c622ec34048aa073781222d03d0?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 3,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F1d21f9df05e848439cee9859666e887d?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 4,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F5cdcc8e4688240aeabdc484cc1d414d1?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 5,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F61ec69b6e26543ce8e7f6db674f3d517?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 6,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Ff0dd86c20b4e4b638e107e03db9e9fc2?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 7,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F7818f51370174c5a9469875fb143b5d4?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 8,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F48d590e9fcb641229a36a5cebdc4a064?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 9,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Fff3f60e7802d4567808767a5455a08b9?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 10,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F2dd5ab5c245c439e8f781415a447782c?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 11,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F00294ec72944479397da553f1a809cde?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 12,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F20e8363911fd44dd8cafdd87ed9db753?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 13,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F4e2ace48953e4ecbbd5923da4b91a024?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 14,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Fd2e026b746b14799b9a0f500ca503414?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 15,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Ff8802f20cf404bdea00eba480f48051e?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 16,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Ff3c57a83ad794e6594abc9ca0967308b?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 17,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F2bd94b9e3ec8439a99f9ecce5817e6db?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    },
    {
      id: 18,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Faa4f03aed7e040a6bb13e3b231d03e02?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "R.K. Public School"
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="container">
          <h1>R.K. Public School Gallery</h1>
          <p>Capturing moments of growth, learning, and achievement at R.K. Public School</p>
          <div className="gallery-stats">
            <span className="stats-item">
              <strong>{allSchoolPhotos.length}</strong> Photos
            </span>
            <span className="stats-item">
              <strong>12+</strong> Years of Memories
            </span>
            <span className="stats-item">
              <strong>Education</strong> for Enlightenment
            </span>
          </div>
        </div>
      </div>
      
      <section className="unified-gallery">
        <div className="container">
          <h2 className="gallery-title">All Photos</h2>
          <div className="gallery-grid">
            {allSchoolPhotos.map((image) => (
              <div key={image.id} className="gallery-item" onClick={() => openLightbox(image)}>
                <img src={image.src} alt={image.alt} className="gallery-image" />
                <div className="gallery-overlay">
                  <div className="gallery-caption">{image.caption}</div>
                  <div className="view-icon">🔍</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-image" />
            <div className="lightbox-caption">{selectedImage.caption}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
