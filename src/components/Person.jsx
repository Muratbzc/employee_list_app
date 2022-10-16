import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/esm/Image";

const Person = ({ name, age, image, email }) => {
  //   console.log(name, age, image, email);
  return (
    <Container className="shadow mb-4 gap-3 bg-light">
      <Row>
        <Col xs={4}>
          <Image className="rounded-circle mt-1 " src={image}></Image>
        </Col>
        <Col xs={8}>
          <div className="text-start mt-3">
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{age} years</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Person;
