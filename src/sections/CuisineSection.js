import React from 'react';

const CuisineSection = ({ cuisines, selectedCuisine, setSelectedCuisine }) => {
  const handleCuisineSelect = (cuisine) => {
    if (selectedCuisine === cuisine) {
      setSelectedCuisine('');
    } else {
    setSelectedCuisine(cuisine);
    }
  };

  return (
    <div>
      <h2 className='text-center'>Select type of cuisine</h2>
      <div className="btn-group d-flex flex-wrap">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            className={`btn btn-primary ${selectedCuisine === cuisine ? 'active' : ''}`}
            onClick={() => handleCuisineSelect(cuisine)}
            disabled={selectedCuisine && selectedCuisine !== cuisine}
          >
            {cuisine}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CuisineSection;
