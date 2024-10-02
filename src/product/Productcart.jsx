// import React from 'react';
// import { Button, Card } from 'react-bootstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTocart } from '../redux/slice/cartSlice';
// import {Link} from 'react-router-dom';
// import details from '../database/db.json'

// const ProductCart = () => {
//   const items = useSelector((state) => state.cart.items);
//   let userId = sessionStorage.getItem("authToken");
//   console.log("items are", items);

//   let information=details.registration.find((data)=>data.id === userId);
//   console.log("information is",information);

//   const dispatch = useDispatch();

//   return (
//     <div className="container mt-5" style={{ backgroundColor: '#1976d2', padding: '20px', borderRadius: '15px' }}>
//       <h2 className="text-white">Your Cart</h2>
//       <div className="row">
//         {items.map((item) => (
//           <div className="col-md-4" key={item.id}>
//             <Card className="mb-4 shadow-sm" style={{ backgroundColor: '#2196F3', color: 'white', border: 'none' }}>
//               <Card.Img
//                 variant="top"
//                 src={item.img}
//                 style={{
//                   height: "200px",
//                   objectFit: 'cover',
//                   borderRadius: '10px 10px 0 0',
//                   width:"150px",
//                   display:"block",
//                   marginLeft:"auto",
//                   marginRight:"auto"
//                 }}
//               />
//               <Card.Body>
//                 <Card.Title>{item.title}</Card.Title>
//                 <Card.Text>Price: ${item.price.toFixed(2)}</Card.Text>
//                 <Card.Text>Quantity: {item.quantity}</Card.Text>
//                 <Button
//                   className='btn-light w-25 m-auto'
//                   onClick={() => dispatch(addTocart({ ...item, userId }))}
//                 >
//                   Add to Cart
//                 </Button>

//               </Card.Body>
//             </Card>
//             <Link to={`${userId}`}>
//                     <Button variant="primary" className="w-100 mb-2">
//                         Proceed to Checkout
//                     </Button>
//             </Link>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCart;



// import React from 'react';
// import { Button, Card, Row, Col } from 'react-bootstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTocart } from '../redux/slice/cartSlice';
// import { Link } from 'react-router-dom';
// import details from '../database/db.json';
// import {useNavigate} from 'react-router-dom';

// const ProductCart = () => {
//   const items = useSelector((state) => state.cart.items);
//   let userId = sessionStorage.getItem("authToken");
//   console.log("items are", items);

//   let information = details.registration.find((data) => data.id === userId);
//   console.log("information is", information);

//   const dispatch = useDispatch();
//   let navigate=useNavigate();


//   return (
    
//       <div className='w-100' style={{backgroundColor: '#1976d2'}}>
//       <div className="container pt-3 w-100 pb-3" >   
//         <Row>
//         <Col md={3} sm={3} className="text-white mb-4">
//           <Card style={{ backgroundColor: '#2196F3', color: 'white', border: 'none' }}>
//             <Card.Body>
//               <Card.Title>User Information</Card.Title>
//               {information ? (
//                 <>
//                   <Card.Text>Name: {information.name}</Card.Text>
//                   <Card.Text>Email: {information.email}</Card.Text>
//                   <Link to={`/cart/${userId}`}>
//                     <Button variant="primary" className="mt-2">See Orders</Button>
//                   </Link>
//                 </>
//               ) : (
//                 <Card.Text>No user information available</Card.Text>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Right Column for Cart Items */}
//         <Col md={9} sm={9}>
//           <div className="row">
//             {items.map((item) => (
//               <div className="col-md-4 mb-4" key={item.id}>
//                 <Card className="mb-4 shadow-sm" style={{ backgroundColor: '#2196F3', color: 'white', border: 'none' }}>
//                   <Card.Img
//                     variant="top"
//                     src={item.img}
//                     style={{
//                       height: "180px",
//                       objectFit: 'cover',
//                       borderRadius: '10px 10px 0 0',
//                       width: "120px",
//                       display: "block",
//                       marginLeft:"auto",
//                       marginRight:"auto"
//                     }}
//                   />
//                   <Card.Body>
//                     <Card.Title className='fs-3'>{item.title}</Card.Title>
//                     <Card.Text className='bg-dark fs-5'>Price: ${item.price.toFixed(2)}</Card.Text>
//                     <Card.Text>Quantity: {item.quantity}</Card.Text>
//                     <Button
//                       className='btn-primary w-50 m-auto'
//                       onClick={() => dispatch(addTocart({ ...item, userId }))}
//                     >
//                       Add to Cart
//                     </Button>

//                   </Card.Body>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </Col>
//         </Row>
//       </div>
//       </div>
//   );
// };

// export default ProductCart;


import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addTocart } from '../redux/slice/cartSlice';
import { Link } from 'react-router-dom';
import details from '../database/db.json';
import { useNavigate } from 'react-router-dom';

const ProductCart = () => {
  const items = useSelector((state) => state.cart.items);
  let userId = sessionStorage.getItem("authToken");
  console.log("items are", items);

  let information = details.registration.find((data) => data.id === userId);
  console.log("information is", information);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div className='w-100' style={{ backgroundColor:'#0D47A1'}}>
      <div className="container pt-3 w-100 pb-3">   
        <Row>
          <Col md={3} sm={3} className="text-white mb-4">
            <Card style={{ backgroundColor: '#1976D2', color: 'white', border: 'none' }}>
              <Card.Body>
                <Card.Title>User Information</Card.Title>
                {information ? (
                  <>
                    <Card.Text>Name: {information.name}</Card.Text>
                    <Card.Text>Email: {information.email}</Card.Text>
                    <Link to={`/cart/${userId}`}>
                      <Button variant="primary" className="mt-2">See Orders</Button>
                    </Link>
                  </>
                ) : (
                  <Card.Text>No user information available</Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column for Cart Items */}
          <Col md={9} sm={9}>
            <Row>
              {items.length > 0 ? (
                items.map((item) => (
                  <Col md={4} className="mb-4" key={item.id}>
                    <Card className="mb-4 shadow" style={{ backgroundColor: '#1976D2', color: 'white', border: 'none' }}>
                      <Card.Img
                        variant="top"
                        src={item.img}
                        style={{
                          height: "180px",
                          objectFit: 'cover',
                          borderRadius: '10px 10px 0 0',
                          width: "100%",  // Make image responsive
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto"
                        }}
                      />
                      <Card.Body>
                        <Card.Title className='fs-5'>{item.title}</Card.Title>
                        <Card.Text className='fs-6'>Price: ${item.price.toFixed(2)}</Card.Text>
                        <Card.Text className='fs-6'>Quantity: {item.quantity}</Card.Text>
                        <Button
                          className='btn-primary w-50 m-auto'
                          onClick={() => dispatch(addTocart({ ...item, userId }))}
                        >
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col className="text-center">
                  <h5>No items in the cart.</h5>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductCart;
