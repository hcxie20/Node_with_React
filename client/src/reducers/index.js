import { combineReducers } from "redux"
import authReducer from "./authReducer"
import {reducer as reduxForm} from "redux-form"

export default combineReducers({
    auth: authReducer,
    form: reduxForm
})

console.log("STRIPE KEY IS : ", process.env.REACT_APP_STRIPE_KEY)
console.log("STRIPE KEY IS : ", process.env.NODE_ENV)

