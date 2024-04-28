import Buttons from "./components/Buttons";
import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 500);
  };
  return (
    <div className="App">
      <Alert alert={alert} />
      <Buttons handleInput={showAlert} />
    </div>
  );
}

export default App;
