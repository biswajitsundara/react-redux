import { Provider } from "react-redux";
import store from "./Store/store";
import ShoppingCart from "./components/ShoppingCart";

function Shop() {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  );
}

export default Shop;
