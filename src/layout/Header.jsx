// import React from 'react'
// import {Container} from 'react-bootstrap'
// import {Navbar} from 'react-bootstrap'
// import {Nav} from 'react-bootstrap'
// import {Link} from 'react-router-dom'
// import {useSelector} from 'react-redux'

// const Header = () => {
//   const totalQuantity = useSelector((state) => state.cart.totalQuantity);

//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//     <Container>
//       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link as={Link} to="/">Home</Nav.Link>
//           <Nav.Link as={Link} to="/cart">
//           Cart {totalQuantity > 0 ? `(${totalQuantity})` : ''}
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   )
// }

// export default Header


import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Cpu} from 'react-bootstrap-icons';
import './Header.css'

const Header = () => {
  // Get the totalQuantity from Redux state using useSelector
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate('/login');
  }

  let token = sessionStorage.getItem("authToken")

  return (
    <Navbar expand="lg" className="bg-nav">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
          <div className="d-flex">
            {token ?
              <Button onClick={logout} className=' me-5 text-dark bg-primary'>Logout</Button> : null}
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
