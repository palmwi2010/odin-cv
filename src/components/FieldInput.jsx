function FieldInput({inputType, content, updateText, placeholder, title}) {

    const isInputField = inputType === "text";

    if (isInputField) return (
        <input className="field-input" value={content} onChange={updateText} type={inputType} placeholder={placeholder} id={title}/>
    )


    return <textarea className="field-textarea" value={content} onChange={updateText} id={title}/>

}

export default FieldInput;