import "../styles/CV.css";
import EducationCV from "./EducationCV";
import EmploymentCV from "./EmploymentCV";

export default function CV({personalData, employmentSections, educationSections, interests}) {

    const {name, address, phone, email, summary} = personalData;

    return (
        <section className="cv">
            <h1>{name}</h1>
            <div className="contact-info">
                <p>{address}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
            <p className="summary">{summary}</p>
            <h2>Professional experience</h2>
            {employmentSections.map(job => (
                <EmploymentCV job={job} key={crypto.randomUUID()}/>
            ))}
            <h2>Education</h2>
            {educationSections.map(education => (
                <EducationCV education={education} key={crypto.randomUUID()}/>
            ))}
            <h2>Personal interests</h2>
            <ul>
                {interests.map(i => (
                    <li key={crypto.randomUUID()}>{i}</li>
                ))}
            </ul>
        </section>
    )
}