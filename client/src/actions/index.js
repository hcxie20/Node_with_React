import axios from "axios"
import {FETCH_USER} from "./types"

function serverPath() {
    const server_path = (process.env.NODE_ENV === "production")? "/app":""
    return server_path
}

export const fetchUser = () => async (dispatch) => {
        const res = await axios.get(serverPath() + "/api/current_user")
        dispatch({type: FETCH_USER, payload: res.data})
    }

export const handleToken = (token) => async (dispatch) => {
    const res = await axios.post(serverPath() + "/api/stripe", token)

    dispatch({type: FETCH_USER, payload: res.data})
}
