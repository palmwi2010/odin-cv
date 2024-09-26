import "../styles/InputBlock.css";
import TopRow from "./TopRow";

import { useState } from "react";

function InputBlock({title, data, updateData, Section, addNew=null, deleteItem=null, addArrayItem = null, deleteArrayItem = null}) {

    const [isEditing, setEditing] = useState(false);
    const [isCollapsed, setCollapse] = useState(true);

    const changeEditing = () => {
        setEditing(!isEditing);
    }

    const changeCollapse = () => {
        setEditing(false)
        setCollapse(!isCollapsed);
    }

    const isArray = Array.isArray(data);

    const renderSections = () => {
        if (isArray) {
            if (title === "Interests") {
                return (
                <Section
                    data={data}
                    updateData={updateData}
                    deleteArrayItem={deleteArrayItem}
                    addArrayItem={addArrayItem}
                    isEditing={isEditing}
                />)
            }

            return data.map(d => (
                <Section
                    data={d}
                    updateData={updateData}
                    isEditing={isEditing}
                    deleteItem={deleteItem}
                    key={d.id}
                    addArrayItem = {addArrayItem}
                    deleteArrayItem = {deleteArrayItem}
                />
            ));
        } else {
            return (
                <Section
                    data={data}
                    updateData={updateData}
                    isEditing={isEditing}
                />
            );
        }
    };

    return (
        <div className="input-block">
            <TopRow title={title} isCollapsed={isCollapsed} changeCollapse={changeCollapse} />
            {!isCollapsed && (
                <div className={!isCollapsed && "block-uncollapsed"}>
                    {renderSections()}
                    {!isCollapsed &&
                    <div className="input-buttons">
                        {addNew && (
                            <button className = "btn secondary" onClick={addNew}>+</button>
                        )}
                        <button className = "btn" onClick={changeEditing}>
                            {isEditing ? "Save":"Edit"}
                        </button>
                    </div>}
                </div>
            )}
        </div>
    )
}

export default InputBlock