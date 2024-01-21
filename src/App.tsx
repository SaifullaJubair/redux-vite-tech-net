// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  // const { count } = useSelector((state: RootState) => state.counter);
  // const dispatch = useDispatch();
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex m-16">
        <div className="">
          <label htmlFor="Quantity" className="sr-only">
            {" "}
            Quantity{" "}
          </label>

          <div className="flex items-center rounded border border-gray-200">
            <button
              type="button"
              className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
              onClick={() => dispatch(decrement())}
            >
              &minus;
            </button>

            <div>{count}</div>

            <button
              type="button"
              className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="h-10 leading-10 text-gray-600 transition border border-2-gray-500 hover:opacity-75 mx-4 px-2"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            IncrementByAmount
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
