import "../styles/ArrayRow.css";

function ArrayRow({title, isCollapsed, changeCollapse, deleteItem, id}) {
    return (
        <div className="array-toprow">
            <h2 className="array-title">{title}</h2>
            <button 
                className={`btn-delete`}
                onClick={()=>deleteItem(id)}>
            </button>
            <button 
                className={`btn-chevron ${isCollapsed ? null:"up"}`}
                onClick={() => changeCollapse()}>
            </button>
        </div>
    )
}

export default ArrayRow;