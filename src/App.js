import "./App.css";
import React, { useState } from "react";
import "./index.css";
import { Loanform } from "./components/variables";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>;

const App = () => (
  <>
    <h1>Student Loan Calculator</h1>
    <h2>Designed to calculate monthly payments.</h2>
    <Loanform />
  </>
);

export default App;
