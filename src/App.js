import React from "react";
import "./styles.css";
import useEffectHook1 from "./components/useEffectHook1";
import HookCounterTwo from "./components/HookCounterTwo";
export default function App() {
  return (
    <div className="App">
      <useEffectHook1 />
      <HookCounterTwo />
    </div>
  );
}
