import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/pages/home/Home.js";
import Login from "./components/pages/login/Login.js";
import StudentProfile from "./components/pages/student/Profile.js";

import TeacherProfile from "./components/layout/teacher/Profile.js";
import SetTest from "./components/layout/teacher/SetTest.js";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/student" component={StudentProfile} />
                    <Route path="/teacher" component={TeacherProfile} />
                    <Route path="/settest" component={SetTest} />
                </div>
            </Router>
        );
    }
}

export default App;
