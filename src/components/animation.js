import React from 'react'
import Typed from 'typed.js';
// import ReactDOM from "react-dom";
const TypedReactHooksDemo = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Learn.',
        'Grow .',
        'Excel .'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="wrap">
      {/* <h1>Typed.js</h1> */}

      <div className="type-wrap hero_title">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>

      {/* <button onClick={() => typed.current.start()}>Start</button> */}

    </div>
  );
}

export default TypedReactHooksDemo;