import React from 'react';

const RecipeResultSection = ({ recipeResult }) => {
  return (
    <div>
      <h2 className='text-center'>Recipe result</h2>
      <p>{recipeResult}</p>
    </div>
  );
};

export default RecipeResultSection;
