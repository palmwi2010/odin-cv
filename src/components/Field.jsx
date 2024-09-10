import "../styles/Field.css";
import { useState } from "react";

export default function Field({title, value, inputType, placeholder, isEditing, isCollapsed}) {

    const [fieldContent, setContent] = useState(value);
    const updateText = e => setContent(e.target.value)

    //const isInputField = inputType != "text"

    if (isCollapsed) return (<p className="field-summary">{fieldContent}</p>)

    if (!isEditing) return (
        <div className="field">
            <p className="field-title">{title}</p>
            <p className="field-text">{fieldContent}</p>
        </div>
        )

    return (
        <div className="field">
            <label htmlFor={title} className="field-title">{title}</label>
            <input className="field-input" value={fieldContent} onChange={updateText} type={inputType} placeholder={placeholder} id={title}/>
        </div>
    )
}