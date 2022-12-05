import React, { useState } from "react";
import Results from "./Results";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = ({ items, onItemSelected }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const SearchBarContainer = styled.div`
    position: relative;
    width: 400px;
    margin: 0 auto;
  `;

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleResults = (items) => {
    setResults(items);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={require("../assets/google.png")}
        style={{ width: 200, marginTop: 150 }}
      />
      {results && <div>{results.length} results</div>}
      <div
        style={{
          display: "flex",
          borderStyle: "solid",
          borderWidth: 2,
          borderRadius: 25,
          padding: 6,
          width: 500,
        }}
      >
        <BiSearchAlt size={24} color="black" />
        <input
          type={"text"}
          value={query}
          onChange={handleChange}
          style={{ borderStyle: "none", width: 460 }}
        />
      </div>

      <Results
        items={items}
        onItemSelected={onItemSelected}
        query={query}
        onResultsCalculated={handleResults}
      />
    </div>
  );
};

export default SearchBar;
