import React, { useState } from "react";
import "../index.css";
import Form from "react-bootstrap/Form";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>;

const questions = [
  "What's your current loan amount?",
  "What's the interest rate of your loans? (in decimals)",
  "What is your timeline for paying off your loans (in years)?",
];

const Loanform = () => {
  const [currentPrincipal, setPrincipal] = useState(0);
  const [currentInterest, setInterest] = useState(0);
  const [currentRate, setRate] = useState(0);

  const monthlyPayment = () => {
    const principal = Number(currentPrincipal);
    const interest = Number(currentInterest) / 12;
    const rate = Number(currentRate) * 12;
    const numerator = interest * (1 + interest) * rate;
    const denom = (1 + interest) * rate - 1;
    const result = numerator / denom;
    return Math.round(principal * result);
  };

  return (
    <div>
      <div>
        <Form class="form-horizontal">
          <Form.Group controlID="principal">
            <Form.Label>{questions[0]}</Form.Label>
            <Form.Control
              placeholder="Loan Amount"
              aria-label="Loan Amount"
              aria-describedby="basic-addon1"
              type="text"
              value={currentPrincipal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <Form.Group controlID="interest">
            <Form.Label>{questions[1]}</Form.Label>
            <Form.Control
              placeholder="Interest Rate"
              aria-label="Interest Rate"
              aria-describedby="basic-addon1"
              type="text"
              value={currentInterest}
              onChange={(e) => setInterest(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <Form.Group controlID="rate">
            <Form.Label>{questions[2]}</Form.Label>
            <Form.Control
              placeholder="Payment Length (in Years)"
              aria-label="Years"
              aria-describedby="basic-addon1"
              type="text"
              value={currentRate}
              onChange={(e) => setRate(e.target.value)}
            />
          </Form.Group>
        </Form>
        <div class="result">Monthly Payment: {monthlyPayment()}</div>
      </div>
    </div>
  );
};
export { Loanform };
