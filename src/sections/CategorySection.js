import React from 'react';

const CategorySection = ({ categories, selectedCategory, setSelectedCategory }) => {
  const handleCategorySelect = (category) => {
    // if click on selected category, deselect it
    if (selectedCategory === category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div>
      <h2 className='text-center'>Select category</h2>
      <div className="btn-group d-flex flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-primary ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => handleCategorySelect(category)}
            disabled={selectedCategory && selectedCategory !== category}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
