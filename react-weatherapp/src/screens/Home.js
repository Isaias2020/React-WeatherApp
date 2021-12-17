import Container from "react-bootstrap/Container";
import Navigation from "../components/navbar/nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Home() {
    return (
        <div>
            <Navigation />
            <Container className="mainContainer">
                <h3 className="center weather">Weather App</h3>
                <Row className="center">
                    <Col md={4}>
                        <Form.Label>Type city name to find weather forecast</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Type City"
                            />
                            <Button variant="dark" id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}