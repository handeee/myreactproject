import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./components/HomePage";
import Types from "./components/Types";
import Game from "./components/Game";
import Writer from "./components/Writer";
import Selectedtypes from "./Selectedtypes";
import Homepage2 from "./components/Homepage2";
import Register from "./components/Register";


function App() {
  const [data2, setData2] = useState([])
  //const  applyfetch=()=>{
  // fetch('http://localhost:8080/api')
  //   .then((response) => response.json()) // JSON formatında cevabı al
  //   .then((data) => {
  //     setData2(data.fruits)
  //   })
  // }
  // useEffect(()=>{
  //   applyfetch();
  // },[])

  return (
    <div className="App">
      <MyNavbar />
      
      <Routes>
        <Route path="/" element={
          <div className="main-container" >
            <div className="homepage2-container">
              <Homepage2 />
            </div>
            <div className="homepage-container">
              <HomePage />
            </div>
          </div>
        } />
        <Route path="/turler" element={<Types />} />
        <Route path="/turler/:tur" element={<Selectedtypes />} />
        <Route path="/Neokusamoyna" element={<Game/>}/>
        <Route path="/yazarlar" element={<Writer/>}></Route>
        <Route path="/register" element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;
