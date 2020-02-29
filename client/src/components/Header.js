import { Nav, Navbar } from "react-bootstrap"

import React, { Component } from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import Payments from "./Payments"


class Header extends Component {
    renderContext() {
        const serverpath = serverPath()
        // console.log(this.props.auth)
        switch(this.props.auth){
            case null:
                return null
            case false:
                return <Nav.Link href={serverpath + "/auth/google"}>Login With Google</Nav.Link>
            default:
                return [
                    <Nav.Link href="#" key="payments"><Payments /></Nav.Link>,
                    <Nav.Link href="#" key="credits" className="my-auto">Credits: {this.props.auth.credits}</Nav.Link>,
                    <Nav.Link href={serverpath + "/api/logout"} key="logout" className="my-auto">Logout</Nav.Link>
                ]
        }
    }
    render() {
        const serverpath = serverPath()
        // const logo_url = (this.props.auth)? serverpath+"/surveys" : serverpath+"/"
        // console.log(this.props)
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Link to={(this.props.auth)? serverpath+"/surveys" : serverpath+"/"}>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {this.renderContext()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

function serverPath() {
    const server_path = (process.env.NODE_ENV === "production")? "/app":""
    return server_path
}

function mapStateToProps({auth}) {
    return {auth}
}

export default connect(mapStateToProps)(Header)
