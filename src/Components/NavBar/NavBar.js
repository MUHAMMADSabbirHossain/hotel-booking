import React from 'react';
import "./NavBar.css";
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const NavBar = () => {

    const [user, authLoading, authError] = useAuthState(auth);
    const [signOut, signOutLoading, signOutError] = useSignOut(auth);

    return (
        <nav className='mb-5 pb-5'>
            <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary fixed-top">
                <Container fluid>
                    <Navbar.Brand href="#" className='text-primary fw-semibold'>Hotel-Booking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button className="me-2" variant="outline-primary">Search</Button>

                            {
                                user ? <Link to="/login"><Button onClick={() => signOut()} variant="outline-primary">SignOut</Button></Link>
                                    :
                                    <Link to="/login"><Button variant="outline-primary">Login</Button></Link>
                            }

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default NavBar;