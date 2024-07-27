import React, { useCallback, useEffect, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const UseCallback = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);


  const handleAge = () => {
    setAge(age + 1);
  };

  // const handleAge = useCallback(() => {
  //   setAge(age + 1);
  // }, [age]);

  // syntax of useCallback() hook : useCallback(() => {}, [])

  const handleSalary = () => {
    setSalary(salary + 10000);
  };

  // const handleSalary = useCallback(() => {
  //   setSalary(salary + 10000);
  // }, [salary]);

  return (
    <div>
      <Title />
      <Count count={age} text="Age" />
      <Button handleFunction={handleAge}>Age Button</Button>
      <Count count={salary} text="Salary" />
      <Button handleFunction={handleSalary}>Salary Button</Button>
    </div>
  );
};

export default UseCallback;
