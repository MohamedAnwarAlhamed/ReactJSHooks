import { useState } from "react";

const useCounter = (val, step) => {
  const [count, setCount] = useState(val);

   const Increment = ()=> {
    setCount(count + step);
  }

   const Decrement = () => {
    setCount(count - step);
  }

  return [count, Increment, Decrement];
}

export default useCounter;