
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getCartTotal, addItemToCart, removeItemCart, destroyItemCart } from '../redux/slice/cartSlice';

// function CartStore() {
//     const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cart);
//     const dispatch = useDispatch();

//     let token=sessionStorage.getItem("authToken");

//     useEffect(() => {
//         dispatch(getCartTotal());
//     }, [cart, dispatch]);

//     const handleAdd = (item) => {
//         dispatch(addItemToCart(item));
//     };

//     const handleDel = (item) => {
//         dispatch(removeItemCart(item));
//     };

//     const handleCancel = (item) => {
//         dispatch(destroyItemCart(item));
//     };

//     return (
//         <Container className="mt-5" style={{ backgroundColor: "red", padding: "20px", borderRadius: "10px" }}>
//             <Row>
//                 <Col md={8}>
//                     <h2 className="mb-4 text-white">Your Cart has {totalQuantity} items</h2>
//                     <Row>
//                         {cart.map((item) => (
//                             <Col md={6} key={item.id} className="mb-4">
//                                 <Card className="shadow-sm h-100 border-primary" style={{ backgroundColor: "#ffffff" }}>
//                                     <Card.Img 
//                                         variant="top" 
//                                         src={item.img} 
//                                         style={{ height: "200px", objectFit: "cover", borderRadius: "10px", 
//                                         width:"100px",display:"block",marginLeft:"auto",marginRight:"auto"
//                                         }} 
//                                     />
//                                     <Card.Body>
//                                         <Card.Title className="text-success">{item.title}</Card.Title>
//                                         <Card.Text className="text-danger">Price: ${item.price.toFixed(2)}</Card.Text>
//                                         <Card.Text>Quantity: <strong>{item.quantity}</strong></Card.Text>
//                                         <div className="d-flex justify-content-between">
//                                             <Button variant="outline-success" className="me-2" onClick={() => handleAdd(item)}>
//                                                 <strong>+</strong>
//                                             </Button>
//                                             <Button variant="outline-danger" className="me-2" onClick={() => handleCancel(item)}>
//                                                 Cancel
//                                             </Button>
//                                             <Button variant="outline-secondary" onClick={() => handleDel(item)}>
//                                                 <strong>-</strong>
//                                             </Button>
//                                         </div>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         ))}
//                     </Row>
//                 </Col>

//                 <Col md={4}>
//                     <div className="sticky-top" style={{ top: "80px" }}>
//                         <Card className="shadow-sm border-info" style={{ backgroundColor: "#e3f2fd" }}>
//                             <Card.Body>
//                                 <h3 className="text-center text-info mb-4">Cart Summary</h3>
//                                 <Card.Text className="text-dark">
//                                     <strong>Total Quantity:</strong> <span className="badge bg-info">{totalQuantity}</span>
//                                 </Card.Text>
//                                 <Card.Text className="text-dark">
//                                     <strong>Total Price:</strong> <span className="badge bg-success">${totalPrice.toFixed(2)}</span>
//                                 </Card.Text>
//                                 <div className="text-center mt-4">

//                                 <Link to={`${token}`}>
//                                   <Button variant="primary" className="w-100 mb-2">
//                                      Proceed to Checkout
//                                    </Button>
//                                 </Link>



//                                     <Button variant="danger" className="w-100">
//                                         Clear Cart
//                                     </Button>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default CartStore;


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchCartData } from '../redux/slice/cartSlice';
import { getCartTotal, addItemToCart, removeItemCart, destroyItemCart } from '../redux/slice/cartSlice';

function CartStore() {
    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    let token = sessionStorage.getItem("authToken");

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart, dispatch]);

    //fetchcartdata new addition
    useEffect(() => {
        if (token) {
            dispatch(fetchCartData(token)); 
        }
    }, [dispatch,token]);


    const handleAdd = (item) => {
        dispatch(addItemToCart(item));
    };
    
    

    const handleDel = (item) => {
        dispatch(removeItemCart(item));
    };

    

    const handleCancel = (item) => {
        dispatch(destroyItemCart(item));
    };
  
    return (
        <Container className="mt-5 mb-5" style={{backgroundColor: '#2196F3'}}>
            <Row>
                <Col md={8}>
                    <h2 className="mb-1 text-white">Your Cart has {totalQuantity} items</h2>
                    <Row>
                        {cart.map((item) => (
                            <Col md={6} key={item.id} className="mb-4">
                                <Card className="shadow-sm h-100" style={{ backgroundColor: '#2196F3', color: 'white', borderRadius: '10px',border:'1px solid black' }}>
                                    <Card.Img 
                                        variant="top" 
                                        src={item.img} 
                                        style={{ height: "150px", objectFit: 
                                        "cover", borderRadius: "10px", width: "150px", display: "block", 
                                        marginLeft: "auto", marginRight: "auto" }} 
                                    />
                                    <Card.Body>
                                        <Card.Title className='fs-3'>{item.title}</Card.Title>
                                        <Card.Text className="text-white bg-dark fs-5">Price: ${item.price.toFixed(2)}</Card.Text>
                                        <Card.Text>Quantity: <strong>{item.quantity}</strong></Card.Text>
                                        <div className="d-flex justify-content-between">
                                            <Button variant="outline-light" className="me-2" onClick={() => handleAdd(item)}>
                                                <strong>+</strong>
                                            </Button>
                                            <Button className="btn-danger me-2" onClick={() => handleCancel(item)}>
                                                Cancel
                                            </Button>
                                            <Button variant="outline-light" onClick={() => handleDel(item)}>
                                                <strong>-</strong>
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>

                <Col md={4}>
                    <div className="sticky-top" style={{ top: "80px" }}>
                        <Card className="shadow-sm mt-5" style={{ backgroundColor: '#64B5F6', color: 'white'}}>
                            <Card.Body>
                                <h3 className="text-center mb-4">Cart Summary</h3>
                                <Card.Text>
                                    <strong className='fs-2'>Total Quantity:</strong> <span className="badge bg-info fs-2">{totalQuantity}</span>
                                </Card.Text>
                                <Card.Text>
                                    <strong className='fs-2'>Total Price:</strong> <span className="badge bg-success fs-2">${totalPrice.toFixed(2)}</span>
                                </Card.Text>
                                <div className="text-center mt-4">
                                    <Link to={`${token}`}>
                                        <Button variant="primary" className="w-100 mb-2">
                                            Proceed to Checkout
                                        </Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CartStore;
