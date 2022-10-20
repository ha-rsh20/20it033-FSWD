import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import GetStudent from "./components/GetStudent";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path={"addStudent/:stdId"} element={<AddStudent />} />
        <Route path="/getStudent" element={<GetStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
