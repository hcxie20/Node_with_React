import React, {Component} from "react"
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'

import Header from "./Header"
<<<<<<< HEAD
import Landing from "./Landing"
const Dashboard = () => <h2>DashBoard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

=======

const Dashboard = () => <h2>DashBoard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>
>>>>>>> 70f4b177f3c1bc4e89dd69dc4e1aa70a201745a8


class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <div className="container">
                            <Route exact={true} path="/" component={Landing} />
                            <Route exact={true} path="/surveys" component={Dashboard} />
                            <Route path="/surveys/new" component={SurveyNew} />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    } 
}

export default connect(null, actions)(App)