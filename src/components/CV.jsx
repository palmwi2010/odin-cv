import "../styles/CV.css";

export default function CV({data}) {

    return (
        <section className="cv">
            <h1>{data.name}</h1>
        </section>
    )
}