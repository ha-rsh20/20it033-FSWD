import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import AddResult from "./components/AddResult";
import ModifyResult from "./components/ModifyResult";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { useState } from "react";
import MyAlert from "./components/MyAlert";

function App() {
  const [alert, setAlert] = useState(null);

  let showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar
          title="Student Result System"
          menu1="Add Student Result"
          menu2="Update/Delete Student Result"
        />
        <MyAlert alert={alert} />
        <Routes>
          <Route
            path={"AddResult"}
            element={<AddResult showAlert={showAlert} />}
          />
          <Route
            path={"AddResult/:resultId"}
            element={<AddResult showAlert={showAlert} />}
          />
          <Route
            path={"ModifyResult"}
            element={<ModifyResult showAlert={showAlert} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
