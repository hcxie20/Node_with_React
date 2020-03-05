// const Signin = () => {
//     return (
//         <div>
//             Signin
//             <Container className="w-50 mt-2">
//                 <Container className="border p-2 rounded">
//                     <Form>
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control type="email" placeholder="Enter email" />
//                             <Form.Text className="text-muted">
//                             We'll never share your email with anyone else.
//                             </Form.Text>
//                         </Form.Group>

//                         <Form.Group controlId="formBasicPassword">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" placeholder="Password" />
//                         </Form.Group>
//                         <Button variant="primary" type="submit" className="align-self-center">
//                             Signin
//                         </Button>
//                     </Form>
//                 </Container>
//             </Container>
//         </div>   
//     );
// };

// export default Signin;

import _ from "lodash"
import React, {Component} from "react"
import {reduxForm, Field} from "redux-form"
import SigninField from "./SiginField"
import {Link} from "react-router-dom"

import {Form, Button, Container} from "react-bootstrap"
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

import FIELDS from "./formFields"

import {submitSignin} from "../../actions"


class SigninForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return <Field key={name} component={SigninField} type="text" label={label} name={name} />
        });
    }

    render() {
        return (
            <div>
                <Container className="w-50 mt-2">
                    <Container className="border p-2 rounded">
                        <Form onSubmit={() => this.props.handleSubmit(this.props.onSurveySubmit)}>
                            {this.renderFields()}
                            <Form.Group>
                                <Button variant="primary" type="submit" size="lg" className="px-auto">Sign In<DoneIcon/></Button>
                            </Form.Group>
                        </Form>
                    </Container>
                </Container>
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

    if (values[FIELDS[1].name]!==values[FIELDS[2].name]){
        errors[FIELDS[2].name] = "Password doesn't match"
    }

    return errors;
}

export default reduxForm({
    validate: validate,
    form: "signinForm",
    destroyOnUnmount: false
})(SigninForm);