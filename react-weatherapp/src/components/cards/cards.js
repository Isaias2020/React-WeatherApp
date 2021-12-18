import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

export default function Cards(props) {
    return (
        <Col className="entireCard">
            <Card className="cardsCenter" style={{ width: "30rem" }}>
                <Card.Body>
                    <Card.Title>{props.city}</Card.Title>
                    <Card.Text>
                        City Name || Date || weather img
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Temperature: ##F</ListGroupItem>
                    <ListGroupItem>Humidity: ##%</ListGroupItem>
                    <ListGroupItem>Wind Speed: ##mph</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://openweathermap.org/api">API provided by: OpenWeather</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}