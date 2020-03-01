import React from "react"
import {Link} from "react-router-dom"

import SurveyList from "./surveys/SurveyList"

import serverPath from "./surverPath"

import {Button, Row} from "react-bootstrap";
import AddIcon from '@material-ui/icons/Add';

const Dashboard = () => {
    return (
        <div>
            Dashboard
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