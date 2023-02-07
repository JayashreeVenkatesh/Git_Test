import React from "react";
import Header from "./components/Header";
import Benefits from "./components/benefits";
import Features from "./components/features";
import Developer from "./components/developer";
import Bestpart from "./components/bestPart";
import Demo from "./components/demo/demo";
import Footer from "./components/footer";


function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header/>
      <Benefits />
      <Features />
      <Developer />
      <Bestpart />
      <Demo />
      <Footer/>
    </div>
  );
}

export default App;
