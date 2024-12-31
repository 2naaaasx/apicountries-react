import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './assets/MainPage.css'; // Ensure you have this CSS file for external styling

const MainPage = () => {
  const [query, setQuery] = useState(""); 
  const [images, setImages] = useState([]); 
  const navigate = useNavigate(); 

  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Veuillez entrer un terme de recherche.");
      return;
    }

    const API_URL = `https://pixabay.com/api/?key=47811345-8bb57efc2522f9e8ac1d46d0a&q=${encodeURIComponent(query)}&image_type=photo`;

    try {
      const response = await axios.get(API_URL);
      setImages(response.data.hits); 
    } catch (error) {
      console.error("Erreur lors de la recherche des images :", error);
    }
  };

  return (
    <div>
      <h1>Galerie Des images</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher des images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Rechercher</button>
      </div>

      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="image-card">
            <img
              src={image.previewURL}
              alt={image.tags}
              className="image"
            />
            <h4>{image.tags}</h4>
            <p>{image.imageWidth} x {image.imageHeight}</p>
            <button onClick={() => navigate(`/details/${image.id}`)}>Afficher Détails</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
