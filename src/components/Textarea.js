import React, {useState} from 'react';

export default function Textarea(props) {
    const onchangeup = ()=>{
      let newtext = text.toUpperCase();
      settext(newtext);

    }
    const onchangelower = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext);
  
      }
      const onchangeclear = ()=>{
        let newtext = " ";
        settext(newtext);
  
      }
     
    const onchangehandler = (event)=>{
        settext(event.target.value); 
    }

    const [text,settext]= useState(" ");
  return (
      <>
      <h1>{props.heading}</h1>
      <div className="form-floating">
  <textarea className="form-control" value={text} id="mybox" onChange={onchangehandler} row="8"></textarea>
  
</div>
<button className="btn btn-primary my-3 mx-2" onClick={onchangeup}>UpperCase</button>
<button className="btn btn-primary my-3 mx-2" onClick={onchangelower}>LowerCase</button>
<button className="btn btn-primary my-3 mx-2" onClick={onchangeclear}>Cleartext</button>



  
  <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  </div>
  </>
  )
}
