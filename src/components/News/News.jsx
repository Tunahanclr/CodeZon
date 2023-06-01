import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsComp from "./NewsComp";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const key = "43460becebbb49b0a70d9bd3abefc8cd";
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`
        );
        console.log(response);
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    getNews();
  }, []);

  return (
    <div className="bg-gray-300 ">
      <div className="max-w-2xl  mx-auto  p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Latest News</h1>
      {news.map((article, index) => (
        <NewsComp key={index} title={article.title}
        description={article.description}
        url={article.url}
        urlToImage={article.urlToImage} />
      ))}
    </div>
    </div>
  );
}
