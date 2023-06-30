import React from "react";

const RecipeDetail = ({ recipe }) => {
  return (
    <div className="card" style={{width: 50 + "rem"}}>
      <h2 className='text-center'>{recipe.recipe_title}</h2>
      <p>{recipe.text}</p>
    </div>
  );
};

export default RecipeDetail;