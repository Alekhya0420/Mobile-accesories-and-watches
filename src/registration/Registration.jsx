// import React from 'react'
// import { useForm} from 'react-hook-form'
// import  details from '../database/db.json'
// import {Link} from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'
// import { RegInfo } from '../redux/slice/authSlice'
// import {useDispatch} from 'react-redux'

// const Registration = () => {
//   let form =useForm();
//   let {register,formState,handleSubmit} = form;
//   let {errors}=formState;
//   let dispatch=useDispatch();
//   let navigate=useNavigate();

 

//   const submitHandle = (data) => {

//     const lowerCaseEmail = data.email.toLowerCase();

//     let existingData=details.registration.some((user)=>{
//       return user.email === lowerCaseEmail || user.password === data.password; 
//     });

  
//     if(existingData)
//     {
//       alert("user already exist");
//       return;
//     }

//     let userData=
//     {
//       name:data.name,
//       email:lowerCaseEmail,
//       city:data.city,
//       password:data.password
//     }
//     dispatch(RegInfo(userData))
//     .then((res)=>{
//       console.log("output is",res.data);
//       alert("congratulation");
//       navigate('/login');
//     })

//     .catch((errors)=>console.log("Errors are",errors));
//   };

//   return (

//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",backgroundColor: '#1976d2' }}> 
//       <form onSubmit={handleSubmit(submitHandle)}
//       style={{
//         background: 'linear-gradient(to right,white,white,white)', 
//         borderRadius:"5px",
//         width:"350px",
//         padding: '20px',
//       }}
//       >
//            <h2 style={{ textAlign: 'center', color: '#1976d2' }}>Registration Form</h2> 
//       <div style={{marginBottom:"15px"}}>     
//         <label htmlFor="name" className='labeling'
//         style={{color:"red",fontWeight:"600"}}
//         >Name:</label>
//         <input type="text"
//         style={{
//           width:"90%",
//           borderRadius:"10px",
//           border: '1px solid #ccc',
//           padding:"8px"
//         }}
//         id="name" {...register("name",{required:"name is required"})} /><br/>
//       </div>  


//       <div style={{marginBottom:"15px"}}> 
//         <label htmlFor="email" 
//         style={{color:"red",fontWeight:"600"}}
//         className='labeling'>Email:</label>
//         <input type="text" 
//         style={{
//           width:"90%",
//           borderRadius:"10px",
//           border: '1px solid #ccc',
//           padding:"8px"
//         }}
//         id="email" {...register("email",{required:"email is required"})}/>
//       </div>  



//       <div style={{marginBottom:"15px"}}>
//         <label htmlFor="pass"
//          style={{color:"red",fontWeight:"600"}}
//         >Password</label>
//         <input type="password"
//         style={{
//           width:"90%",
//           borderRadius:"10px",
//           border: '1px solid #ccc',
//           padding:"8px"
//         }}
//         id="pass" {...register("password",{required:"password is required"})}/>
//       </div>  
    
//         <button type="submit"
//         style={{
//           backgroundColor:"#007bff",
//           color:"white",
//           width:"95%",
//           padding:"8px",
//           border:"none",
//           borderRadius:"4px",
//           marginBottom:"15px"
//         }}
//         >Submit</button>

//       <button type="submit"
//         style={{
//           backgroundColor:"red",
//           color:"white",
//           width:"95%",
//           padding:"8px",
//           border:"none",
//           borderRadius:"4px"
//         }}
//         >
//         <Link to="/login" style={{color: "white", textDecoration:"none"}}>
//         Already have Account?</Link></button>
        

//       </form>      
//     </div>
//   )
// }

// export default Registration;


import React from 'react';
import { useForm } from 'react-hook-form';
import details from '../database/db.json';
import { Link, useNavigate } from 'react-router-dom';
import { RegInfo } from '../redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Registration = () => {
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandle = (data) => {
        const lowerCaseEmail = data.email.toLowerCase();

        const existingData = details.registration.some((user) => {
            return user.email === lowerCaseEmail || user.password === data.password;
        });

        if (existingData) {
            alert("User already exists");
            return;
        }

        const userData = {
            name: data.name,
            email: lowerCaseEmail,
            city: data.city,
            password: data.password,
        };

        dispatch(RegInfo(userData))
            .then((res) => {
                console.log("Output is", res.data);
                alert("Congratulations! You have registered successfully.");
                navigate('/login');
            })
            .catch((errors) => console.log("Errors are", errors));
    };

    return (
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#1976d2' }}>
            <Row className="justify-content-center">
                <Col>
                <h2>Registration</h2>
                    <Form onSubmit={handleSubmit(submitHandle)} className="p-5 rounded shadow-lg" style={{ background: '#fff' }}>
                        
                        <Form.Group controlId="formName" className="mb-4 text-start">
                            <Form.Label style={{ fontWeight: 'bold', color: '#333' }}>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                {...register("name", { required: "Name is required" })}
                                isInvalid={!!errors.name}
                                style={{ padding: '10px', borderRadius: '10px' }}
                            />
                            <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-4 text-start">
                            <Form.Label style={{ fontWeight: 'bold', color: '#333' }}>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                {...register("email", { required: "Email is required" })}
                                isInvalid={!!errors.email}
                                style={{ padding: '10px', borderRadius: '10px' }}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-4 text-start">
                            <Form.Label style={{ fontWeight: 'bold', color: '#333' }}>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                {...register("password", { required: "Password is required" })}
                                isInvalid={!!errors.password}
                                style={{ padding: '10px', borderRadius: '10px' }}
                            />
                            <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Button 
                            type="submit" 
                            className="w-100 py-2" 
                            style={{
                                background: 'linear-gradient(90deg, #007bff, #00d4ff)',
                                border: 'none',
                                borderRadius: '30px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                transition: 'background 0.3s ease',
                            }}
                        >
                            Register
                        </Button>

                        <div className="text-center mt-3">
                                <Link to="/login" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}>
                                    Already have an account? Login
                                </Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Registration;
