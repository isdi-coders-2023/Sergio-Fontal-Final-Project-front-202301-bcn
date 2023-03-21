import { useAppDispatch } from "../../store/hooks";
import { useCallback } from "react";
import { PetsStructure } from "../types";
import { loadPetsActionCreator } from "../../store/features/petSlice/petSlice";

const apiUrl = process.env.REACT_APP_URL!;
const endpoint = "/pets";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getPets = useCallback(async () => {
    const response = await fetch(`${apiUrl}${endpoint}`);
    const pets = (await response.json()) as PetsStructure;
    dispatch(loadPetsActionCreator(pets));
  }, [dispatch]);

  return { getPets };
};

export default useApi;
