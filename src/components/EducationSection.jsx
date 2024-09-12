import Field from "./Field";
import ArrayRow from "./ArrayRow";
import { useState } from "react";

function EducationSection({data, updateData, isEditing, deleteItem}) {

    const { degree, university, start_date, end_date, grade, id} = data;

    const [isCollapsed, setCollapse] = useState(true);
    const changeCollapse = () => {setCollapse(!isCollapsed)};

    const updateArrayData = (key, value) => {
        updateData(key, value, id);
    }

    return (
        <div className="array-block">
        <ArrayRow title={degree} isCollapsed={isCollapsed} changeCollapse={changeCollapse} deleteItem={deleteItem} id={id}/>
        {!isCollapsed && (
            <div className="block-fields">
                <Field
                    title="Degree"
                    inputType="text"
                    placeholder="Enter degree title"
                    data={degree}
                    updateData={updateArrayData}
                    isEditing={isEditing}
                    dataKey="degree"
                    key="degree"
                />
                <Field
                    title="University"
                    key="university"
                    inputType="text"
                    placeholder="Enter university name"
                    data={university}
                    updateData={updateArrayData}
                    isEditing={isEditing}
                    dataKey="university"
                />
                <div className="date-fields">
                    <Field
                        title="Start date"
                        key="start_date"
                        inputType="text"
                        placeholder="Enter start date"
                        data={start_date}
                        updateData={updateArrayData}
                        isEditing={isEditing}
                        dataKey="start_date"
                    />
                    <Field
                        title="End date"
                        key="end_date"
                        inputType="text"
                        placeholder="Enter end date"
                        data={end_date}
                        updateData={updateArrayData}
                        isEditing={isEditing}
                        dataKey="end_date"
                    />
                </div>
                <Field
                    title="Grade"
                    key="grade"
                    inputType="text"
                    placeholder="Enter grade received"
                    data={grade}
                    updateData={updateArrayData}
                    isEditing={isEditing}
                    dataKey="grade"
                />
            </div>
        )}
        </div>
    )
}

export default EducationSection