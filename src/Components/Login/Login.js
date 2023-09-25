import React, { useRef } from 'react';
import "./Login.css";
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {


    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate("/");
    }


    const handleFormLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(typeof (email), password);

        signInWithEmailAndPassword(email, password);
        console.log(typeof (email), password);

    };



    return (


        <div className='container col-12 col-sm-10 col-md-4 col-lg-3 col-xl-3 col-xxl-2' >

            <h2 className='text-secondary fw-bold'>Please Login</h2>

            <Form onSubmit={handleFormLogin}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className=''>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                {
                    error ? <p className='text-danger'>{error.message}</p> : ""
                }

                <p>Don't have any Account? <Link className='text-warning text-decoration-none' to="/register">Register Now.</Link></p>

                <Button variant="primary" type="submit">Login</Button>

            </Form>


        </div>
    );
};

export default Login;