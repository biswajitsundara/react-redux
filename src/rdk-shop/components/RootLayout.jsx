import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavbarPanel";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBarPanel />
        <main>
          <div className="container pt-5">
            <Outlet />
          </div>
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
