
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDetails } from '../redux/slice/authSlice';
// import { useParams } from 'react-router-dom';
// import { Container, Card, Row, Col } from 'react-bootstrap';

// function CartDetails() {
//   const dispatch = useDispatch();
//   const { myid } = useParams();
//   const mystore = useSelector((state) => state.auth.data2);
//   console.log("storage is", mystore);

//   useEffect(() => {
//     dispatch(fetchDetails(myid));
//   }, [myid, dispatch]);

//   return (
//     <div className="mt-3 mb-3" style={{ backgroundColor: '#0D47A1', padding: '20px' }}>
//       <div className='container pt-3 w-100 pb-3'>
//       <h2 className="text-center text-white mb-4">Cart Details</h2>
//       <Row>
//         {/* Left Side: User Details */}
//         <Col md={3}>
//           <Card className="mb-4" style={{ backgroundColor: '#1565C0', color: 'white', borderRadius: '10px', padding: '20px' }}>
//             <h5>User Details</h5>
//             <p><strong>Name:</strong> {mystore.name}</p>
//             <p><strong>Email:</strong> {mystore.email}</p>
//             <p><strong>Total Price:</strong> ${mystore.totalPrice ? mystore.totalPrice.toFixed(2) : '0.00'}</p>
//           </Card>
//         </Col>

//         {/* Right Side: Product Details */}
//         <Col md={9}>
//           {mystore.cart && mystore.cart.length > 0 ? (
//             <Row>
//               {mystore.cart.map((data, index) => (
//                 <Col md={12} key={index} className="mb-4">
//                   <Card className="d-flex flex-row" style={{ backgroundColor: '#1976D2', borderRadius: '10px', color: 'white' }}>
//                     <Col md={2} className="p-0">
//                       <Card.Img
//                         variant="top"
//                         src={data.img}
//                         style={{
//                           height: "200px", 
//                           borderRadius: '10px 0 0 10px',
//                           objectFit: 'cover', 
//                           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
//                           display:'block',
//                           width:"200px",
//                         }}
//                       />
//                     </Col>
//                     <Col md={10} className="p-3 d-flex flex-column">
//                       <Card.Body className="d-flex flex-column justify-content-between">
//                         <Card.Title className="text-uppercase fw-bold">{data.title}</Card.Title>
//                         <Card.Text className='fs-5'>Price: <span className="fw-bold">${data.price.toFixed(2)}</span></Card.Text>
//                         <Card.Text className='fs-5'>Quantity: <span className="fw-bold">{data.quantity}</span></Card.Text>
//                       </Card.Body>
//                     </Col>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           ) : (
//             <p className="text-center text-white py-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
//               No items in the cart.
//             </p>
//           )}
//         </Col>
//       </Row>
//       </div>
//     </div>
//   );
// }

// export default CartDetails;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../redux/slice/authSlice';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';

function CartDetails() {
  const dispatch = useDispatch();
  const { myid } = useParams();
  const mystore = useSelector((state) => state.auth.data2);
  console.log("storage is", mystore);

  useEffect(() => {
    dispatch(fetchDetails(myid));
  }, [myid, dispatch]);

  return (
    <div className="mt-3 mb-3" style={{ backgroundColor: '#0D47A1', padding: '20px' }}>
      <div className='container pt-3 w-100 pb-3'>
        <h2 className="text-center text-white mb-4">Cart Details</h2>
        <Row>
          {/* Left Side: User Details */}
          <Col md={3}>
            <Card className="mb-4" style={{ backgroundColor: '#1565C0', color: 'white', borderRadius: '10px', padding: '20px' }}>
              <h5>User Details</h5>
              <p><strong>Name:</strong> {mystore.name}</p>
              <p><strong>Email:</strong> {mystore.email}</p>
              <p><strong>Total Price:</strong> ${mystore.totalPrice ? mystore.totalPrice.toFixed(2) : '0.00'}</p>
            </Card>
          </Col>

          {/* Right Side: Product Details */}
          <Col md={9}>
            {mystore.cart && mystore.cart.length > 0 ? (
              <Row>
                {mystore.cart.map((data, index) => (
                  <div key={index} className="mb-4">
                    <Card className="d-flex flex-row" style={{ backgroundColor: '#1976D2', borderRadius: '10px', color: 'white' }}>
                      <Col md={3} className="p-0">
                        <Card.Img
                           variant="top"
                          src={data.img}
                          style={{
                            height: "300px",
                            borderRadius: '10px 0 0 10px',
                            objectFit: 'cover',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            width: "250px",
                          }}
                        />
                      </Col>
                      <Col md={9} className="p-3 d-flex flex-column">
                        <Card.Body className="d-flex flex-column justify-content-between">
                          <Card.Title className="text-uppercase fw-bold">{data.title}</Card.Title>
                          <Card.Text className='fs-5'>Price: <span className="fw-bold">${data.price.toFixed(2)}</span></Card.Text>
                          <Card.Text className='fs-5'>Quantity: <span className="fw-bold">{data.quantity}</span></Card.Text>
                          <Card.Text className='fs-5'>Total: <span className="fw-bold">${(data.price * data.quantity).toFixed(2)}</span></Card.Text>
                        </Card.Body>
                      </Col>
                    </Card>
                  </div>
                ))}
              </Row>
            ) : (
              <p className="text-center text-white py-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                No items in the cart.
              </p>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CartDetails;

