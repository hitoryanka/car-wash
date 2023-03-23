import { useState } from "react";
import styled from "styled-components";
import Filters from "./Filters";
import Search from "./Search";

export default function List({}) {
  const [isSearchActive, setIsSearchActive] = useState(true);

  function handleFilters() {
    setIsSearchActive(!isSearchActive);
  }

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
  max-width: 40%;
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
  padding: 15px;
  position: relative;
  display: flex;
  gap: 10px;
`;
