import Field from "./Field";
import ArrayRow from "./ArrayRow";
import ArrayField from "./ArrayField";
import { useState } from "react";

function EducationSection({data, updateData, isEditing, deleteItem, addArrayItem, deleteArrayItem}) {

    const { degree, university, start_date, end_date, grade, coursework, activities, id} = data;

    const [isCollapsed, setCollapse] = useState(true);
    const changeCollapse = () => {setCollapse(!isCollapsed)};

    const updateArrayData = (key, value, itemId = null) => {
        updateData(key, value, id, itemId);
    }

    const addArrayItemIndexed = (key) => {
        addArrayItem(key, id);
    }

    const deleteArrayItemIndexed = (key, itemId) => {
        deleteArrayItem(key, id, itemId);
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
                <ArrayField
                    title="Modules"
                    key="coursework"
                    inputType="text"
                    placeholder="Enter module title"
                    data={coursework}
                    updateData={updateArrayData}
                    addArrayItem={addArrayItemIndexed}
                    deleteRow={deleteArrayItemIndexed}
                    isEditing={isEditing}
                    dataKey="coursework"
                />
                <Field
                    title="Activities"
                    key="activities"
                    inputType="textarea"
                    placeholder="Enter extra-curricular activities"
                    data={activities}
                    updateData={updateArrayData}
                    isEditing={isEditing}
                    dataKey="activities"
                />
            </div>
        )}
        </div>
    )
}

export default EducationSection