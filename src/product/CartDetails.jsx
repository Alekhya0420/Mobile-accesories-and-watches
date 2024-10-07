import './CartDetails.css';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../redux/slice/authSlice';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col, Table } from 'react-bootstrap';



function CartDetails() {
  const dispatch = useDispatch();
  const { myid } = useParams();
  const mystore = useSelector((state) => state.auth.data2);
  console.log("storage is", mystore);

  useEffect(() => {
    dispatch(fetchDetails(myid));
  }, [myid, dispatch]);


  const totalCartPrice = useMemo(() => {
    return mystore.cart?.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  }, [mystore.cart]);

  return (
    <div style={{ backgroundColor: '#0D47A1', padding: '20px' }}>
      <Container className='pt-3 pb-3'>
        <h2 className="text-center text-white mb-4">Cart Details</h2>
        <Row>
          {/* Left Side: User Details */}
          <Col md={3}>
            <Card className="mb-4" style={{ backgroundColor: '#1565C0', color: 'white', borderRadius: '10px', padding: '20px' }}>
              <h5>User Details</h5>
              <p><strong>Name:</strong> {mystore.name}</p>
              <p><strong>Email:</strong> {mystore.email}</p>
              <p><strong>Total Cart Price:</strong> ${totalCartPrice || '0.00'}</p>
            </Card>
          </Col>

          
          <Col md={9}>
            {mystore.cart && mystore.cart.length > 0 ? (
              <>
                <Table striped bordered hover  id='mytable'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mystore.cart.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img 
                            src={data.img} 
                            alt={data.title} 
                            style={{
                              width: '100px', 
                              height: '100px', 
                              objectFit: 'cover', 
                              borderRadius: '15px'
                            }} 
                          />
                        </td>
                        <td>{data.title}</td>
                        <td>${data.price.toFixed(2)}</td>
                        <td>{data.quantity}</td>
                        <td>${(data.price * data.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
               
              </>
            ) : (
              <p className="text-center text-white py-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                No items in the cart.
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartDetails;
