import React from 'react';

const IngredientSection = ({ ingredients, selectedIngredients, setSelectedIngredients }) => {
  const handleIngredientSelect = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient));
    } else if (selectedIngredients.length < 5) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
      // if seleted selectedIngredients is equal of greater than 5 and clicked ingredient is in selectedIngredients, deselect it
    } else if (selectedIngredients.length >= 5 && selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient));
    } else {
      alert('You can only select up to 5 ingredients.');
    }

  };

  return (
    <div>
      <h2 className='text-center'>Select 5 ingredients</h2>
      <div className="btn-group d-flex flex-wrap">
        {ingredients.map((ingredient) => (
          <button
            key={ingredient}
            className={`btn btn-primary ${
              selectedIngredients.includes(ingredient) ? 'active' : ''
            }`}
            onClick={() => handleIngredientSelect(ingredient)}
            disabled={
              selectedIngredients.length === 5 && !selectedIngredients.includes(ingredient)
            }

          >
            {ingredient}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IngredientSection;
