import { react, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import logo from "./logo.svg";
import "./App.css";
const url = "https://www.course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
