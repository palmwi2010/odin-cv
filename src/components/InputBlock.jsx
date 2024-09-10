import "../styles/InputBlock.css";
import fieldData from "../fieldData";
import Field from "./Field";
import { useState } from "react";

function InputBlock({fieldName}) {

    const [isEditing, changeEditing] = useState(false);
    const [isCollapsed, setCollapse] = useState(false);

    const changeCollapse = () => {
        if (isEditing) changeEditing(!isEditing)
        setCollapse(!isCollapsed);
    }

    const data = fieldData[fieldName];
    if (!data) throw new Error(`Field ${fieldName} not found in data`);

    const {title, fields} = data;

    const topRow = (
        <div className="input-toprow">
            <h2 className="block-title">{title}</h2>
            <button 
                className={`btn-chevron ${isCollapsed ? null:"up"}`}
                onClick={() => changeCollapse(!isCollapsed)}>
            </button>
        </div>
    )

    return (
        <div className="input-block">
            {topRow}
            <div className={!isCollapsed && "block-uncollapsed"}>
                <div className="block-fields">
                    {fields.map(({title, value, inputType, placeholder}) => (<Field
                            title={title}
                            value={value}
                            inputType={inputType}
                            placeholder={placeholder}
                            isEditing={isEditing}
                            isCollapsed={isCollapsed}
                            key={title}
                        />
                    ))}
                </div>
                {!isCollapsed &&
                <button className = "btn" onClick={() => changeEditing(!isEditing)}>
                    {isEditing ? "Save":"Edit"}
                </button>}
            </div>
        </div>
    )
}

export default InputBlock