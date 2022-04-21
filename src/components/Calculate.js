import React, { useState } from 'react'

function Calculate() {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [result, setResult] = useState(0);
  let [operator, setOperator] = useState()

  const handleOnclick = () => {
    switch (operator) {
      case "+": setResult(Number(num1) + Number(num2));
        break;
      case "-": setResult(num1 - num2);
        break;
      case "*": setResult(num1 * num2);
        break;
      case "/": setResult(num1 / num2);
        break;
      default: alert("select the operator");

    }
  }

  return (
    <>

      <div id="cal">

        <input type="text"value={num1} onChange={(e)=>setNum1(e.target.value)} />

        <select name="" onClick={(e) => setOperator(e.target.value)}>
          <option value="+" >+</option>
          <option value="-" >-</option>
          <option value="*" >x</option>
          <option value="/" >/</option>
        </select>
        <input type="text" value={num2} onChange={(e)=>setNum2(e.target.value)} />
        <button onClick={handleOnclick}>=</button>

        <input type="text" value={result} />
      </div>
    </>

  )
}

export default Calculate