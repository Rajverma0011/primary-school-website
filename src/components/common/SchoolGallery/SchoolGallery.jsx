import React, { useState } from 'react';
import './SchoolGallery.css';

const SchoolGallery = ({ images, title = "School Gallery" }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Real school images from R.K. Public School
  const defaultImages = [
    {
      id: 1,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Fefb05eacf01b4bdaad05af3ec3a6c4e9?format=webp&width=800",
      alt: "R.K. Public School Admission",
      caption: "R.K. Public School - Quality Education"
    },
    {
      id: 2,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F58556c622ec34048aa073781222d03d0?format=webp&width=800",
      alt: "Happy Students",
      caption: "Our Happy Students with Teacher"
    },
    {
      id: 3,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F7818f51370174c5a9469875fb143b5d4?format=webp&width=800",
      alt: "Cultural Program",
      caption: "Republic Day Cultural Program"
    },
    {
      id: 4,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F5cdcc8e4688240aeabdc484cc1d414d1?format=webp&width=800",
      alt: "Computer Education",
      caption: "Computer Lab Session"
    },
    {
      id: 5,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F61ec69b6e26543ce8e7f6db674f3d517?format=webp&width=800",
      alt: "Morning Assembly",
      caption: "Daily Morning Assembly"
    },
    {
      id: 6,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Fff3f60e7802d4567808767a5455a08b9?format=webp&width=800",
      alt: "Cultural Dance",
      caption: "Students Performing Cultural Dance"
    }
  ];

  const galleryImages = images || defaultImages;

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="school-gallery">
      <div className="container">
        <h2 className="gallery-title">{title}</h2>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
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
    </section>
  );
};

export default SchoolGallery;
