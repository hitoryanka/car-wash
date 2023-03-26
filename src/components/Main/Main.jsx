import { useState } from "react";
import styled from "styled-components";
import WasherMap from "./components/WasherMap";
import List from "./components/List";

export default function Main() {
  const [map, setMap] = useState(null);
  const [search, setSearch] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <StyledMain>
      <List
        map={map}
        search={search}
        items={searchResults}
        setSearch={setSearch}
      />
      <WasherMap
        setMap={setMap}
        setSearchResults={setSearchResults}
        setSearch={setSearch}
      />
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
