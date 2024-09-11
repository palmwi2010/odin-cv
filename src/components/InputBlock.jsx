import "../styles/InputBlock.css";
import Field from "./Field";
import TopRow from "./TopRow";
import PersonalSection from "./PersonalSection";

import { useState } from "react";

function InputBlock({data, updateData, Section}) {

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
            <TopRow title="Personal details" isCollapsed={isCollapsed} changeCollapse={changeCollapse} />
            {!isCollapsed && (
                <div className={!isCollapsed && "block-uncollapsed"}>
                    <Section
                        data={data}
                        updateData={updateData}
                        isEditing={isEditing}
                    />
                    {!isCollapsed &&
                    <button className = "btn" onClick={changeEditing}>
                        {isEditing ? "Save":"Edit"}
                    </button>}
                </div>
            )}
        </div>
    )
}

export default InputBlock