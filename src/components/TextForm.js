import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [text, setText] = useState("");

  // This function will clear the text written in text-area
  const handleClearClick = () => {
    let newtext = '';
    setText(newtext);
    props.showAlert('Text Cleared.', 'success');
  }

  // This function will change the text to UPPERCASE
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert('Converted to UPPERCASE.', 'success');
  }

  // this function will change the text to lowercase
  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert('Converted to lowercase.', 'success');
  }

  // with this function, user will be able to type in text-area 
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  // This function will clear extra spaces ,,,, text.split(/[ ]+/); will split the written text with spaces and then  newtext.join(" ") will join the text while keeping single space in between the text.
  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert('Extra spaces removed.', 'success');
  }

  const handleFirstWordCap = () => {
    const newtext = text.toLowerCase();
    setText(newtext.charAt(0).toUpperCase() + newtext.slice(1))
    props.showAlert('First Word Capitalised.', 'success');
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text Copied.', 'success');
  }

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#00112a' }} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea style={{ backgroundColor: props.mode === 'dark' ? '#00112a' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter Your Text"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleFirstWordCap}>Sentence Case</button>
      </div>

      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter(word => word !== '').length} words and {text.replace(/ /g, "").length}characters</p>
        <p>{0.008 * text.split(/\s+/).filter(word => word !== '').length} Minute read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something above to preview it."}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
  para: PropTypes.string,
}

TextForm.defaultProps = {
  para: "Your Para Here",
}
