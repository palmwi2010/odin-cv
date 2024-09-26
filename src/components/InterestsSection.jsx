import ArrayField from "./ArrayField";

function InterestsSection({data, updateData, isEditing, addArrayItem, deleteArrayItem}) {

    return (
        <div className="block-fields">
            <ArrayField
                title=""
                key="interests"
                inputType="textarea"
                placeholder="Enter interest"
                data={data}
                updateData={updateData}
                addArrayItem={addArrayItem}
                deleteRow={deleteArrayItem}
                isEditing={isEditing}
                dataKey="interests"
            />
        </div>
    )
}

export default InterestsSection