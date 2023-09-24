import React, { useRef } from 'react';
import "./Login.css";
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { Link } from 'react-router-dom';


const Login = () => {


    const emailRef = useRef();
    const passwordRef = useRef();


    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);


    const handleFormLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password);
    };



    return (


        <div md="w-25" className='container w-50'>

            <h2 className='text-secondary'>Please Login</h2>

            <Form onSubmit={handleFormLogin}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className=''>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
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

                <p>Don't have any Account? <Link className='text-warning text-decoration-none' to="/register">Register Now.</Link></p>

                <Button variant="primary" type="submit">Login</Button>

            </Form>


        </div>
    );
};

export default Login;