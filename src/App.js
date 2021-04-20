import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home.js'
import Login from './Components/Login/Login.js'
import OrderList from './Components/Dashboard/AdminDashboard/OrderList/OrderList';
import AddService from './Components/Dashboard/AdminDashboard/AddService/AddService';
import MakeAdmin from './Components/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin';
import ManageService from './Components/Dashboard/AdminDashboard/ManageService/ManageService';
import Orders from './Components/Dashboard/UserDashboard/Orders/Orders';
import Checkout from './Components/Dashboard/UserDashboard/Checkout/Checkout';
import Review from './Components/Dashboard/UserDashboard/Review/Review';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';

export const LoggedInContext = createContext();
export const serviceContext = createContext();
export const paymentContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedService, setSelectedService] = useState({});
  const [payment, setPayment] = useState({});
  return (
    <LoggedInContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <serviceContext.Provider value={[selectedService, setSelectedService]}>
      <paymentContext.Provider value={[payment, setPayment]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/orderlist">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/addservice">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manageservice">
            <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </paymentContext.Provider>
      </serviceContext.Provider>
    </LoggedInContext.Provider>
  );
}

export default App;
