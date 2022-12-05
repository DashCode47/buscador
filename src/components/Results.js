import React, { useState, useMemo, useEffect } from "react";
import MarkedItem from "./MarkedItem";
import styled from "styled-components";

const Results = ({ items, onItemSelected, query, onResultsCalculated }) => {
  const [results, setResults] = useState([]);
  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);

  const ResultsContainer = styled.div`
    position: absolute;
    width: 400px;
    background: white;
    border: solid 1px #222;
    border-top: solid 1px transparent;
    margin-top: -3px;
    box-sizing: border-box;
    border-radius: 0 0 5px 5px;
  `;
  useEffect(() => {
    onResultsCalculated(results);
  }, [results]);

  function findMatch(items, query) {
    const res = items.filter((i) => {
      return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
    });

    setResults(res);
    return res;
  }

  return (
    <div style={{ width: 450, borderStyle: "solid", borderWidth: 1 }}>
      {query !== ""
        ? filteredItems.map((item) => (
            <MarkedItem
              key={item.id}
              item={item}
              onClick={onItemSelected}
              query={query}
            />
          ))
        : ""}
    </div>
  );
};

export default Results;
