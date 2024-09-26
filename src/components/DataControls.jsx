import "../styles/DataControls.css";

function DataControls({loadData, clearData}) {

    return (
        <div className="input-block">
            <div className="data-buttons">
                <button className="btn secondary" onClick={clearData}>Clear example data</button>
                <button className="btn" onClick={loadData}>Load example data</button>
            </div>
        </div>
    )
}

export default DataControls