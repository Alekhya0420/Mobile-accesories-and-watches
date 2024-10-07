import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Cpu} from 'react-bootstrap-icons';
import './Header.css'

const Header = () => {
  
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate('/login');
  }

  let token = sessionStorage.getItem("authToken")

  return (
    <Navbar expand="lg" className="bg-nav" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Cpu  className='text-white fs-2 '/>
            <Nav.Link as={Link} to="/" className='nav-item-hover'>Home</Nav.Link>
            <Nav.Link as={Link} to="/prod" className='nav-item-hover'>Product</Nav.Link>

            {token ? (
              <Nav.Link as={Link} to="/cart" className='nav-item-hover'>
                Cart {totalQuantity > 0 ? (`${totalQuantity}`) : ''}
              </Nav.Link>
            ) : ""}




            {/*if only useris not logged in then only registration will be shown*/}

            {
              !token ?
                <>
                  <Nav.Link as={Link} to="/login" className='nav-item-hover'>Login</Nav.Link>
                  <Nav.Link as={Link} to="/registration" className='nav-item-hover '>Registration</Nav.Link>
                </> :
                null}

            {/* if user is logged in then only logout will be shown otherwise not */}



          </Nav>
          {/* <div className="d-flex"> */}
            {token ?
              <Button onClick={logout} className='text-dark bg-primary'>Logout</Button> : null}
          {/* </div> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
