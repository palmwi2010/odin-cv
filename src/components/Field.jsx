import "../styles/Field.css";
import { useState } from "react";

export default function Field({title, value, inputType}) {

    const [isEditing, setEditing] = useState(false);
    const [fieldContent, setContent] = useState(value);

    const changeEditing = () => setEditing(!isEditing);
    const updateText = e => setContent(e.target.value)

    const isInputField = inputType != "text"

    return (
        <div className="field">
            <div className="field-toprow">
                <h4 className="field-title">{title}</h4>
                <button className="edit-button" onClick={changeEditing}>
                    {isEditing ? "Confirm":"Edit"}
                </button>
            </div>
            {!isEditing && <p className="field-text">{fieldContent}</p>}
            {isEditing && isInputField && <input className="field-input" value={fieldContent} onChange={updateText} type={inputType}/>}
            {isEditing && !isInputField && <textarea className="field-input" value={fieldContent} onChange={updateText}/>}
        </div>
    )
}