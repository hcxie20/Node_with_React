import React from "react"
import serverPath from "./serverPath"

import {Container, Jumbotron} from "react-bootstrap"

const Landing = () => {
    return (
        <Container>
            <Jumbotron className="text-center">
                <h2>Send Surveys to Anyone!</h2>
                <a href={serverPath() + this.renderText()} className="btn btn-primary m-4">To your surveys</a>
            </Jumbotron>
            <Container>
                <h1> How to use:</h1>
                <ul>
                    <li>1</li>
                </ul>
            </Container>
        </Container>
    )
}

export default Landing