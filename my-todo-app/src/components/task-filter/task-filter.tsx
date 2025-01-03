
interface TaskFilterProps {
    setFilter: (filter: 'all' | 'completed' | 'incomplete') => void;
}

function TaskFilter({ setFilter }: TaskFilterProps): JSX.Element {
    return (
        <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('incomplete')}>Incomplete</button>
        </div>
    );
};

export default TaskFilter;