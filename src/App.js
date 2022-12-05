import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: white;
  border: solid 1px #ccc;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;
const calendar = [
  {
    id: "0001",
    title: "calendar january",
  },
  {
    id: "0002",
    title: "calendar february",
  },
];

const emails = [
  {
    id: "0001",
    title: "davsh47@hotmail.com",
  },
  {
    id: "0002",
    title: "dashgta@gmail.com",
  },
];

const people = [
  {
    id: "0001",
    title: "davsh47",
  },
  {
    id: "0002",
    title: "dashgta",
  },
  {
    id: "0003",
    title: "Juan",
  },
  {
    id: "0004",
    title: "Nicolas",
  },
  {
    id: "0005",
    title: "Daniel",
  },
];

const App = () => {
  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  const handleClick = (e) => {
    const op = e.target.name;
    switch (op) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
        break;
      case "people":
        setData([...people]);
        setCurrentOption("people");

        break;
      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;
    }
  };

  function handleItemSelected(item) {
    setSelection(item);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleClick}
          name="all"
          style={{
            backgroundColor: currentOption === "all" ? "bisque" : "white",
          }}
        >
          All
        </Button>
        <Button
          onClick={handleClick}
          name="people"
          style={{
            backgroundColor: currentOption === "people" ? "bisque" : "white",
          }}
        >
          People
        </Button>
        <Button
          onClick={handleClick}
          name="calendar"
          style={{
            backgroundColor: currentOption === "calendar" ? "bisque" : "white",
          }}
        >
          Calendar
        </Button>
        <Button
          onClick={handleClick}
          name="emails"
          style={{
            backgroundColor: currentOption === "emails" ? "bisque" : "white",
          }}
        >
          Emails
        </Button>
      </div>

      {selection ? (
        <div>You Selected:{selection.title || selection.name}</div>
      ) : (
        ""
      )}
      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>
  );
};

export default App;
