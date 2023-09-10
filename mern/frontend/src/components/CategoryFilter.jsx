import React, { useState } from 'react';

function CategoryFilter({ categories, onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onSelectCategory(e.target.value);
  };

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange} className='bg-green-300 p-1'>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;