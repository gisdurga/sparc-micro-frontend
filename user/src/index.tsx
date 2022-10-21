import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "shared_library/dist/index.esm.css";
import Login from "./views/login/Login";
import ProductList from "./views/ProductList";
import Cart from "./views/Cart";


export default function App() {
  const user: any = useSelector((state: any) => state && state.signReducer && state.signReducer.entities);

  return (
    <Router>
      {/* {user && user.token ? < AppRoutes/>
          :  */}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <div className="body flex-grow-1 px-3">
          <Switch>
            <Route exact path='/' component={Login} ></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/product-list" component={ProductList}></Route>
          </Switch>
        </div></div>
    {/* }     */}
    </Router>
  );
}
