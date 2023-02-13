/** @jsxImportSource react */

import React, { useState } from "react";

export const ReactCounter = (props) => {
  const [count, setCount] = useState(0);
    console.log(props);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{5}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

// export const Counter = ReactCounter;
