import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

export default function Cards(props) {
    let today = new Date().toDateString();
    function convertTemperature(temperature) {
        let result = (temperature - 273.15) * 9 / 5 + 32;
        return result.toFixed(2);
    }
    return (
        <Col className="entireCard">
            <Card className="cardsCenter" style={{ width: "30rem" }}>
                <Card.Body>
                    <Card.Title>{props.city}</Card.Title>
                    <Card.Text>
                        {today} <img id="weather-img" src={`https://api.openweathermap.org/img/w/${props.image}.png`} alt="weather icon" />
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Temperature: {convertTemperature(props.temperature)} °F</ListGroupItem>
                    <ListGroupItem>Humidity: {props.humidity} %</ListGroupItem>
                    <ListGroupItem>Wind Speed: {props.windspeed} mph</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://openweathermap.org/api">API provided by: OpenWeather</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}