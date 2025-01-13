import React, { useEffect, useState } from 'react';

const PlaceReviews = () => {
  const [reviews, setReviews] = useState([]); // Inicializa como array vazio
  const [error, setError] = useState(null);

  const API_URL = 'https://maps.googleapis.com/maps/api/place/details/json';
  const PLACE_ID = 'ChIJB3iO-TUTWpMRaBPKW2d45P4';
  const API_KEY = 'AIzaSyDzCO-QuQD1zwW4H0hYfge-XbjsrOIE7Zo';

  const fetchReviews = async () => {
    try {
      
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJB3iO-TUTWpMRaBPKW2d45P4&fields=reviews&key=${API_KEY}`, {
          method: 'GET'
        }
      )
      const data = await response.json();
      this.setState({total: data.result})

      /*if (!response.ok) {
        throw new Error('Erro ao buscar os dados da API.');
      }*/
 /*      const data = await response.json();
      /*if (data.result /*&& data.result.reviews) {
        setReviews(data.result); // Atualiza o estado com as avaliações
      //} */
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Google Maps Reviews</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review}</strong>: {review}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceReviews;
