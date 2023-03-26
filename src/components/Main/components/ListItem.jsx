import styled from "styled-components";

export default function ListItem({ name, description, features }) {
  console.log(features);

  return (
    <StyledListContainer>
      <StyledContent>
        <p>{name}</p>
        <p>{description}</p>
      </StyledContent>
    </StyledListContainer>
  );
}

const StyledListContainer = styled.li`
  all: unset;
`;

const StyledContent = styled.div`
  padding-left: 10px;
  border-bottom: 1px solid rgb(153, 230, 235);
`;
