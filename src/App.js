import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import "./App.css";

const App = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>REACT REDUX</h1>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default App;
