import "../styles/Field.css";
import FieldInput from "./FieldInput";

export default function Field({title, id, inputType, placeholder, isEditing, isCollapsed, cvData, updateData, category}) {

    const content = cvData[category][id];

    const updateText = e => {
        updateData({...cvData, [category]: {...cvData[category], [id]:e.target.value}});
    }

    if (isCollapsed) return (<p className="field-summary">{content}</p>)

    if (!isEditing) return (
        <div className="field">
            <p className="field-title">{title}</p>
            <p className="field-text">{content}</p>
        </div>
        )

    return (
        <div className="field">
            <label htmlFor={title} className="field-title">{title}</label>
            <FieldInput inputType={inputType} content={content} updateText={updateText} placeholder={placeholder} title={title}/>
        </div>
    )
}