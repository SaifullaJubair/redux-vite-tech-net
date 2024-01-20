import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="">
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
      </div>
    </>
  );
}

export default App;
