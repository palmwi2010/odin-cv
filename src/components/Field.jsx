import "../styles/Field.css";
import FieldInput from "./FieldInput";

export default function Field({title, dataKey, inputType, placeholder, isEditing, data, updateData}) {

    const updateText = e => {
        updateData(dataKey, e.target.value);
    }

    if (!isEditing) return (
        <div className="field">
            <p className="field-title">{title}</p>
            <p className="field-text">{data}</p>
        </div>
        )

    return (
        <div className="field">
            <label htmlFor={title} className="field-title">{title}</label>
            <FieldInput inputType={inputType} content={data} updateText={updateText} placeholder={placeholder} title={title}/>
        </div>
    )
}