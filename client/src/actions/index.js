import axios from "axios"
import {FETCH_USER} from "./types"

export const fetchUser = () => async (dispatch) => {
        const res = await axios.get("/api/current_user")
        dispatch({type: FETCH_USER, payload: res.data})
    }
<<<<<<< HEAD

export const handleToken = (token) => async (dispatch) => {
    const res = await axios.post("/api/stripe", token)

    dispatch({type: FETCH_USER, payload: res.data})
}
=======
>>>>>>> 70f4b177f3c1bc4e89dd69dc4e1aa70a201745a8
