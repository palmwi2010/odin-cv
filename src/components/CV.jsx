import "../styles/CV.css";
import Field from "./Field";

export default function CV() {

    const defaultValues = [
        {'title': 'Address', "value": "Netherwood, Old House Lane, Southwater, West Sussex, RH139DB", "inputType": "text"},
        {'title': 'Email', "value": "joe_bloggs@hotmail.com", "inputType": "email"},
        {'title': 'Mobile', "value": "07999 999 999", "inputType": "number"}
    ]

    return (
        <section className="main">
            <h2>Joe Bloggs</h2>

            <div className="cv-section">
                <h4 className="section-title">Contact information</h4>
                <div className="section-fields">
                    {defaultValues.map(({title, value, inputType}) => {
                        return <Field title={title} value={value} key={title} inputType={inputType}/>
                    })}
                </div>
            </div>


        </section>
    )
}