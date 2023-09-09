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
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;