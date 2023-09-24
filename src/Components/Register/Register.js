import React, { useRef } from 'react';
import "./Register.css";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {


    const emailRef = useRef();
    const passwordRef = useRef();

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);


    const handleFormRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        createUserWithEmailAndPassword(email, password);

    };


    return (
        <div md="w-25" className='container w-50'>

            <h2 className='text-secondary'>Please Register</h2>

            <Form onSubmit={handleFormRegister}>

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

                <p>Already have any Account? <Link className='text-warning text-decoration-none' to="/login">Login Now.</Link></p>

                <Button variant="primary" type="submit">Register</Button>
            </Form>


        </div>
    );
};

export default Register;