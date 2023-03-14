import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  return (
    <StyledApp>
      <Header />
      <Main />
    </StyledApp>
  );
}
