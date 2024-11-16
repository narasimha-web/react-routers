import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';

const Navbars = () => {
 return(
    <section>
     <Navbar bg="dark" data-bs-theme="dark" >
     <Navbar.Brand className='moviesadda'>MoviesAdda</Navbar.Brand>
        <Container className='navbar'>
          <Nav className="me-auto navdimension">
          <NavLink to = '/' className='navLink'>Home</NavLink>
          <NavLink to = '/About'className='navLink'>About</NavLink>
          <NavLink to = '/Contacts'className='navLink'>Contacts</NavLink>
          <NavLink to = '/Information'className='navLink'>Information</NavLink>
          <NavLink to = '/Projects' className='navLink'>Movies</NavLink>
          <NavLink to = '/Users' className='navLink'>Users</NavLink>
          </Nav>
          <Form inline >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search Movie Here..."
              className=" mr-sm-2 'formText'"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
          
        </Container>
      
      </Navbar>
    </section>
 )
}

export default Navbars