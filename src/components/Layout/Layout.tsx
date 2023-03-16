import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";

const Layout = (): JSX.Element => {
  const { isOpen } = useAppSelector((state) => state.ui);
  return (
    <>
      <Header />
      <main aria-label="Find your new family member">
        {isOpen && <Modal />}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
