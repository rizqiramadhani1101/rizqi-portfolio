import  { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap" 
const Navigationbar = () => {
    return (
        <div>
        <Navbar variant="dark"> 
            <Container> 
                <Navbar.Brand href="/">Rizqi Eduwork</Navbar.Brand>
                <Nav>
                <Nav.Link href="#ui"> UI Desiner</Nav.Link>
                <Nav.Link href="#webdev"> Web Dev</Nav.Link>
                
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default Navigationbar