// import React from 'react'
// import details from '../database/db.json'
// import {useForm} from 'react-hook-form'
// import {LoginInfo} from '../redux/slice/authSlice'
// import { useDispatch } from 'react-redux'
// import {Link, useNavigate} from 'react-router-dom'


// function Login() {
//     let mynav=useNavigate();
//     let form=useForm();
//     let{register,handleSubmit,formState}=form;
//     let{errors}=formState;
//     let dispatch=useDispatch();

//     let submitHandle=(data)=>{
//         let userData=details.registration.find((user)=>
//             user.email === data.email && user.password === data.password
//         );

//         if(!userData)
//         {
//             alert("wrong credential");
//             return;
//         }

//          dispatch(LoginInfo(userData))
//         .then((res)=>{
//             alert("successful");
//             console.log("RESULT IS",res);
//             window.sessionStorage.setItem("authToken",res.meta.arg.id);
//             mynav('/prod');
//         })

//         .catch((error)=>console.log("error is",error));
//     }

//   return (
//     <div style={{display:"flex",justifyContent:"center",
//     alignItems:"center",height:"100vh",backgroundColor: '#1976d2'}}>

    

//         <form style={{
//             padding: '10px', 
//             background: 'linear-gradient(to right,white,white,white)', 
            
//             borderRadius: '8px', 
//             width: '300px' }}
//             onSubmit={handleSubmit(submitHandle)}
//         >

//         <h2 style={{ textAlign: 'center', color: '#1976d2' }}>Login</h2> 
//         <br></br>
//         <div style={{marginBottom:"15px"}}>    
//             <label for="mymail"
//             style={{color:"red",fontSize:"20px",fontWeight:"600"}}
//             >Email:</label>
//             <input type='email' 
//             placeholder='enter mail'
//             {...register("email",{required:"email is required"})}
//         style={{width:"97%",padding:"5px",borderRadius:"10px", border: '1px solid #ccc'}}    
//             ></input>
//         </div>    

//         <div style={{marginBottom:"15px"}}>
//             <label for="mypassword"
//             style={{color:"red",fontSize:"20px",fontWeight:"600"}}
//             >Password:</label>
//             <input type='password' 
//             {...register("password",{required:"password is required"})}
//             placeholder='enter password'
//         style={{width:"97%",padding:"5px",borderRadius:"10px", border: '1px solid #ccc'}}        
//             ></input>
//         </div>    

//             <button type='submit'
//             style={{width:"100%",
//                 borderRadius:"4px",
//                 padding:"10px",
//                 border:"none",
//                 color:"#fff",
//                 fontSize:"16px",
//                 backgroundColor:"#007bff"}}
//             >Submit</button>
//             <Link to='forget'><p>forget password?</p></Link>
//         </form>
//     </div>
//   )
// }

// export default Login


import React from 'react';
import details from '../database/db.json';
import { useForm } from 'react-hook-form';
import { LoginInfo } from '../redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Login() {
    let mynav = useNavigate();
    let form = useForm();
    let { register, handleSubmit, formState } = form;
    let { errors } = formState;
    let dispatch = useDispatch();

    let submitHandle = (data) => {
        let userData = details.registration.find(
            (user) => user.email === data.email && user.password === data.password
        );

        if (!userData) {
            alert("Wrong credentials");
            return;
        }

        dispatch(LoginInfo(userData))
            .then((res) => {
                alert("Login successful");
                window.sessionStorage.setItem("authToken", res.meta.arg.id);
                mynav('/prod');
            })
            .catch((error) => console.log("Error is", error));
    };

    return (
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#1976d2' }}>
            <Row className="justify-content-center">
                <Col>
                    <Form 
                        onSubmit={handleSubmit(submitHandle)} 
                        className="p-4 rounded shadow-lg"
                        style={{ background: '#fff' }}
                    >
                        <Form.Group controlId="formBasicEmail" className="mb-4">
                            <Form.Label style={{ fontWeight: 'bold', color: '#333' }}>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                {...register("email", { required: "Email is required" })}
                                style={{ padding: '10px', borderRadius: '10px' }}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-4">
                            <Form.Label style={{ fontWeight: 'bold', color: '#333' }}>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                {...register("password", { required: "Password is required" })}
                                style={{ padding: '10px', borderRadius: '10px' }}
                            />
                        </Form.Group>

                        <Button 
                            variant="primary" 
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
                            Login
                        </Button>

                        <div className="text-center mt-3">
                            <Link to="forget" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold'}}>
                                Forgot Password?
                            </Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
