import React, { useState, useRef } from "react";
import "./App.scss";

import Home from "./pages/Home/Home.jsx";
import Problem from "./pages/Problem/Problem.jsx";
import Look from "./pages/Look/Look.jsx";
import Team from "./pages/Team/Team.jsx";
import Events from "./pages/Events/Events.jsx";
import Usp from "./pages/Usp/Usp.jsx";
import GTM from "./pages/GTM/GTM.jsx";
import Score from "./pages/Score/Score.jsx";
import Marketing from "./pages/Marketing/Marketing";
// import BusinessModel from './pages/BusinessModel/BusinessModel.jsx';
import Ask from "./pages/Ask/Ask.jsx";
import Competitors from "./pages/Competitors/Competitors.jsx";
import FashionEvent from "./pages/FashionEvent/FashionEvent.jsx";
// import ThankYou from './pages/ThankYou/ThankYou.jsx';
import Navbar from "./components/Navbar/Navbar.jsx";
import { BM } from "./pages/BusinessModelNew/BM.jsx";
import { TY } from "./pages/ThankYou/TY.jsx";

const App = () => {
  let [clickState, setClickState] = useState(1);

  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);
  const Ref5 = useRef(null);
  const Ref6 = useRef(null);
  const Ref7 = useRef(null);
  const Ref8 = useRef(null);
  const Ref9 = useRef(null);
  const Ref10 = useRef(null);
  const Ref11 = useRef(null);
  const Ref12 = useRef(null);
  const Ref13 = useRef(null);
  const Ref14 = useRef(null);
  //   const Ref15 = useRef(null);

  const handleScreen = (id) => {
    id === 1 && Ref1.current.scrollIntoView({ behavior: "smooth" });
    id === 2 && Ref2.current.scrollIntoView({ behavior: "smooth" });
    id === 3 && Ref3.current.scrollIntoView({ behavior: "smooth" });
    id === 4 && Ref4.current.scrollIntoView({ behavior: "smooth" });
    id === 5 && Ref5.current.scrollIntoView({ behavior: "smooth" });
    id === 6 && Ref6.current.scrollIntoView({ behavior: "smooth" });
    id === 7 && Ref7.current.scrollIntoView({ behavior: "smooth" });
    id === 8 && Ref8.current.scrollIntoView({ behavior: "smooth" });
    id === 9 && Ref9.current.scrollIntoView({ behavior: "smooth" });
    id === 10 && Ref10.current.scrollIntoView({ behavior: "smooth" });
    id === 11 && Ref11.current.scrollIntoView({ behavior: "smooth" });
    id === 12 && Ref12.current.scrollIntoView({ behavior: "smooth" });
    id === 13 && Ref13.current.scrollIntoView({ behavior: "smooth" });
    id === 14 && Ref14.current.scrollIntoView({ behavior: "smooth" });
    //     id === 15 && Ref15.current.scrollIntoView({ behavior: 'smooth' })

    setClickState(id);
  };

  const handleNextClick = () => {
    clickState >= 1 &&
      clickState < 15 &&
      setClickState((clickState = clickState + 1));
    handleScreen(clickState);
  };

  const handleBackClick = () => {
    clickState <= 15 &&
      clickState > 1 &&
      setClickState((clickState = clickState - 1));
    handleScreen(clickState);
  };

  return (
    <div
      className="App"
      //     style={{overflow:'hidden'}}
    >
      <div>
        <Navbar setDataToParent={handleScreen} clickState={clickState} />
      </div>

      <div style={{ minWidth: "100%" }} ref={Ref1}>
        <Home />
      </div>

      <div style={{ minWidth: "100%" }} ref={Ref2}>
        <Problem />
      </div>

      <div
        style={{ minWidth: "100%" }}
        //mon
        ref={Ref3}
      >
        <Look />
      </div>

      <div style={{ minWidth: "100%" }} ref={Ref4}>
        <Team />
      </div>

      <div
        style={{ minWidth: "100%" }}
        // onClick={() => { handleScreen(3) }}
        ref={Ref5}
      >
        <Events />
      </div>

      <div style={{ minWidth: "100%" }} ref={Ref6}>
        <Score clickState={clickState} />
      </div>

      <div
        style={{ minWidth: "100%" }}
        // onClick={() => { handleScreen(11) }}
        ref={Ref7}
      >
        <Ask />
      </div>

      <div
        style={{ minWidth: "100%" }}
        // onClick={() => { handleScreen(11) }}
        ref={Ref8}
      >
        <Competitors />
      </div>

      <div
        style={{ minWidth: "100%" }}
        // onClick={() => { handleScreen(8) }}
        ref={Ref9}
      >
        <Marketing />
      </div>

      <div
        style={{ minWidth: "100%" }}
        // onClick={() => { handleScreen(7) }}
        ref={Ref10}
      >
        <GTM />
      </div>

      <div
        style={{ minWidth: "100%" }}
        // onClick={() => { handleScreen(9) }}
        ref={Ref11}
      >
        <BM />
      </div>

      <div
        style={{ minWidth: "100%" }}
        // onClick={() => { handleScreen(4) }}
        ref={Ref12}
      >
        <Usp clickState={clickState} />
      </div>

      <div
        style={{ minWidth: "100%" }}
        // onClick={() => { handleScreen(4) }}
        ref={Ref13}
      >
        <FashionEvent />
      </div>

      <div
        style={{ minWidth: "100%" }}
        // onClick={() => { handleScreen(12) }}
        ref={Ref14}
      >
        <TY />
        {/* <ThankYou/> */}
      </div>

      {/* <div style={{ minWidth: '100%' }} 
                    // onClick={() => { handleScreen(12) }}
                    ref={Ref15}>
                    <BM/>
               </div> */}

      {/* <BM /> */}

      {/* Main Buttons */}

      <div className="nextButton" onClick={handleNextClick}>
        Next
      </div>
      <div className="backButton" onClick={handleBackClick}>
        Back
      </div>
    </div>
  );
};

export default App;
