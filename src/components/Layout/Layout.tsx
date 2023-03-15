import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main aria-label="Find your new family member">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
