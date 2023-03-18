import { useState } from "react";
import styled from "styled-components";

export default function WasherMap({ setMap }) {
  const [isCreated, setIsCreated] = useState(false);

  if (!isCreated) {
    function init() {
      const newMap = new ymaps.Map("map", {
        controls: ["searchControl"],
        center: [47.214856289483166, 38.90894337271118],
        zoom: 13,
      })();

      setMap(newMap);

      // map.controls.remove("geolocationControl"); // удаляем геолокацию
      // map.controls.remove("searchControl"); // удаляем поиск
      // map.controls.remove("trafficControl"); // удаляем контроль трафика
      // map.controls.remove("typeSelector"); // удаляем тип
      // map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
      // map.controls.remove("zoomControl"); // удаляем контрол зуммирования
      // map.controls.remove("rulerControl"); // удаляем контрол правил
      // map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
    }
    ymaps.ready(init);
    setIsCreated(!isCreated);
  }

  return (
    <StyledMapContainer>
      <div>sdfsdfsdf</div>
      <StyledMap id="map"></StyledMap>
    </StyledMapContainer>
  );
}

const StyledMapContainer = styled.section`
  height: 100%;
  width: 100%;
`;

const StyledMap = styled.div`
  height: 100%;
  width: 100%;
`;
