function EmploymentCV({job}) {

    const {job_title, company, location, start_date, end_date, responsibilities} = job;

    return (
        <div>
            <h3>{company}</h3>
            <h4>{job_title}, {start_date} - {end_date}, {location}</h4>
            <ul>
            {responsibilities.map(r => (
                <li key={crypto.randomUUID()}>{r}</li>
            ))}
            </ul>
            
        </div>
    )
}

export default EmploymentCV;