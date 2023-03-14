import styled from "styled-components";

export default function Main() {
  return (
    <StyledMain>
      <Filters />
      <section></section>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  margin-top: -5%;
  display: flex;
  width: 60%;
  z-index: 1;
  height: 900px; // make it auto
  border-radius: 40px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

function Filters({}) {
  return (
    <StyledFilters>
      <div>
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
        <div>
          <div>
            <input type="text" />
            <StyledButton>search</StyledButton>
          </div>
          <img src="" alt="filters" />
        </div>
      </div>
      <div>
        {/* filters */}
        <div>
          {/* title */}
          <h3>Тип авто</h3>
          <div>
            {/* label-name */}
            <input type="checkbox" name="label-name" />
            <label htmlFor="label-name">легковое</label>
          </div>
          <div>
            <input type="checkbox" name="label-name" />
            <label htmlFor="label-name">грузовое</label>
          </div>
        </div>
        <input type="submit" value="Подтвердить" />
      </div>
    </StyledFilters>
  );
}

const StyledFilters = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 25%;
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
