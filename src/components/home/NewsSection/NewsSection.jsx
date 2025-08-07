import React, { useEffect, useState } from 'react';
import './NewsSection.css';
import axios from 'axios';

const NewsSection = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    // Fetch news data from Django backend
    axios.get('http://127.0.0.1:8000/api/news/')
      .then((res) => {
        setNewsList(res.data);
      })
      .catch((err) => {
        console.error('Error fetching news:', err);
      });
  }, []);

  return (
    <div className="news-section">
      <h2>Latest News & Announcements</h2>
      <div className="news-list">
        {newsList.length > 0 ? (
          newsList.map((item) => (
            <div key={item.id} className="news-item">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
