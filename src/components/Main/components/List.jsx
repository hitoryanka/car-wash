import { useState } from "react";
import styled from "styled-components";
import Filters from "./Filters";
import Search from "./Search";
import ListItem from "./ListItem";

export default function List({ map, search, items, setSearchResults }) {
  const [isFiltersActive, setIsFiltersActive] = useState(true);

  function handleFilters() {
    setIsFiltersActive(!isFiltersActive);
  }

  return (
    <StyledList>
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
        <Search search={search} />
        <img
          src="src\imgs\main\filter.svg"
          alt="filters"
          onClick={handleFilters}
        />
        {isFiltersActive && <Filters id="filters" />}
      </StyledSearchContainer>
      <StyledItemsList>
        {items.map(({ properties }) => {
          return (
            <ListItem
              key={properties.get("id")}
              name={properties.get("name")}
              description={properties.get("description")}
              metaData={properties.get("companyMetaData")}
              rating={properties.get("rating").score}
              workingStatus={properties.get("workingTime")}
            />
          );
        })}
      </StyledItemsList>
    </StyledList>
  );
}

const StyledList = styled.div`
  position: relative;
  max-width: 40%;
  height: 100%;
  border-right: 1px solid #dde5e6;
`;

const StyledRoundButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;

  img {
    cursor: pointer;
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

  img {
    cursor: pointer;
  }
`;

const StyledItemsList = styled.div`
  height: 600px;
  overflow-y: scroll;
`;
