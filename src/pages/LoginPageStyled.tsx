import styled from "styled-components";

const LoginPageStyled = styled.section`
  padding: 15px 10px;

  .heading {
    text-align: center;
    align-self: center;
    margin-bottom: 50px;
    font-weight: 600;

    h2,
    span {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: 1.5rem;
    }
  }

  .highlighted {
    color: ${(props) => props.theme.colors.quaternary};
  }

  > span {
    display: block;
    text-align: center;
  }
`;

export default LoginPageStyled;
