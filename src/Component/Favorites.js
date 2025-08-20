import React from 'react';

const Favorites = ({ favorites, setFavorites }) => {
  const removeFavorite = (index) => {
    const updated = [...favorites];
    updated.splice(index, 1);
    setFavorites(updated);
    alert("🗑️ Removed from Favorites.");
  };

  return (
    <div className="container py-5" id="favorites">
      <h2 className="text-center text-danger mb-4">❤️ Your Favorite Pick-Up Lines</h2>

      {favorites.length === 0 ? (
        <p className="text-center text-muted">No favorites yet. Add some from the Home page!</p>
      ) : (
        <ul className="list-group">
          {favorites.map((line, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {line}
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeFavorite(index)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
