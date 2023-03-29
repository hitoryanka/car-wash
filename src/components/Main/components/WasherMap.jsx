import { useState } from "react";
import styled from "styled-components";

export default function WasherMap({ setMap, setSearch, setSearchResults }) {
  const [isCreated, setIsCreated] = useState(false);

  if (!isCreated) {
    function init() {
      const newMap = new ymaps.Map("map", {
        controls: [],
        center: [47.214856289483166, 38.90894337271118],
        zoom: 15,
      });

      const searchControl = new ymaps.control.SearchControl({
        options: {
          provider: "yandex#search",
        },
      });
      newMap.controls.add(searchControl);
      searchControl.search("автомойки", { type: "biz" });
      searchControl.events.add("load", () => {
        setSearchResults(searchControl.getResultsArray());
      });
      setSearch(searchControl);
      setMap(newMap);
    }
    ymaps.ready(init);
    setIsCreated(!isCreated);
  }

  return (
    <StyledMapContainer>
      <StyledMap id="map"></StyledMap>
    </StyledMapContainer>
  );
}

const StyledMapContainer = styled.section`
  height: 100%;
  width: 100%;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
`;

const StyledMap = styled.div`
  height: 100%;
  width: 100%;

  .ymaps-2-1-79-controls__control_toolbar {
    display: none;
  }
`;
