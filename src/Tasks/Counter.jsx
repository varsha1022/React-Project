import { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [type, setType] = useState("even");

    function increment() {
        const randomNumber = Math.floor(Math.random() * 101);
        let newCount;
        if (count % 2 === 0) {
            newCount = Math.min(count + randomNumber);
        } else {
            newCount = Math.max(0, count - randomNumber);
        }

        setCount(newCount);
        setType(newCount % 2 === 0 ? "even" : "odd");
    }

    return (
        <>
            <div className="container">
               <h2>Count {count}</h2>
                <p>Count is {type} </p>
                <button onClick={increment}>Increment</button>
                <h6>Increase by Random Numbers between 0 to 100</h6>
            </div>
        </>
    );
};

export default Counter;
