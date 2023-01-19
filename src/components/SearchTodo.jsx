import React, { useEffect, useState } from "react";

const SearchTodo = ({ searchTodos }) => {
  const [searchValue, setSearchValue] = useState("");
  const handlekSearch = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    searchTodos(searchValue);
  }, [searchValue]);
  return (
    <div className="search">
      <input
        onChange={handlekSearch}
        value={searchValue}
        type="text"
        placeholder="Search..."
      />
      <button>Search</button>
    </div>
  );
};

export { SearchTodo };
