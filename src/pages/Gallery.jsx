import React from 'react';
import SchoolGallery from '../components/common/SchoolGallery/SchoolGallery.jsx';
import './Gallery.css';

const Gallery = () => {
  // Comprehensive gallery images - replace these with actual photos from Facebook
  const schoolPhotos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "School Building Exterior",
      caption: "R.K. Public School Main Building - Sikandarpur, Basti"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Smart Classroom",
      caption: "Interactive Smart Classrooms with Modern Technology"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Science Laboratory",
      caption: "Well-Equipped Science Laboratory for Hands-on Learning"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Computer Lab",
      caption: "Computer Education Center with Latest Technology"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Students Learning",
      caption: "Students Engaged in Collaborative Learning"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1559713714-5bb9ede8dd1e92ce33da2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "School Sports Ground",
      caption: "Spacious Sports Ground for Cricket and Football"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "School Assembly",
      caption: "Morning Assembly - Building Character and Discipline"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "School Library",
      caption: "Reading Corner - Fostering Love for Books"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cultural Event",
      caption: "Annual Cultural Program - Showcasing Student Talents"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1581726690015-c9861c200db8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Teachers Training",
      caption: "Faculty Development and Training Programs"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1544531585-bb8de94bb8ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Award Ceremony",
      caption: "Academic Excellence Awards - Recognizing Achievements"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "School Transport",
      caption: "Safe and Reliable School Transport Service"
    }
  ];

  const eventsPhotos = [
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Independence Day",
      caption: "Independence Day Celebration 2024"
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Science Exhibition",
      caption: "Annual Science Exhibition - Student Projects"
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1517971071642-c2b809b3dea7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Sports Day",
      caption: "Annual Sports Day - Promoting Physical Fitness"
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1533749047139-189de3cf06d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Parent Teacher Meeting",
      caption: "Parent-Teacher Interactions for Student Progress"
    }
  ];

  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="container">
          <h1>School Gallery</h1>
          <p>Capturing moments of growth, learning, and achievement at R.K. Public School</p>
        </div>
      </div>
      
      <div className="photo-instructions">
        <div className="container">
          <div className="instruction-card">
            <h3>📸 Real School Photos Coming Soon!</h3>
            <p>
              We're currently updating our gallery with authentic photos from our Facebook page. 
              These placeholder images showcase the type of activities and facilities at R.K. Public School.
            </p>
            <a 
              href="https://m.facebook.com/profile.php?id=100064106820772" 
              target="_blank" 
              rel="noopener noreferrer"
              className="facebook-link"
            >
              Visit Our Facebook Page 📘
            </a>
          </div>
        </div>
      </div>

      <SchoolGallery images={schoolPhotos} title="Campus & Facilities" />
      <SchoolGallery images={eventsPhotos} title="Events & Activities" />
    </div>
  );
};

export default Gallery;
