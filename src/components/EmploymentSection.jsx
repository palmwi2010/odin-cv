import Field from "./Field";
import ArrayRow from "./ArrayRow";
import ArrayField from "./ArrayField";
import { useState } from "react";

function EmploymentSection({data, updateData, isEditing, deleteItem, addArrayItem, deleteArrayItem}) {

    const { job_title, company, location, start_date, end_date, responsibilities, id} = data;

    const [isCollapsed, setCollapse] = useState(true);
    const changeCollapse = () => {setCollapse(!isCollapsed)};

    const updateArrayData = (key, value, itemId = null) => {
        updateData(key, value, id, itemId);
    }

    const addArrayItemIndexed = (key) => {
        addArrayItem(key, id)
    };

    const deleteArrayItemIndexed = (key, itemId) => {
        deleteArrayItem(key, id, itemId)
    };

    return (
        <div className="array-block">
        <ArrayRow title={company} isCollapsed={isCollapsed} changeCollapse={changeCollapse} deleteItem={deleteItem} id={id}/>
        {!isCollapsed && (
            <div className="block-fields">
                <Field
                    title="Company"
                    inputType="text"
                    placeholder="Enter company name"
                    data={company}
                    updateData={updateArrayData}
                    isEditing={isEditing}
                    dataKey="company"
                    key="company"
                />
                <Field
                    title="Role"
                    key="job_title"
                    inputType="text"
                    placeholder="Enter university name"
                    data={job_title}
                    updateData={updateArrayData}
                    isEditing={isEditing}
                    dataKey="job_title"
                />
                <Field
                    title="Location"
                    key="location"
                    inputType="text"
                    placeholder="Enter location"
                    data={location}
                    updateData={updateArrayData}
                    isEditing={isEditing}
                    dataKey="location"
                />
                <ArrayField
                    title="Responsibilities"
                    key="responsibilities"
                    inputType="textarea"
                    placeholder="Enter responsibility"
                    data={responsibilities}
                    updateData={updateArrayData}
                    addArrayItem={addArrayItemIndexed}
                    deleteRow={deleteArrayItemIndexed}
                    isEditing={isEditing}
                    dataKey="responsibilities"
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
            </div>
        )}
        </div>
    )
}

export default EmploymentSection