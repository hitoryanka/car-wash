import { useState } from "react";
import styled from "styled-components";

export default function Search({ search }) {
  const [searchText, setSearchText] = useState("");

  function handleChange(text) {
    setSearchText(text);
  }

  function handleSearch() {
    search.search(searchText);
  }

  return (
    <StyledSearch>
      <StyledInput
        type="text"
        id="suggest"
        value={searchText}
        onChange={({ target }) => handleChange(target.value)}
      />
      <button onClick={handleSearch}>
        <img src="src\imgs\main\search.svg" alt="search" />
      </button>
    </StyledSearch>
  );
}

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;

  width: 400px;
  height: 39px;
  background-color: #e7eded;

  button {
    all: unset;
    padding-right: 15px;
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  all: unset;
  padding-left: 15px;
  font-weight: 400;
  flex-grow: 1;
`;
