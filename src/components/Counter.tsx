import { createEffect, createSignal } from "solid-js";
import "./Counter.css";

export default function Counter(props) {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    if (props.onCount) props.onCount(count())
  })

  return (
    <button class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count}
    </button>
  );
}
