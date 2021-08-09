import React from "react";
import NavBar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about";
import Events from "./components/event.js";
import Footer from "./components/footer.js";
import "boxicons";
function App() {
  /*   var glass = document.querySelector(".glass");
  var glassHeight = glass.clientHeight + "px"; */
  return (
    <div className="container">
      <div className="background">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
      <div className="foreground">
        <main>
          <NavBar />
          {/* <meta name="theme-color" content="#872e4e" media="(prefers-color-scheme: dark)" /> */}
          <section className="glass" /* style={{ height:  glassHeight  }} */>
            <Header />
            <About />
            <Events />
            <Footer />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
