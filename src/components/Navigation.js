import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>  
          <Navbar.Brand href="#home">Triviologyie v3
</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Navigation;