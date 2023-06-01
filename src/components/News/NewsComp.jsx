import React from 'react';

export default function NewsComp({ description, title, urlToImage, url, }) {
  return (
    <div className="bg-white mt-10 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <img src={urlToImage} alt={title} className="mb-4" />
      <p className="text-gray-700 text-xs sm:text-base mb-4">{description}</p>
      <a href={url} className="text-blue-500 hover:text-blue-700 font-semibold">
        See Details
      </a>
    </div>
  );
}
