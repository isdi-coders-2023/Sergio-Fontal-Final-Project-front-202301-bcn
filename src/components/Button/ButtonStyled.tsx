import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.terciary};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.main};
  font-family: "Baloo Bhai 2";
  font-size: 1.25rem;
  height: 40px;
  align-self: center;
  width: 220px;

  :disabled {
    opacity: 0.75;
  }
`;

export default ButtonStyled;
