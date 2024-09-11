import "../styles/InputBlock.css";
import fieldData from "../fieldData";
import Field from "./Field";
import TopRow from "./TopRow";
import { useState } from "react";

function InputBlock({fieldName, cvData, updateData}) {

    const data = fieldData[fieldName];
    if (!data) throw new Error(`Field ${fieldName} not found in data`);
    const {title, fields} = data;

    const [isEditing, setEditing] = useState(false);
    const [isCollapsed, setCollapse] = useState(true);

    const changeEditing = () => {
        setEditing(!isEditing);
    }

    const changeCollapse = () => {
        setEditing(false)
        setCollapse(!isCollapsed);
    }

    return (
        <div className="input-block">
            <TopRow title={title} isCollapsed={isCollapsed} changeCollapse={changeCollapse} />
            <div className={!isCollapsed && "block-uncollapsed"}>
                <div className="block-fields">
                    {fields.map(({title, id, inputType, placeholder}) => (<Field
                            title={title}
                            id={id}
                            inputType={inputType}
                            placeholder={placeholder}
                            isEditing={isEditing}
                            isCollapsed={isCollapsed}
                            cvData={cvData}
                            updateData={updateData}
                            category={fieldName}
                            key={title}
                        />
                    ))}
                </div>
                {!isCollapsed &&
                <button className = "btn" onClick={changeEditing}>
                    {isEditing ? "Save":"Edit"}
                </button>}
            </div>
        </div>
    )
}

export default InputBlock