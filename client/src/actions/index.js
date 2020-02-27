import axios from "axios"
import {FETCH_USER} from "./types"

export const fetchUser = () => async (dispatch) => {
        console.log(process.env.NODE_ENV)
        const server_path = (process.env.NODE_ENV === "Production")? "/app":""

        const res = await axios.get(server_path + "/api/current_user")
        dispatch({type: FETCH_USER, payload: res.data})
    }

export const handleToken = (token) => async (dispatch) => {
    const res = await axios.post("/api/stripe", token)

    dispatch({type: FETCH_USER, payload: res.data})
}
