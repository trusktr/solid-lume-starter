/* @jsx-import-source lume */

import { createSignal } from "solid-js";
import Counter from "~/components/Counter";
import "./index.css";
import {useDefaultNames} from 'lume'

useDefaultNames()

export default function Home() {
  const [count, setCount] = createSignal(0)
  
  return (
    <main>
      <h1>Hello 3D world! {count}</h1><br />
      <Counter onCount={setCount} />
      <div style="width: 300px; height: 400px">
        <lume-scene webgl>
          <lume-point-light intensity="0.6" color="white" position="0 0 500"></lume-point-light>
          <lume-box align-point="0.5 0.5" mount-point="0.5 0.5 0.5" color="deeppink" size="50 50 50"></lume-box>
        </lume-scene>
      </div>
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
