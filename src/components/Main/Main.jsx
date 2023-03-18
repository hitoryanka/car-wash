import { useState } from "react";
import styled from "styled-components";
import Filters from "./Filters";
import WasherMap from "./WasherMap";

export default function Main() {
  const [map, setMap] = useState(null);
  return (
    <StyledMain>
      <List />
      <WasherMap setMap={setMap} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  margin-top: -5%;
  display: flex;
  width: 60%;
  z-index: 1;
  height: 800px; // make it auto
  border-radius: 40px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

function List({}) {
  const [isSearchActive, setIsSearchActive] = useState(true);

  function handleFilters() {
    setIsSearchActive(!isSearchActive);
  }

  // function handleBlurFilters({ target }) {
  //   if (target.id !== "filters") {
  //     setIsSearchActive(false);
  //   }
  // }

  return (
    <StyledList onClick={(e) => handleBlurFilters(e)}>
      <StyledRoundButtons>
        <StyledButton>
          <img src="src\imgs\main\clock.svg" alt="fastest" />
          <span style={{ color: "#4DD79E" }}>быстрее</span>
        </StyledButton>
        <StyledButton>
          <img src="src\imgs\main\map.svg" alt="closest" />
          <span style={{ color: "#99E6EB" }}>рядом</span>
        </StyledButton>
        <StyledButton>
          <img src="src\imgs\main\star.svg" alt="popular" />
          <span style={{ color: "#99E6EB" }}>популярно</span>
        </StyledButton>
      </StyledRoundButtons>
      <StyledSearchContainer>
        <Search />
        <img
          src="src\imgs\main\filter.svg"
          alt="filters"
          onClick={handleFilters}
        />
        {isSearchActive && <Filters id="filters" />}
      </StyledSearchContainer>
    </StyledList>
  );
}

const StyledList = styled.div`
  position: relative;
  max-width: 38%;
  width: fit-content;
  height: 100%;
  border-right: 1px solid #dde5e6;
`;

const StyledRoundButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;

  img {
    width: 4rem;
  }
`;

const StyledButton = styled.button`
  all: unset;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  span {
    font-size: 17px;
    font-weight: 400;
  }
`;

const StyledSearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px;
`;

function Search({ onFocus }) {
  const [searchText, setSearchText] = useState("");

  function handleChange(text) {
    setSearchText(text);
  }

  function handleSearh() {
    searchControl && searchControl.search("автомойка " + searchText);
  }

  return (
    <StyledSearch>
      <StyledInput
        onFocus={onFocus}
        type="text"
        id="suggest"
        value={searchText}
        onChange={({ target }) => handleChange(target.value)}
      />
      <button onClick={handleSearh}>
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

  width: 450px;
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
