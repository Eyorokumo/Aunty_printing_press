import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Order from "./Pages/order/Order";
import Cart from "./Pages/cart/Cart";
import Dashboard from "./Pages/dashboard/Dashboard";
import Nopage from "./Pages/nopage/Nopage";
import Mystate from "./Context/data/myState";

function App() {
  return (
    <Mystate>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route element={<Nopage />} /> {/* Wildcard route */}
        </Routes>
      </Router>
    </Mystate>
  );
}

export default App;
