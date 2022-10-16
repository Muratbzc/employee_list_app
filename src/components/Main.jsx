import Container from "react-bootstrap/Container";
import Person from "./Person";
import data from "../helper/data";
import Butons from "./Butons";
import { useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);
  const dec = () => {
    count === 0 ? setCount(15) : setCount(count - 5);
  };
  const inc = () => {
    count === 15 ? setCount(0) : setCount(count + 5);
  };
  console.log(count);
  return (
    <Container
      className="text-center mt-5 bg-warning p-3"
      style={{ width: "50rem" }}
    >
      <h1>Employee List</h1>
      <p>
        (Employees {count + 1} to {count + 5})
      </p>

      {data.slice(count, count + 5).map((item) => {
        return <Person {...item} key={item.id} />;
      })}
      <Butons prev={dec} next={inc} />
    </Container>
  );
};

export default Main;
