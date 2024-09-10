function EducationCV({education}) {

    const {degree, university, start_date, end_date, grade, coursework, activities} = education;

    return (
        <div>
            <h3>{university}</h3>
            <h4>{degree}, {start_date} - {end_date}, {grade}</h4>
            <div className="inline-cv">
                <h4>Modules: </h4>
                <ul className="inline-list">
                    {coursework.map(c => (
                        <li key={crypto.randomUUID()}>{c}</li>
                    ))}
                </ul>
            </div>
            <p>{activities}</p>
        </div>
    )
}

export default EducationCV;