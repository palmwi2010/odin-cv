import Field from "./Field";
import "../styles/ArrayField.css";

function ArrayField({title, data, placeholder, isEditing, updateData, inputType, dataKey, addArrayItem=null, deleteRow = null}) {

    if (!Array.isArray(data)) throw Error("Expected array for ArrayFields");

    const Fields = data.map((d, index) => (
        <div className = "field-with-delete" key={`${dataKey}-container`}>
            <Field
            title=""
            key={index}
            inputType={inputType}
            placeholder={placeholder}
            data={d}
            updateData={(key, value) => updateData(key, value, index)}
            isEditing={isEditing}
            dataKey={dataKey}
            />
            {isEditing && <button 
                className={`btn-delete`}
                onClick={()=>deleteRow(dataKey, index)}>
            </button>}
        </div>
    ))

    return (
    <div className="field">
        <p className="field-title">{title}</p>
        {Fields}
        {isEditing && <button className = "btn secondary" onClick={() => addArrayItem(dataKey)}>+</button>}
    </div>
    )
}

export default ArrayField;