import { useState } from "react";
import styled from "styled-components";
import WasherMap from "./components/WasherMap";
import List from "./components/List";

export default function Main() {
  const [map, setMap] = useState(null);
  const [search, setSearch] = useState(null);

  return (
    <StyledMain>
      <List map={map} search={search} />
      <WasherMap setMap={setMap} setSearch={setSearch} />
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
