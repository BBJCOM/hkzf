import React, { Component } from 'react'
// BrowserRouter:浏览器路由器  Router：路由器   Route：路线
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/home"
import List from "./pages/list"
import News from "./pages/news"
import Profile from "./pages/profile"
import HKLayout from "./components/HKLayout"
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Route path="/" exact render={(props) =><HKLayout><Home></Home></HKLayout>}></Route>
        <Route path="/list"  render={(props) =><HKLayout><List></List></HKLayout>}></Route>
        <Route path="/news"  render={(props) =><HKLayout><News></News></HKLayout>}></Route>
        <Route path="/profile"  render={(props) =><HKLayout><Profile></Profile></HKLayout>}></Route>
        </Router>
      </div>
    )
  }
}
