import reactLogo from "./assets/react.svg";
import {FaMoon} from "react-icons/fa";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./Component/Country";
import Header from "./Component/Header";

function App() {
  const[dark, setDark] = useState(false)
  function toggleDark(){
    setDark(!dark)
  }
  return (
    <>
      <Header dark={dark} toggleDark={toggleDark}/>
      <Country dark={dark}/>
    </>
  );
}

export default App;
