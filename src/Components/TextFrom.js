import React,{useState} from 'react'

export default function TextFrom(props) {
    const hadleupClick =() =>{ 
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("coverted to upper case" ,"success")
    }
    const hadlelowClick =() =>{ 
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("coverted to lower case" ,"success")
    }
    const Clear=() =>{ 
        let newText=" ";
        setText(newText)
        props.showAlert(" Clear Text" ,"success")
    }
    const handleOnChange =(event) =>{
        setText(event.target.value);
    }
    
    const handlecopy = ()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copy" ,"success")
    }
    const[text,setText]=useState("");
    return (
        <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode === 'dark'?'#042743':'white',color:props.mode === 'dark'?'white':'#042743'}}></textarea>
            </div>
            <button className="btn btn-success mx-2" onClick={hadleupClick}>Convert To Uppercase </button>
            <button className="btn btn-primary mx-2" onClick={hadlelowClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={Clear}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Code</button>
            <div className='container my-3' style={{color:props.mode === 'dark'?'white':'#042743'}}>
                <h2>You Text Summary</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008 *text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </div>
    )
}
