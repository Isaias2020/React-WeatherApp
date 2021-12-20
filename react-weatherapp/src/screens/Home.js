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
import Forecast from "../components/cards/5day";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

export default function Home() {
    const [searchCity, setSearchCity] = useState("");
    const [toggleCards, setTogggleCards] = useState(false);
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);
    const [image, setImage] = useState("");
    const [fiveDayArray, setFiveDayArray] = useState([]);
    const [dates, setDates] = useState([]);
    const [error, setError] = useState({});
    const [country, setCountry] = useState("");
    const [search, setSearch] = useState("");
    let MYSECRETKEY = "b397225e3e6e7043cc26284176c744bd";
    let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity},${country}&APPID=${MYSECRETKEY}`;
    let fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity},${country}&APPID=${MYSECRETKEY}`;

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const submit = () => {
        setSearchCity(search.split(", ")[0]);
        setCountry(search.split(", ")[1]);
        axios.get(baseUrl).then(function (response) {
            setError({});
            setTemperature(response.data.main.temp);
            setHumidity(response.data.main.humidity);
            setWindSpeed(response.data.wind.speed);
            setImage(response.data.weather[0].icon);
            console.log(response.data);
        })
            .catch(function (error) {
                if (error.response) {
                    setTemperature(0);
                    setHumidity(0);
                    setWindSpeed(0);
                    setImage("");
                    setError(error.response.data.message);
                }
                console.log(error.response.data.message);
            });
        axios.get(fiveDayUrl).then(function (response) {

            console.log(response.data.list);

            let dayCount = [];
            let fiveDay = [];
            for (let i = 0; i < response.data.list.length; i++) {
                let dateandtime = response.data.list[i].dt_txt;
                let date = dateandtime.split(" ")[0];
                let time = dateandtime.split(" ")[1];

                if (time === "15:00:00") {
                    fiveDay.push(response.data.list[i]);
                    let year = date.split("-")[0];
                    let month = date.split("-")[1];
                    let day = date.split("-")[2];
                    dayCount.push(month + "/" + day + "/" + year);
                }
            }
            setDates(dayCount);
            console.log(dayCount);
            setFiveDayArray(fiveDay);
            console.log(fiveDay);
        })
            .catch(function (error) {
                if (error.response) {
                    setDates([]);
                    setFiveDayArray([]);
                    setError(error.response.data.message);
                }
                console.log(error);
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
                        <Form.Label>Type city name, country code to find weather forecast</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="City, Country Code"
                                value={search}
                                onChange={handleChange}
                            />
                            <Button variant="dark" id="button-addon2" onClick={submit}>
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                {Object.keys(error).length > 0 && (
                    <Row className="error cardsCenter">
                        <Alert key={1} variant="danger" className="center">
                            <p>{error}<br />{"Please type a valid city."}</p>
                        </Alert>
                    </Row>
                )}

                {Object.keys(error).length === 0 && (<>
                    <Row className="center">
                        {toggleCards && <Cards city={searchCity} image={image} temperature={temperature} humidity={humidity} windspeed={windSpeed} />}
                    </Row>
                    <Row>
                        {toggleCards && fiveDayArray.length > 0 && <Forecast city={searchCity} date={dates[0]} image={fiveDayArray[0].weather[0].icon} temperature={fiveDayArray[0].main.temp} />}

                        {toggleCards && fiveDayArray.length > 0 && <Forecast city={searchCity} date={dates[1]} image={fiveDayArray[1].weather[0].icon} temperature={fiveDayArray[1].main.temp} />}

                        {toggleCards && fiveDayArray.length > 0 && <Forecast city={searchCity} date={dates[2]} image={fiveDayArray[2].weather[0].icon} temperature={fiveDayArray[2].main.temp} />}

                        {toggleCards && fiveDayArray.length > 0 && <Forecast city={searchCity} date={dates[3]} image={fiveDayArray[3].weather[0].icon} temperature={fiveDayArray[3].main.temp} />}

                        {toggleCards && fiveDayArray.length > 0 && <Forecast city={searchCity} date={dates[4]} image={fiveDayArray[4].weather[0].icon} temperature={fiveDayArray[4].main.temp} />}
                    </Row>
                </>)}
            </Container>
        </div>
    );
}