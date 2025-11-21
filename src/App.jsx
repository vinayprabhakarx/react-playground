import React from "react";
import "./App.css";
import SavedTextDisplay from "./components/useState/SavedTextDisplay";
import LiveSearchInput from "./components/useState/LiveSearchInput";
import GreetingToggleButton from "./components/useState/GreetingToggleButton";
import BasicCounter from "./components/useState/BasicCounter";
import CheckboxStatusToggle from "./components/useState/CheckboxStatusToggle";
import CarDetailsUpdater from "./components/useState/CarDetailsUpdater";

function App() {
  return (
    <>
      <h1>React Practice Playground</h1>
      <br />
      <LiveSearchInput />
      <br />
      <GreetingToggleButton />
      <br />
      <BasicCounter />
      <br />
      <SavedTextDisplay />
      <br />
      <CheckboxStatusToggle />
      <br />
      <CarDetailsUpdater />
    </>
  );
}

export default App;
