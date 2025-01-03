type SortControlsProps = {
    toggleSortOrder: () => void;
}

function SortControls({ toggleSortOrder }: SortControlsProps): JSX.Element {
    return (
        <div className="board__sort-list">

            <button className="board__sort-item" onClick={toggleSortOrder}>SORT BY DATE </button>
        </div>
    )
}

export default SortControls;