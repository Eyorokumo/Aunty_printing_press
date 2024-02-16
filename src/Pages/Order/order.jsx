import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import myContext from "../../Context/data/myContext";

function Order() {
  const context = useContext(myContext);
  const { name, rollno } = context;
  return (
    <Layout>
      Order
      <h1>Name:{name} </h1>
      <h1>Class:{rollno}</h1>
    </Layout>
  );
}

export default Order;
