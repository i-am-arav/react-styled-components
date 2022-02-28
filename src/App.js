import "./styles.css";
import React from "react";
import { Button } from "./components/common";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Button>Primary Button</Button>
      <Button disabled>Disabled Button </Button>
      <Button secondary> Secondary Button </Button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
