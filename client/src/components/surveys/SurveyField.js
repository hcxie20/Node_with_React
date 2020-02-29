// single label and text input
import React from "react"

import {Form} from "react-bootstrap"


export default ({input, label, meta:{error, touched}}) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control {...input} className="border-top-0 border-left-0 border-right-0"/>
            {/* <input {...input} />  */}
            {/* all functions like onBlur, onDrop, ... */}
            {/* equals to onBlur={input.onBlur}, ... */}
            <Form.Text className="bg-danger text-white text-center mx-auto" style={{borderRadius: "10px", width: "60%"}}>
                {touched && error}
            </Form.Text>
        </Form.Group>
    );
};