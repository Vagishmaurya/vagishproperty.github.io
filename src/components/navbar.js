import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <>
    
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    
      <Container>
      {/* <span class="border"> */}
      <p class="fs-2">

        <Nav.Link href="#home"><b>Propertybhavan</b></Nav.Link>
        
        </p>
        {/* </span> */}
        <p class="text-end">
        <p class="fs-4">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#yourproperty">List your property</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 15 13"  padding-top= "15px">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>
        
          </Nav>
          
        </Navbar.Collapse>
        </p></p>
        
      </Container>
       
    </Navbar>
    
    </>
  );
}

export default CollapsibleExample;