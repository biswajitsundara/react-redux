import "./App.css";
import { Provider } from "react-redux";
import store from "./shop/store";
import ShoppingCart from "./shop/components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    </div>
  );
}

export default App;
