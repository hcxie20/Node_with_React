import axios from "axios"
import {FETCH_USER, FETCH_SURVEYS} from "./types"

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

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post(serverPath() + "/api/surveys", values)
    history.push(serverPath() + "/surveys")
    dispatch({type: FETCH_USER, payload: res.data})
}

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get(serverPath() + "/api/surveys");
    dispatch({type: FETCH_SURVEYS, payload: res.data})
}

export const deleteSurvey = (surveyId) => async dispatch => {
    await axios.get(serverPath() + "/api/surveys/" + surveyId + "/delete")
    const res = await axios.get(serverPath() + "/api/surveys");
    dispatch({type: FETCH_SURVEYS, payload: res.data})
}

export const submitSignin = (values) => async dispatch => {
    console.log("Signin action")
    await axios.get(serverPath() + "/api/signin/", values)
    // const res = await axios.post(serverPath() + "/api/surveys", values)
    // history.push(serverPath() + "/surveys")
    // dispatch({type: FETCH_USER, payload: res.data})
}

