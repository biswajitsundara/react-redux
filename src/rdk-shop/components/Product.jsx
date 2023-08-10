import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {add} from '../store/cartSlice';
import { getProducts } from "../store/productSlice";
import Alert from "react-bootstrap/Alert";
import StatusCode from "../utils/statusCode";

const Product = () => {
  //const [products, getProducts] = useState([]);
  const dispatch = useDispatch();
  //const selectedData = useSelector(state => state.products);
  //const { data: products } = selectedData || {}; // Add a default empty object as fallback

  //console.log('data='+ products);
  const {data: products, status} = useSelector(state => state.products);

  

  useEffect(() => {
    dispatch(getProducts());

    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
  }, []);

  if(status === StatusCode.LOADING){
    return <p>Loading...</p>
  }
  if(status === StatusCode.ERROR){
    return <Alert key="danger" variant="danger">Something went wrong</Alert>
  }
  const addToCart = (product) =>{
    dispatch(add(product));
  }
  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }} key={product.id}>
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
          <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
        </Card.Footer>
        </div>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      {cards}
    </>
  );
};

export default Product;
