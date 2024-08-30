import logo from "./logo.svg";
import "./App.css";
import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";

function App() {
  const carList = ["BMW", "Audi", "Ford", "Mercedes", "Ferrari"];
  const flowerList = [
    "Marigold",
    "Rose",
    "TubeRose",
    "Hibiscus",
    "Kadam",
    "Jasmine",
    "Sunflower",
    "Lotus",
    "Lilly",
    "Tulip",
    "Daffodil",
    "Dahlia",
  ];
  const productList = [
    {
      name: "PhotoShop",
      price: "$99",
    },
    {
      name: "Illustrator",
      price: "$60",
    },
    {
      name: "Premiere Pro",
      price: "$199",
    },
    {
      name: "After Effects",
      price: "$150",
    },
  ];

  const productNamesList = productList.map((p) => p.name);
  console.log(productNamesList);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React page.</h1>
        <h1>Counter</h1>
        <Count></Count>
        <Users></Users>
        <h2>Carlist</h2>
        <ul>
          {carList.map((cN) => (
            <li>{cN}</li>
          ))}

          {productList.map((pN) => (
            <li>{pN.name}</li>
          ))}
        </ul>
        <h1>Flower List</h1>
        {flowerList.map((fN) => (
          <FlowerName flowerN={fN}></FlowerName>
        ))}
        {productList.map((pD) => (
          <ProductsDetails product={pD}></ProductsDetails>
        ))}
        {carList.map((cN) => (
          <PersonDetails CarName={cN}></PersonDetails>
        ))}
      </header>
    </div>
  );
}

function ProductsDetails(props) {
  const productStyle = {
    height: "250px",
    width: "200px",
    backgroundColor: "lightsalmon",
    borderRadius: "5px",
    border: "1px solid gray",
    padding: "10px",
    margin: "10px",
  };
  const { name, price } = props.product;

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>

      <button>Buy Now</button>
    </div>
  );
}

function FlowerName(props) {
  const fN = props.flowerN;
  return (
    <div
      style={{
        border: "2px solid salmon",
        margin: "10px",
        width: "400px",
      }}
    >
      <h2> {fN}</h2>
    </div>
  );
}
function PersonDetails(props) {
  const cN = props.carName;
  return (
    <div
      style={{
        border: "2px solid greenyellow",
        margin: "10px",
        width: "400px",
      }}
    >
      <h2>Your car name is {cN}</h2>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  const increaseHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });
  return (
    <div>
      <h1>Dynamic Users : {users.length}</h1>
      <ul>
        {users.map((uN) => (
          <li>{uN.name}</li>
        ))}
        {users.map((mail) => (
          <li>Mail Address: {mail.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
