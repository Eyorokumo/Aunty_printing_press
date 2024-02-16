import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import myContext from "../../Context/data/myContext";

function Home() {
  const context = useContext(myContext);
  console.log(context);
  // const { name, rollno } = context;
  const { state, color } = context;
  return (
    <Layout>
      <h1>Name : {state.name}</h1>
      <h1>Class No. 1:{state.rollno}</h1>
      <h1>my Color : {color}</h1>
    </Layout>
  );
}

export default Home;
