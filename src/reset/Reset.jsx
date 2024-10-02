import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import details from '../database/db.json';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../redux/slice/authSlice';

function Reset() {
    const {register,handleSubmit,formState,watch} = useForm();
    const { errors } = formState;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const typedEmail = watch('email');

    const submitHandle = (data) => {
        const user = details.registration.find((user) => user.email === typedEmail);

        if (!user) {
            console.log("User not found");
            alert("User with this email doesn't exist");
            return;
        }

        const myuser = {
            id: user.id, 
            password: data.password || user.password,
            email: data.email || user.email
        };

        dispatch(resetPassword(myuser))
            .then((res) => {
                alert("Password successfully changed");
                navigate('/login'); 
            })
            .catch((error) => {
                console.log("There was an issue:", error);
            });
    };

    return (
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#1976d2' }}>
            <Row className="justify-content-center">
                <Col>
                    <Form onSubmit={handleSubmit(submitHandle)} className="p-4 rounded shadow-lg" style={{ background: '#fff' }}>

                        <Form.Group controlId="formEmail" className="mb-4">
                            <Form.Label style={{ fontWeight: 'bold', color: '#333' }}>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                {...register("email", { required: "Enter the email" })}
                                isInvalid={!!errors.email}
                                style={{ padding: '10px', borderRadius: '10px' }}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-4">
                            <Form.Label style={{ fontWeight: 'bold', color: '#333' }}>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your new password"
                                {...register("password", { required: "Enter the password" })}
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
                            Reset Password
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Reset;
