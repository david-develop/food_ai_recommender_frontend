import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeDetail from "../components/RecipeDetail";

const MyRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from the API endpoint
    const fetchRecipes = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://localhost:8000/recipes/my-recipes", { headers: { Authorization: `Bearer ${token}` } });
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">My Recipes</h1>
      <div className="row align-items-center justify-content-around">
        {recipes.map((recipe) => (
          <RecipeDetail key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default MyRecipesPage;