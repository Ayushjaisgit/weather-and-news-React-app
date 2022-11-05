import React from "react";
// import Todo from "./components/todoreact/todo";
// import NavBar from './components/NavBar';
import News from './components/News';
import Temp from "./components/weather/temp";

const App = () => {
  return (
    <>
      <Temp />
      {/* <Todo /> */}
  
        <News/>
    </>
  );
};

export default App;
