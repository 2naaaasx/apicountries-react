import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './assets/ImageDetails.css'

const ImageDetails = () => {
  const { id } = useParams(); 
  const [imageDetails, setImageDetails] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImageDetails = async () => {
      const API_URL = `https://pixabay.com/api/?key=47811345-8bb57efc2522f9e8ac1d46d0a&id=${id}`; 

      try {
        const response = await axios.get(API_URL);
        if (response.data.hits.length > 0) {
          setImageDetails(response.data.hits[0]); 
        } else {
          console.error("No details found for the provided ID.");
        }
      } catch (error) {
        console.error("Error fetching image details:", error);
      }
    };

    fetchImageDetails();
  }, [id]);


  if (!imageDetails) return <p>Loading...</p>;

  return (
    <div className="details-page" style={{ padding: "20px" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Retour
      </button>
      <h1>{imageDetails.tags}</h1>
      <img
        src={imageDetails.largeImageURL}
        alt={imageDetails.tags}
        style={{ maxWidth: "100%", margin: "20px 0" }}
      />
      <p><strong>Tags:</strong> {imageDetails.tags}</p>
      <p><strong>Auteur:</strong> {imageDetails.user}</p>
      
      <p><strong>Dimensions:</strong> {imageDetails.imageWidth} x {imageDetails.imageHeight}</p>
      <p><strong>Vues:</strong> {imageDetails.views}</p>
      <p>
  
  <p>
  <p><strong>Téléchargements:</strong> {imageDetails.downloads}</p>
  <button
    onClick={() => window.open(imageDetails.pageURL, "_blank")}
    style={{
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
    }}
  >
    Open URL
  </button>
</p>

</p>

      
      
    </div>
  );
};

export default ImageDetails;
