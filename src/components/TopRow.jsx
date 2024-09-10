function TopRow({title, isCollapsed, changeCollapse}) {
    return (
        <div className="input-toprow">
            <h2 className="block-title">{title}</h2>
            <button 
                className={`btn-chevron ${isCollapsed ? null:"up"}`}
                onClick={() => changeCollapse()}>
            </button>
        </div>
    )
}

export default TopRow;