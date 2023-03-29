import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../store/hooks";
import Card from "../Card/Card";
import { useEffect } from "react";

const CardList = (): JSX.Element => {
  const { getPets } = useApi();
  const pets = useAppSelector((state) => state.pets);

  useEffect(() => {
    getPets();
  }, [getPets]);

  return (
    <ul>
      {pets.map((pet) => (
        <li key={pet.id}>
          <Card pet={pet} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
