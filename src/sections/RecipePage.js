import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CuisineSection from './CuisineSection';
import IngredientSection from './IngredientSection';
import CategorySection from './CategorySection';
import RecipeResultSection from './RecipeResultSection';

const RecipePage = () => {
  // State variables to store data
  const [cuisines, setCuisines] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [recipeResult, setRecipeResult] = useState('');


  // Fetch cuisines, ingredients, and categories from API
  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/recipes/cuisines', { headers: { Authorization: `Bearer ${token}` } });
        setCuisines(response.data.cuisines);
      } catch (error) {
        console.error('Error fetching cuisines:', error);
      }
    };

    const fetchIngredients = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/recipes/ingredients', { headers: { Authorization: `Bearer ${token}` } });
        setIngredients(response.data.ingredients);
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/recipes/category', { headers: { Authorization: `Bearer ${token}` } });
        setCategories(response.data.category);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCuisines();
    fetchIngredients();
    fetchCategories();
  }, []);

  // Function to handle form submission
  const handleSubmit = async () => {
    if (!selectedCuisine || selectedIngredients.length === 0 || !selectedCategory) {
      alert('Please make sure all required fields are selected.');
      return;
    }

    try {
      var post_data = {
        cuisine: selectedCuisine,
        ingredients: selectedIngredients.join(','),
        food_type: selectedCategory,
      }
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8000/food-gpt/generate', post_data, { headers: {'Content-Type': 'application/x-www-form-urlencoded', Authorization: `Bearer ${token}` } });
      setRecipeResult(response.data.recipe.text);
    } catch (error) {
      console.error('Error generating recipe:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="container-fluid">
          {/* Section 1: Select type of cuisine */}
          <CuisineSection
            cuisines={cuisines}
            selectedCuisine={selectedCuisine}
            setSelectedCuisine={setSelectedCuisine}
          />

          {/* Section 2: Select ingredients */}
          <IngredientSection
            ingredients={ingredients}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />

          {/* Section 3: Select category */}
          <CategorySection
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Section 4: Create your recipe */}
          <button className="btn btn-success btn-lg" onClick={handleSubmit}>
            Create Your Recipe
          </button>
        </div>
      </div>
      {/* Section 5: Recipe result */}
      <div className="container-fluid">
          <RecipeResultSection recipeResult={recipeResult} />
        </div>
    </div>
  );
};

export default RecipePage;
