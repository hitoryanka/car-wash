import { useState } from "react";
import styled from "styled-components";
import SpecificFilter from "./SpecificFilter";

export default function Filters() {
  return (
    <StyledFilters>
      <StyledFiltersContainer>
        <SpecificFilter
          key={0}
          title={"Тип авто"}
          fields={["легковое", "грузовое"]}
        />
        <SpecificFilter
          key={1}
          title={"Тип автомойки"}
          fields={["классическая", "самообслуживание"]}
        />
        <SpecificFilter
          key={2}
          title={"Вид мойки"}
          fields={["ручная", "портальная", "туннельная", "бесконтактная"]}
        />
        <input type="submit" value="ПОДТВЕРДИТЬ" />
      </StyledFiltersContainer>
    </StyledFilters>
  );
}

const StyledFiltersContainer = styled.div`
  background-color: #fff;
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  border-bottom: 2px solid rgb(231, 237, 237);

  hr {
    /* overflow-x: hidden; */
    width: 100%;
    /* margin-left: -5px; */
  }
`;

const StyledFilters = styled.section`
  position: absolute;
  z-index: 1;
  width: 100%;
  margin-top: 30px;
  margin-left: -15px;
  display: flex;
  flex-direction: column;

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
