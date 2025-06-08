"use client";
import { FC, useState } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center w-[400px] p-4">
        <h1>Count {count}</h1>
        <div className="flex items-center gap-3">
          <button onClick={() => setCount((prev) => (prev += 1))}>
            Increase
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
