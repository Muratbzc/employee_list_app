import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

const Butons = ({ prev, next }) => {
  return (
    <Container>
      <Button className="me-5" variant="primary" onClick={prev}>
        Prev
      </Button>
      <Button variant="primary" onClick={next}>
        Next
      </Button>
    </Container>
  );
};

export default Butons;
