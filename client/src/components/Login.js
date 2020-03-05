import React from "react"
import {Link} from "react-router-dom"

import serverPath from "./serverPath"

import {Button, Form, Container} from "react-bootstrap";
import AddIcon from '@material-ui/icons/Add';

const Login = () => {
    return (
        <div>
            Login
            <Container className="w-50 mt-2">
                <Container className="border p-2 rounded">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="align-self-center">
                            Login
                        </Button>
                    </Form>
                </Container>
                <Container>
                    <a href={serverPath() + "/signin"} className="btn btn-primary">Sign in to us</a>
                </Container>
                <Container>
                    <a href={serverPath() + "/auth/google"} className="btn btn-danger">Login with Google</a>
                </Container>
            </Container>
        </div>   
    );
};

export default Login;