import { Filter } from '../../types/filter';

type TaskFilterProps = {
    setFilter: (filter: Filter) => void;
}

function TaskFilter({ setFilter }: TaskFilterProps): JSX.Element {
    return (
        <div>
            <button onClick={() => setFilter(Filter.All)}>All</button>
            <button onClick={() => setFilter(Filter.Completed)}>Completed</button>
            <button onClick={() => setFilter(Filter.Incomplete)}>Incomplete</button>
        </div>
    );
};

export default TaskFilter;