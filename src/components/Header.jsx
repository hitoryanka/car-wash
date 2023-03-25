import styled from "styled-components";

export default function Header({}) {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavBit>
          <div></div>
          <StyledMqueen src="src\imgs\mqueen.svg" alt="Mqueen" />
          <StyledButton>Главная</StyledButton>
          <StyledButton>Поиск автомоек</StyledButton>
        </StyledNavBit>
        <StyledNavBit>
          <StyledAuthButton>Регистрация</StyledAuthButton>
          <StyledAuthButton>Войти</StyledAuthButton>
        </StyledNavBit>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding-top: 100px;
  padding-bottom: 150px;
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25); // make to var
  width: 100%;
  background-color: #99e6eb;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledMqueen = styled.img`
  width: 125px;
`;

const StyledNavBit = styled.div`
  margin: 50px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;
`;

const StyledAuthButton = styled.button`
  all: unset;
  width: 200px;
  border: 3px solid #25af74;
  padding: 10px;
  text-align: center;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1.5rem;
  color: #25af74;

  :last-of-type {
    background-color: #25af74;
    color: white;
  }
`;
