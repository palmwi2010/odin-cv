import Field from "./Field";

function EducationSection({data, updateData, isEditing}) {

    const { degree, university, start_date, end_date, grade, id} = data;

    return (
        <div className="block-fields">
            <Field
                title="Degree"
                inputType="text"
                placeholder="Enter degree title"
                data={degree}
                updateData={updateData}
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
                updateData={updateData}
                isEditing={isEditing}
                dataKey="university"
            />
            <Field
                title="Start date"
                key="start_date"
                inputType="text"
                placeholder="Enter start date"
                data={start_date}
                updateData={updateData}
                isEditing={isEditing}
                dataKey="start_date"
            />
            <Field
                title="End date"
                key="end_date"
                inputType="text"
                placeholder="Enter end date"
                data={end_date}
                updateData={updateData}
                isEditing={isEditing}
                dataKey="end_date"
            />
            <Field
                title="Grade"
                key="grade"
                inputType="text"
                placeholder="Enter grade received"
                data={grade}
                updateData={updateData}
                isEditing={isEditing}
                dataKey="grade"
            />
        </div>
    )
}

export default EducationSection