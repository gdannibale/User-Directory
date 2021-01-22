import React from "react";
import Header from "./layout/header";
import Employee from "../src/components/employee";
import Wrapper from "./wrapper";


function App(props) {


  return (
    <Wrapper>
    <Header />
    <Employee />
    </Wrapper>
  );
}

export default App;
