// review of the survey
import _ from "lodash"
import React from "react";
import {connect} from "react-redux"
import {Button, Row, Col} from "react-bootstrap"
import formFields from "./formFields"
import {withRouter} from "react-router-dom"
import * as actions from "../../actions"
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
    const viewFields = _.map(formFields, field => {
        return (
            <div key={field.label} className="p-2">
                <Row>
                    <div className="text-muted">{field.label}</div>
                </Row>
                <Row>
                    <div className="p-2 border border-left-0 border-right-0 border-top-0 w-100">
                        {formValues[field.name]}
                    </div>
                </Row>
            </div>
            
        )
    })
    return (
        <div>
            {viewFields}
            <Row>
                <Col sm={3}>
                    <Button variant="warning" size="lg" onClick={onCancel}>
                        Go Back
                    </Button>
                </Col>
                <Col sm={{span: 4, offset: 5}}>
                    <Button variant="primary" type="submit" size="lg" className="float-right" 
                        onClick={() => submitSurvey(formValues, history)}>
                        Send Survey<MailOutlineIcon/>
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

function mapStateToProps(state){
    console.log(state)
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));