import { useState } from "react";
import styled from "styled-components";

export default function Filters() {
  return (
    <StyledFilters>
      <StyledFiltersContaier>
        <SpecificFilter title={"Тип авто"} fields={["легковое", "грузовое"]} />
        <SpecificFilter
          title={"Тип автомойки"}
          fields={["классическая", "самообслуживание"]}
        />
        <SpecificFilter
          title={"Вид мойки"}
          fields={["ручная", "портальная", "туннельная", "бесконтактная"]}
        />
        <input type="submit" value="ПОДТВЕРДИТЬ" />
      </StyledFiltersContaier>
    </StyledFilters>
  );
}

const StyledFilters = styled.section`
  position: absolute;
  z-index: 1;
  margin-left: -4%;
  margin-top: 7%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dde5e6;
  padding-bottom: 10px;

  img {
    cursor: pointer;
  }

  input[type="submit"] {
    content: "ПОДТВЕРДИТЬ";
    all: unset;
    background-color: #00477a;
    font-weight: 300;
    color: #fff;
    width: fit-content;
    padding: 9px 12px;
    border-radius: 25px;
    font-size: 18px;
    margin-top: 30px;
    align-self: center;
  }
`;

function Search({ searchControl }) {
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

const StyledFiltersContaier = styled.div`
  display: flex;
  flex-direction: column;
`;

function SpecificFilter({ title, fields }) {
  return (
    <StyledSpecificFilter>
      {/* filters */}
      <StyledFiltercontainer>
        {/* title */}
        <h3>{title}</h3>
        <StyledCheckboxContainer>
          {fields.map((field) => {
            return (
              <StyledField>
                <input type="checkbox" name={field} />
                <label htmlFor={field}>{field}</label>
              </StyledField>
            );
          })}
        </StyledCheckboxContainer>
      </StyledFiltercontainer>
    </StyledSpecificFilter>
  );
}

const StyledSpecificFilter = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyledFiltercontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3,
  label {
    font-weight: 400;
    color: #00477a;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
  }
`;

const StyledCheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10px;
`;

const StyledField = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    appearance: none;
    border: 3px solid #e7eded;
    width: 25px;
    height: 25px;
    border-radius: 5px;
  }

  input[type="checkbox"]:checked {
    background: url(src/imgs/main/checkbox.png) 3px center no-repeat;
    background-color: #99e6eb;
    border-color: #99e6eb;
  }
`;
