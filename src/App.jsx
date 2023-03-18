import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main/Main";

export default function App() {
  return (
    <StyledApp>
      <Header />
      <Main />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
