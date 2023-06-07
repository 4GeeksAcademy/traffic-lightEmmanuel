import React, { useState } from 'react';


const Lights = () => {

    const [ color, setColor] = useState("red");

    const changeColor = () => {
      const arr = ["red", "yellow", "green"];
      const rand = arr[Math.floor(Math.random() * arr.length)];
      setColor(rand);
    };

    
      const [purple, setPurple] = useState(false);
    
      const addPurple = () => {
        setPurple(!purple);
      };

      const handleNewColorClick = () => {
        setColor("purple");
      };
   
    return (
      <div>
        <div className="container">
			    <div className="top"></div>
			    <div className="light">
            <div onClick={() => setColor("red")}
             className={color === "red" ? "redOn red" : "red"}>
              {purple && (
            <div
              className={color === "purple" ? "purple" : "purple"}
                onClick={handleNewColorClick}></div>)}
             </div>
			      <div onClick={() => setColor("yellow")}
            className={color === "yellow" ? "yellowOn yellow" : "yellow"}>
              {purple && (
            <div
              className={color === "purple" ? "purple" : "purple"}
                onClick={handleNewColorClick}></div>)}
            </div>
			      <div onClick={() => setColor("green")}
             className={color === "green" ? "greenOn green" : "green"}>
              {purple && (
            <div
              className={color === "purple" ? "purple" : "purple"}
                onClick={handleNewColorClick}></div>)}</div>  
			    </div>
          </div>
          <div className='boton'>
          <button onClick={changeColor}
             className="btn" > Click for Random!</button>
             <button onClick={addPurple}
             className="btn" > New magic Color!</button>
             </div>
		    </div>
    );
};

export default Lights;

