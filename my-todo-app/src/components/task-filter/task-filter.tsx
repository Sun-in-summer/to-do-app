import { Filter } from '../../types/filter';

type TaskFilterProps = {
    filter: Filter;
    setFilter: (filter: Filter) => void;
    taskCounts: { [key in Filter]: number };
}

function TaskFilter({ filter, setFilter, taskCounts }: TaskFilterProps): JSX.Element {
    return (
        <section className="main__filter filter container">
            <input
                type="radio"
                id="filter__all"
                className="filter__input visually-hidden"
                name="filter"
                checked={filter === Filter.All}
                onChange={() => setFilter(Filter.All)}
            />
            <label htmlFor="filter__all" className="filter__label">
                All <span className="filter__all-count">{taskCounts[Filter.All]}</span>
            </label>

            <input
                type="radio"
                id="filter__completed"
                className="filter__input visually-hidden"
                name="filter"
                checked={filter === Filter.Completed}
                onChange={() => setFilter(Filter.Completed)}
            />
            <label htmlFor="filter__completed" className="filter__label">
                Completed <span className="filter__completed-count">{taskCounts[Filter.Completed]}</span>
            </label>

            <input
                type="radio"
                id="filter__incomplete"
                className="filter__input visually-hidden"
                name="filter"
                checked={filter === Filter.Incomplete}
                onChange={() => setFilter(Filter.Incomplete)}
            />
            <label htmlFor="filter__incomplete" className="filter__label">
                Incomplete <span className="filter__incomplete-count">{taskCounts[Filter.Incomplete]}</span>
            </label>
        </section>
    );
};

export default TaskFilter;