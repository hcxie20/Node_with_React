import {FETCH_USER} from "../actions/types"

export default function(state = null, action) {
<<<<<<< HEAD
=======
    console.log(action)
>>>>>>> 70f4b177f3c1bc4e89dd69dc4e1aa70a201745a8
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false // null, false, or data
        default:
            return state;
    }
}