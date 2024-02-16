import React from "react";
import myContext from "./myContext";

function myState(props) {
  const state = {
    name: "smart Global Solution",
    rollno: 15,
  };
  const color = "red";

  return (
    <myContext.Provider value={{ state, color }}>
      {props.children}
    </myContext.Provider>
  );
}

export default myState;
