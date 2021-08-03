import React from 'react';
import NavBar from './components/navbar.js';
import Header from './components/header.js';
import 'boxicons';
function App() {
  return (
    <div>
      <main>
        <NavBar />
        {/* <meta name="theme-color" content="#872e4e" media="(prefers-color-scheme: dark)" /> */}
        <section className="glass">          
        <Header />
        </section>
       
        
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
   
       
    </div>
    
  );
}

export default App;
