import _ from "lodash"
import React, {Component} from "react"
import {reduxForm, Field} from "redux-form"
import SurveyField from "./SurveyField"
import {Link} from "react-router-dom"

import validateEmails from "../../utils/validateEmails"

import {Form, Button} from "react-bootstrap"
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

import FIELDS from "./formFields"

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Form.Group>
                        <Link to="/surveys">
                            <Button variant="warning" size="lg">CANCEL<ClearIcon/></Button>
                        </Link>
                        <Button variant="primary" type="submit" size="lg" className="float-right">NEXT<DoneIcon/></Button>
                    </Form.Group>
                </Form>
            </div>
        );
    };
};

function validate(values) {
    const errors = {};

    _.each(FIELDS, ({name}) => {
        if (!values[name]) {
            errors[name] = "You must provide a " + name;
        }
    })

    errors.recipients = validateEmails(values.recipients || "")

    return errors;
}

export default reduxForm({
    validate: validate,
    form: "surveyForm",
    destroyOnUnmount: false
})(SurveyForm);