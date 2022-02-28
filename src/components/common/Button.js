import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: ${(props) => (props.secondary ? "blue" : "green")};
  height: 40px;
  padding: 8px;
  box-shadow: none;
  border: none;
  width: 100%;
  white-space: none;
  border-radius: 4px;
  margin: 2px 0px;

  &:disabled {
    background-color: gray;
    color: #666;
  }
`;

export { Button };
