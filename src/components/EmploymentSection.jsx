import Field from "./Field";
import ArrayRow from "./ArrayRow";
import { useState } from "react";

function EducationSection({data, updateData, isEditing, deleteItem}) {

    const { job_title, company, location, start_date, end_date, id} = data;

    const [isCollapsed, setCollapse] = useState(true);
    const changeCollapse = () => {setCollapse(!isCollapsed)};

    const updateArrayData = (key, value) => {
        updateData(key, value, id);
    }

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

export default EducationSection