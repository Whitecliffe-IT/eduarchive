import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = () => {
    onSearch(searchKeyword);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by keyword"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        className='bg-green-300 p-1 placeholder:text-gray-700'
      />
      <button onClick={handleSearch} className='bg-green-300 p-1 hover:bg-green-400 mx-4 rounded'>Search</button>
    </div>
  );
}

export default SearchBar;