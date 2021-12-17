import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="secondary">
                <Container>
                    <Navbar.Brand href="#">Weather App</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    );
}