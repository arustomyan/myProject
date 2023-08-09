import { useState } from "react";
import style from "./counter.module.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className={style.tt}>
      <button onClick={() => setCounter((prev) => prev + 1)}> добавить</button>
      <div className="">{counter}</div>
      <button onClick={() => setCounter((prev) => prev - 1)}>уменьшить</button>
    </div>
  );
};

export default Counter;
