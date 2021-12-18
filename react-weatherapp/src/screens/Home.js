import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navigation from "../components/navbar/nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Cards from "../components/cards/cards";
import axios from "axios";

export default function Home() {
    const [searchCity, setSearchCity] = useState("");
    const [toggleCards, setTogggleCards] = useState(false);

    const handleChange = (event) => {
        setSearchCity(event.target.value);
    };

    const submit = () => {
        axios.get(searchCity).then(function (response) {
        })
        setTogggleCards(true);
    }

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
                                value={searchCity}
                                onChange={handleChange}
                            />
                            <Button variant="dark" id="button-addon2" onClick={submit}>
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="center">
                    {toggleCards && <Cards word={searchCity} />}
                </Row>
            </Container>
        </div>
    );
}