import React, { useEffect, useState } from "react";
import axios from "axios";

const Notification = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = "pub_70773c8c8197c79420995703acc4c990e283a";
      const endpoint = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=government%20exam&country=in&language=en&category=education `;

      try {
        const response = await axios.get(endpoint);
        setNews(response.data.results);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch news");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Educational Notifications</h2>
      {news.length === 0 && <p>No news found</p>}
      <ul className="space-y-4">
        {news.map((item, index) => (
          <li key={index} className="p-4 border rounded-md shadow-sm">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 block"
            >
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
