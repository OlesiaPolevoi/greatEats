import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return "active";
    }
    return "";
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    searchYelp(term, location, sortBy);

    event.preventDefault();
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];

      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={handleSortByChange}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input
          placeholder="Mexican, pizza, korean, cheap dinner, Denny's"
          onChange={handleTermChange}
        />
        <input placeholder="Your city" onChange={handleLocationChange} />
      </div>
      <div className="SearchBar-submit">
        <a onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
