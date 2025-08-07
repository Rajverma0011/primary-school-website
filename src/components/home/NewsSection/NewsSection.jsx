import React, { useEffect, useState } from 'react';
import './NewsSection.css';
import axios from 'axios';

const NewsSection = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback news data for demo purposes
  const fallbackNews = [
    {
      id: 1,
      title: "Admission Process for Academic Year 2024-25",
      content: "Online applications are now open for the new academic year. Visit our admissions office or apply online through our website.",
      date: "December 15, 2023",
      category: "Admissions"
    },
    {
      id: 2,
      title: "Annual Sports Day Celebration",
      content: "Join us for our grand annual sports day featuring athletics, games, and cultural performances by our talented students.",
      date: "December 10, 2023",
      category: "Events"
    },
    {
      id: 3,
      title: "Science Exhibition 2024",
      content: "Students showcase innovative projects and experiments in our annual science exhibition. Open to all parents and visitors.",
      date: "December 5, 2023",
      category: "Academic"
    },
    {
      id: 4,
      title: "Winter Break Schedule",
      content: "School will be closed for winter break from December 25th to January 8th. Classes resume on January 9th, 2024.",
      date: "December 1, 2023",
      category: "Notice"
    }
  ];

  useEffect(() => {
    // Try to fetch news data from backend
    axios.get('http://127.0.0.1:8000/api/news/')
      .then((res) => {
        setNewsList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Backend not available, using fallback news data');
        // Use fallback data when backend is not available
        setNewsList(fallbackNews);
        setLoading(false);
      });
  }, []);

  return (
    <section className="news-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest News & Announcements</h2>
          <p className="section-subtitle">Stay updated with the latest happenings at R.K. Public School</p>
        </div>

        <div className="news-grid">
          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading latest updates...</p>
            </div>
          ) : (
            newsList.map((item) => (
              <article key={item.id} className="news-card">
                <div className="news-category">{item.category || 'News'}</div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-content">{item.content}</p>
                <div className="news-footer">
                  <span className="news-date">{item.date || 'Recent'}</span>
                  <a href="#" className="read-more-link">
                    Read More
                    <span className="arrow">→</span>
                  </a>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="news-actions">
          <a href="/news" className="view-all-btn">View All News</a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
