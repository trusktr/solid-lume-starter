import Counter from "~/components/Counter";
import "./index.css";

export default function Home() {
  const [count, counterButton] = <Counter />
  
  return (
    <main>
      <h1>Hello 3D world! {count}</h1>
      {counterButton}
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps and{" "}
        <a href="https://lume.io" target="_blank">
          lume.io
        </a>{" "}
        to learn how to use LUME's 3D elements.
      </p>
    </main>
  );
}
