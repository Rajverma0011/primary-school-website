import React, { useState } from 'react';
import './SchoolGallery.css';

const SchoolGallery = ({ images, title = "School Gallery" }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder school images - replace these with actual photos from Facebook
  const defaultImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "School Building Exterior",
      caption: "R.K. Public School Main Building"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Classroom Interior",
      caption: "Modern Smart Classrooms"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Students in Library",
      caption: "Students Learning Together"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Science Laboratory",
      caption: "Well-Equipped Science Lab"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Computer Lab",
      caption: "Computer Education Center"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1559713714-5-bb-9-ede-8-d-d-1-e-92-c-e-33-d-a-2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Sports Ground",
      caption: "School Sports Facilities"
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
