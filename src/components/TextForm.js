import React, {useState} from 'react'
// import PropTypes from 'prop-types'
export default function TextForm(props) {
  const [text, setText] = useState("");
    const handleUpClick = ()=>{
        // console.log("Uppercase case clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("convert to upper case" ,"success");
    }
   
    const handleLoClick = ()=>{
        console.log("Upper case clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("convert to Lower case" ,"success");
    }
    const handleCalClick = ()=>{
        console.log("Claer case clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Clear" ,"success");
    }
    const hadleCopy = () => {
      navigator.clipboard.writeText(text)
      props.showAlert(" Copy Text" ,"success");
    }
    const handleOnChange = (event)=>{
        console.log(" on change");

        setText(event.target.value);
    }
    const handleExtraSpace = () =>{
      // use ajex
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Remove Extra Space" ,"success");
    }
    // text="new text";//wrong way to change state
    // setText("new text");//wright way to change state 
  return (
    <>
    <div className='container'  style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
      
      <textarea className="form-control" value={text} onChange={(e)=>setText(e.target.value)} style={{background :props.mode==='light'?'black':'white', color: props.mode==='dark'?'black':'white'}} id="Mybox" rows="8"></textarea>
      </div>
    </div>
    {/* mx,my mt ml = ek class he jo margin deti he x axia me  */}
      <button disebled={text.length=== 0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert To Upper Case </button>
      <button disebled={text.length=== 0}   className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert To Lower  Case </button>
      <button disebled={text.length=== 0} className="btn btn-success mx-1 my-1" onClick={handleCalClick}>Clear</button>
      <button disebled={text.length=== 0} className="btn btn-success mx-1 my-1" onClick={handleOnChange}> HandleOnChange</button>
      <button disebled={text.length=== 0} className="btn btn-success mx-1 my-1" onClick={hadleCopy}> Copy</button>
      <button disebled={text.length===  0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpace}> Remove Extraspace</button>
    <div className='container my-3'  style={{color: props.mode==='dark'?'white':'black'}} >
    {/* my-3 this give a space b/w upper div  */}
    <h1>YOUR TEXT SUMMARY</h1>
    /\s+/=for white  space extra and new line
    <p>{text.split("/\s+/ ").filter((element)=>{return - element.length !== 0}).length} Words And {text.length} Characters</p>
    {/* {text.split{" "}.length} =this give a array jisme words count karege space ke baad hoge  */}
    {/* {text.length}= yhe character dega */}
    <p>{0.008 * text.split(" ").filter((element)=>{return - element.length !== 0}).length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing To Previwe"}</p>
{text}
    </div>
    </>
    
  )
}

