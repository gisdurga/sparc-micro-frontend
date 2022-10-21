import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "../views/Cart";
import ProductList from "../views/ProductList";
export default function AppRoutes() {
  return (
    <div>
      <Switch>
        <Route path="/cart">
            <Cart />
        </Route>
        <Route path="/product-list">
            <ProductList />
        </Route>
      </Switch>
    </div>
  );
}
