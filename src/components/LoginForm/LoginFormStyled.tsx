import styled from "styled-components";

const LoginFormStyled = styled.form`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 40px 10px;

  label {
    margin-bottom: 8px;
  }

  [class*="container"] {
    display: flex;
    height: 40px;
    margin-bottom: 20px;

    :last-of-type {
      margin-bottom: 40px;
    }
  }

  [class*="field"] {
    border-radius: 5px 0 0 5px;
    padding: 10px;
    width: 100%;

    :focus {
      outline-color: ${(props) => props.theme.colors.quaternary};
    }
  }

  [class*="icon"] {
    align-items: center;
    background-color: ${(props) => props.theme.colors.terciary};
    border-radius: 0 5px 5px 0;
    display: flex;
    justify-content: center;
    padding: 0 5px;
    height: 40px;
    width: 40px;
  }
`;

export default LoginFormStyled;
