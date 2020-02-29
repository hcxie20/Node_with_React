import React from "react"
import {Link} from "react-router-dom"

import {Button, Row} from "react-bootstrap";
import AddIcon from '@material-ui/icons/Add';

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <Row>
                <Link to="/surveys/new" className="ml-auto">
                    <Button style={{borderRadius: "25px"}}>
                        <AddIcon/>
                    </Button>
                </Link> 
            </Row>
        </div>   
    );
};

export default Dashboard;