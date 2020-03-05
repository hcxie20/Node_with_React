import React, {Component} from "react"
import {reduxForm} from "redux-form"
import SigninForm from "./SigninForm"

class SigninNew extends Component {
    state = {showReview: false};

    submit = value => {
        console.log(value)
    }

    renderContent() {
        return <SigninForm onSubmit={this.submit}/>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    };
};

export default reduxForm({
    form: "SigninForm"
})(SigninNew);