import CardList from "../../components/CardList/CardList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <CardList />
    </HomePageStyled>
  );
};

export default HomePage;
