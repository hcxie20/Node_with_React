import React, {Component} from "react"
import StripeCheckout from "react-stripe-checkout"
import {Button} from "react-bootstrap"
import {connect} from "react-redux"
import * as actions from "../actions"

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name="Emaily"
                description="5 for 5 email credits"
                amount={500} // 5 dollers
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <Button variant="primary">Add Credits</Button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions) (Payments)