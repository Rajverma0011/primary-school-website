import React from 'react';
import SchoolGallery from '../components/common/SchoolGallery/SchoolGallery.jsx';
import './Gallery.css';

const Gallery = () => {
  // Real school photos from R.K. Public School - High Quality
  const schoolPhotos = [
    {
      id: 1,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Fefb05eacf01b4bdaad05af3ec3a6c4e9?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "School Life"
    },
    {
      id: 2,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F58556c622ec34048aa073781222d03d0?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "School Life"
    },
    {
      id: 3,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F1d21f9df05e848439cee9859666e887d?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "School Life"
    },
    {
      id: 4,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F5cdcc8e4688240aeabdc484cc1d414d1?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "School Life"
    },
    {
      id: 5,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F61ec69b6e26543ce8e7f6db674f3d517?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "School Life"
    },
    {
      id: 6,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Ff0dd86c20b4e4b638e107e03db9e9fc2?format=webp&width=1600&quality=90",
      alt: "R.K. Public School Photo",
      caption: "School Life"
    }
  ];

  const eventsPhotos = [
    {
      id: 7,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F7818f51370174c5a9469875fb143b5d4?format=webp&width=1600&quality=90",
      alt: "Republic Day Celebration",
      caption: "Republic Day Celebration with Cultural Program"
    },
    {
      id: 8,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F48d590e9fcb641229a36a5cebdc4a064?format=webp&width=1600&quality=90",
      alt: "Independence Day March",
      caption: "Independence Day Parade by Students"
    },
    {
      id: 9,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Fff3f60e7802d4567808767a5455a08b9?format=webp&width=1600&quality=90",
      alt: "Cultural Performance",
      caption: "Students Performing Cultural Dance"
    },
    {
      id: 10,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F2dd5ab5c245c439e8f781415a447782c?format=webp&width=1600&quality=90",
      alt: "Stage Performance",
      caption: "Annual Cultural Program Stage Performance"
    },
    {
      id: 11,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F00294ec72944479397da553f1a809cde?format=webp&width=1600&quality=90",
      alt: "Award Distribution",
      caption: "Award Distribution Ceremony"
    },
    {
      id: 12,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F20e8363911fd44dd8cafdd87ed9db753?format=webp&width=1600&quality=90",
      alt: "Group Achievement Photo",
      caption: "Students and Faculty Achievement Celebration"
    },
    {
      id: 13,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F4e2ace48953e4ecbbd5923da4b91a024?format=webp&width=1600&quality=90",
      alt: "Traditional Costume Performance",
      caption: "Student in Traditional Costume Performance"
    },
    {
      id: 14,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Fd2e026b746b14799b9a0f500ca503414?format=webp&width=1600&quality=90",
      alt: "Drama Performance",
      caption: "Students Performing Drama on Stage"
    },
    {
      id: 15,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Ff8802f20cf404bdea00eba480f48051e?format=webp&width=1600&quality=90",
      alt: "Krishna Costume Performance",
      caption: "Cultural Performance - Krishna Theme"
    },
    {
      id: 16,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Ff3c57a83ad794e6594abc9ca0967308b?format=webp&width=1600&quality=90",
      alt: "Annual Function Group Photo",
      caption: "Annual Function - Students and Faculty Group Photo"
    },
    {
      id: 17,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F2bd94b9e3ec8439a99f9ecce5817e6db?format=webp&width=1600&quality=90",
      alt: "Character Play Performance",
      caption: "Students in Character Play Performance"
    },
    {
      id: 18,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Faa4f03aed7e040a6bb13e3b231d03e02?format=webp&width=1600&quality=90",
      alt: "Students Walking Together",
      caption: "Students Walking Together - Unity and Friendship"
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
      

      <SchoolGallery images={schoolPhotos} title="Campus & Facilities" />
      <SchoolGallery images={eventsPhotos} title="Events & Activities" />
    </div>
  );
};

export default Gallery;
