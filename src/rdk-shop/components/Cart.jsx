import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import {remove} from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) =>{
       dispatch(remove(id));
  }

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px", marginRight: "10px" }} key={product.id}>
      <Card style={{ width: "18rem" }}  className="h-100">
        <div className="text-center">
        <Card.Img
          variant="top"
          src={product.image}
          className="pt-4"
          style={{ width: "100px", height: "130px" }}
        />
       
        
        <Card.Body  style={{height: "200px" }}>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>

        <Card.Footer style={{background: 'white' }}>
          <Button variant="danger" onClick={()=>removeFromCart(product.id)}>Remove From Cart</Button>
        </Card.Footer>
        </div>
      </Card>
    </div>
  ));
  return (
    <div className="row">
      <h1>Cart</h1>
      {cards}
    </div>
  );
};

export default Cart;
