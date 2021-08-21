import React from "react";
import NavBar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about";
import Events from "./components/event.js";
import Footer from "./components/footer.js";
import Tingle from "./components/tinglejs.js";
import Modal from "./components/modalb4";
import AOS from "aos";
import "aos/dist/aos.css";
import "boxicons";

AOS.refresh({ useClassNames: true, once: false });

function App() {
  /*   var glass = document.getElementsByClassName("glass");
  glass.style.height = "100px";
  var glassHeight = glass.clientHeight + "px"; */

  return (
    <div className="container_main">
      <div className="background">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
      <div className="foreground">
        <main>
          <NavBar />
          {/* <meta name="theme-color" content="#872e4e" media="(prefers-color-scheme: dark)" /> */}
          <section className="glass" /* style={{ height: glass }} */>
            <Header />
            <About />
            <Events />
            <Footer />
          </section>
        </main>
      </div>
      <Modal />
      {/* <Tingle /> */}
    </div>
  );
}

export default App;
