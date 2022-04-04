import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "../../../Utils/store/action/Action";

const TestConfigRedux = () => {
  const counter = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increaseCounter());
  };
  const handleDecrement = () => {
    dispatch(decreaseCounter());
  };
  return (
    <>
      <div style={{ marginTop: 100 }}>
        <div>Count: {counter}</div>
        <button onClick={handleIncrement}>Increase Count</button>
        <button onClick={handleDecrement}>Decrease Count</button>
      </div>
    </>
  );
};

export default TestConfigRedux;
