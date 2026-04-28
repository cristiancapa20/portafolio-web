import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Card({ title, img, enlaceSitio, description, tags, githubLink }) {
  return (
    <div
      className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
      data-aos="fade-up"
    >
      <a href={enlaceSitio} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={title} className="w-full h-48 object-cover" />
      </a>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {description && (
          <p className="text-gray-400 text-sm mb-3 flex-1">{description}</p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, i) => (
              <span key={i} className="px-2 py-1 bg-gray-700 text-yellow-400 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-4 mt-auto pt-2 border-t border-gray-700">
          {enlaceSitio && (
            <a
              href={enlaceSitio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <FaExternalLinkAlt size={12} /> Ver sitio
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={14} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
