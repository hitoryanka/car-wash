import styled from "styled-components";

export default function SpecificFilter({ title, fields }) {
  return (
    <StyledSpecificFilter>
      {/* filters */}
      <StyledFiltercontainer>
        {/* title */}
        <h3>{title}</h3>
        <StyledCheckboxContainer>
          {fields.map((field) => {
            return (
              <StyledField>
                <input type="checkbox" name={field} />
                <label htmlFor={field}>{field}</label>
              </StyledField>
            );
          })}
        </StyledCheckboxContainer>
      </StyledFiltercontainer>
    </StyledSpecificFilter>
  );
}

const StyledSpecificFilter = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyledFiltercontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3,
  label {
    font-weight: 400;
    color: #00477a;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
  }
`;

const StyledCheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10px;
`;

const StyledField = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    appearance: none;
    border: 3px solid #e7eded;
    width: 25px;
    height: 25px;
    border-radius: 5px;
  }

  input[type="checkbox"]:checked {
    background: url(src/imgs/main/checkbox.png) 3px center no-repeat;
    background-color: #99e6eb;
    border-color: #99e6eb;
  }
`;
