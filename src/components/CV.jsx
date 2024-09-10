import "../styles/CV.css";
import EducationCV from "./EducationCV";
import EmploymentCV from "./EmploymentCV";

export default function CV({data}) {

    return (
        <section className="cv">
            <h1>{data.personal.name}</h1>
            <div className="contact-info">
                <p>{data.personal.address}</p>
                <p>{data.personal.phone}</p>
                <p>{data.personal.email}</p>
            </div>
            <p className="summary">{data.personal.summary}</p>
            <h2>Professional experience</h2>
            {data.employment_history.map(job => (
                <EmploymentCV job={job} key={crypto.randomUUID()}/>
            ))}
            <h2>Education</h2>
            {data.education.map(education => (
                <EducationCV education={education} key={crypto.randomUUID()}/>
            ))}
            <h2>Personal interests</h2>
            <ul>
                {data.personal_interests.map(i => (
                    <li key={crypto.randomUUID()}>{i}</li>
                ))}
            </ul>
        </section>
    )
}