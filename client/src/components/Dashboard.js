import React from "react"
import {Link} from "react-router-dom"

import SurveyList from "./surveys/SurveyList"

import serverPath from "./serverPath"

import {Button, Row} from "react-bootstrap";
import AddIcon from '@material-ui/icons/Add';

const Dashboard = () => {
    return (
        <div>
            <h1 className="mx-auto">Dashboard</h1>
            <div>Add credit to your account to use our service!</div>
            <div>TEST MODE: click on Add Credits, use the credit card number 4242 4242 4242 4242 and any expire time in the future and any cvs.</div>

            <SurveyList />
            <Row>
                <Link to={serverPath() + "/surveys/new"} className="ml-auto">
                    <Button style={{borderRadius: "25px"}}>
                        <AddIcon/>
                    </Button>
                </Link> 
            </Row>
        </div>   
    );
};

export default Dashboard;