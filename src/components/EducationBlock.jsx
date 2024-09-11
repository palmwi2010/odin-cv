import "../styles/InputBlock.css";
import Field from "./Field";
import TopRow from "./TopRow";
import { useState } from "react";

function InputBlock({data, updateData}) {

    const {name, address, email, phone, summary} = data;

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
                    <div className="block-fields">
                        <Field
                            title="Name"
                            inputType="text"
                            placeholder="Enter first and second name"
                            data={name}
                            updateData={updateData}
                            isEditing={isEditing}
                            dataKey="name"
                            key="name"
                        />
                        <Field
                            title="Address"
                            key="address"
                            inputType="text"
                            placeholder="Enter address"
                            data={address}
                            updateData={updateData}
                            isEditing={isEditing}
                            dataKey="address"
                        />
                        <Field
                            title="Phone number"
                            key="phone"
                            inputType="text"
                            placeholder="Enter phone number"
                            data={phone}
                            updateData={updateData}
                            isEditing={isEditing}
                            dataKey="phone"
                        />
                        <Field
                            title="Email address"
                            key="email"
                            inputType="text"
                            placeholder="Enter email"
                            data={email}
                            updateData={updateData}
                            isEditing={isEditing}
                            dataKey="email"
                        />
                        <Field
                            title="Professional summary"
                            key="summary"
                            inputType="textarea"
                            placeholder="Enter a professional summary"
                            data={summary}
                            updateData={updateData}
                            isEditing={isEditing}
                            dataKey="summary"
                        />                                                
                    </div>
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