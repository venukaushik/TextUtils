import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted to UPPERCASE", "success")
    }

    const handleLoClick = () => {
        let newText2 = text.toLowerCase();
        setText(newText2)
        props.showAlert("Text converted to lowercase", "success")

    }

    const handleClearClick = () => {
        let newClearText = "";
        setText(newClearText)
        props.showAlert("Text Cleared", "success")

    }

    const handleCopy = () => {
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to Clipboard", "success")

    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3 my-4">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#494747' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UPPERCASE</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words & {text.length} Characters</p>
                <p>Time taken to read Text :- {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Your Text Above To Preview It Here"}</p>
            </div>
        </>
    )
}
