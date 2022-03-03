import React, { useState } from "react";
//importing useState hooks from react.
//there are many hooks available useState is one  of the hook types.


const Textform = (props) => {

  const handleUpClick =()=>{
    // handling onclick...
    let newText=text.toUpperCase();//setting the new text to uppercase.
    setText(newText)//setting newtext...
  }
  const handleLoClick =()=>{
    // handling onclick...
    let newText=text.toLowerCase();//setting the new text to uppercase.
    setText(newText)//setting newtext...
  }
  // handling on clear 
  const handleclear =()=>{
    let newText='';
    setText(newText)
  }
// handling copy
  const handleCopy =()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  // removing extra spaces
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event)=>{//we are getting this event object.because of the onchange fuction.
    //handling on change..
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter text here.');
  //here text is a varible saying to 'enter text here'(default value..).'
  //whenever the varible text is getting updated it will get updated with the help of setText variable...
  //we can use the text{state} in this page with curly bracket. {text} it will print its default values.
  return (
    <>
      <div className=" container mb-3 my-3" style={{ color:props.mode==='light'?'#042743':'white' }}>
      <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor:props.mode==='light'?'white':'#0E2140', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea> {/*calling the state.. */}
          <button className="btn btn-primary my-2 mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary my-2 mx-2"  onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary my-2 mx-2"  onClick={handleclear}>Clear Text</button>
          <button className="btn btn-primary my-2 mx-2"  onClick={handleCopy}>Copy</button>
          <button className="btn btn-primary my-2 mx-2"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>

      </div> 

      <div className="container my-3" style={{ color:props.mode==='light'?'#0E2140':'white' }}>
      
        <h2>your text summary..</h2>
        <p>{text.split(" ").length} words and {text.length} charasters.</p>
        {/* counting the number of words and the characters.... */}

        <p>{0.008*text.split(" ").length} Minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something to preview it here"}</p>
      </div>
    </>
  );
};

export default Textform;
