import { useState, useEffect } from "react";
import Wrap from "./components/multistep/Wrap";
import FormWrap from "./form2/FormWrap";

function App() {
  return (
    <div className="App flex min-h-screen w-full place-content-center">
      <FormWrap />
    </div>
  );
}

export default App;
