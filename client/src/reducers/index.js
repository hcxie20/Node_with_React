import { combineReducers } from "redux"
import authReducer from "./authReducer"

export default combineReducers({
    auth: authReducer
})

console.log("STRIPE KEY IS : ", process.env.REACT_APP_STRIPE_KEY)
console.log("STRIPE KEY IS : ", process.env.NODE_ENV)

