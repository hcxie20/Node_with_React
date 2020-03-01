import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchSurveys} from "../../actions"

import {Card, Container} from "react-bootstrap"

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys(){
        return this.props.surveys.reverse().map(survey => {
            return (
                <Card key={survey._id} className="m-2">
                    <Card.Header>{survey.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>{survey.title}</Card.Title>
                        <Card.Text>
                            {survey.body}
                        </Card.Text>
                        <Card.Text>
                            <Container className="px-auto">
                                <Card.Link href="#">Yes:  {survey.yes}</Card.Link>
                                <Card.Link href="#">No: {survey.no}</Card.Link>
                            </Container>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted float-right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</small>
                    </Card.Footer>
                </Card>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {surveys: state.surveys}
}

export default connect(mapStateToProps, {fetchSurveys})(SurveyList)