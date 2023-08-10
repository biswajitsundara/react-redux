import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import RootLayout from "./components/RootLayout";
import Cart from "./components/Cart";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const Ekart = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Ekart;
