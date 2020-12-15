import React, { useState } from "react";
import styled from "styled-components";
import "./styles.css";

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  outline: none;
  background-color: tomato;
  color: white;
  margin: 0px 20px;
`;
export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    console.log("count increased!");
    setCount(count + 1);
  };
  const handleDecrement = () => {
    console.log("count decreased!");
    setCount(count - 1);
  };
  const handleReset = () => {
    console.log("count reset!");
    setCount(0);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{count}</h1>
      <StyledButton onClick={handleIncrement}>+</StyledButton>
      <StyledButton onClick={handleDecrement} disabled={count === 0}>
        -
      </StyledButton>
      <StyledButton onClick={handleReset}>Reset</StyledButton>
    </div>
  );
}
