import React, { useState } from "react";
import List from "./List";
import "./App.css";

function App() {
  return (
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
        <List />
      </section>
    </main>
  );
}

export default App;
