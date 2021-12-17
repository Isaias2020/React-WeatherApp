import Container from "react-bootstrap/Container";
import Navigation from "../components/navbar/nav";

export default function Home() {
    return (
        <div>
            <Navigation />
            <Container className="mainContainer">Hello</Container>
        </div>
    );
}