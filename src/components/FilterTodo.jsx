import React, { useState } from "react";

const FilterTodo = () => {
  const [active, setActive] = useState("all");
  const handleClick = (filterStatus) => {
    setActive(filterStatus);
    console.log(filterStatus);
  };
  return (
    <div className="filter-component">
      <button
        onClick={() => handleClick("all")}
        className={`filter_btn ${active === "all" ? "active" : ""}`}
      >
        All
      </button>
      <button
        onClick={() => handleClick("completed")}
        className={`filter_btn ${active === "completed" ? "active" : ""}`}
      >
        Completed
      </button>
      <button
        onClick={() => handleClick("not_completed")}
        className={`filter_btn ${active === "not_completed" ? "active" : ""}`}
      >
        Not Completed
      </button>
    </div>
  );
};

export { FilterTodo };
