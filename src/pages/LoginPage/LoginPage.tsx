import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <div className="heading">
        <span>Hello!</span>
        <h2>
          Sign into your <span className="highlighted">account</span>
        </h2>
      </div>
      <LoginForm></LoginForm>
      <span>
        Don't have an account?{" "}
        <a href="/login" className="highlighted">
          Register Now
        </a>
      </span>
    </LoginPageStyled>
  );
};

export default LoginPage;
