import styled from "styled-components";

const ModalStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;

  .modal__background {
    background-color: ${(props) => props.theme.colors.main};
    height: 100vh;
    opacity: 0.5;
    width: 100vw;
  }

  .modal__alert {
    background-color: ${(props) => props.theme.colors.main};
    border: solid 3px ${(props) => props.theme.colors.quaternary};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 200px;
    min-width: 240px;
    max-width: 300px;
    padding: 25px;
    position: absolute;

    div {
      align-items: flex-start;
      display: flex;
      justify-content: space-between;
    }

    img {
      transform: scaleX(-1);
    }

    span {
      align-self: center;
      font-family: "Baloo Bhai 2";
      font-weight: 600;
    }

    .highlighted {
      color: ${(props) => props.theme.colors.quaternary};
    }
  }
`;

export default ModalStyled;
