import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
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
            >
              &minus;
            </button>

            <div>{count}</div>

            <button
              type="button"
              className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
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
