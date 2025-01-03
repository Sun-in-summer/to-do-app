
import Task from '../task/task';
import { TaskType } from '../../types/task';



type TaskListProps = {
    tasks: TaskType[];
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    editTask: (taskId: number, newText: string) => void;
    toggleSortOrder: () => void;

}

function TaskList({ tasks, toggleTask, deleteTask, editTask, toggleSortOrder }: TaskListProps): JSX.Element {
    return (

        <section className="board container">
            <div className="board__sort-list">
                <button className="board__sort-item">SORT BY DEFAULT</button>
                <button className="board__sort-item" onClick={toggleSortOrder}>SORT BY DATE </button>
            </div>
            <div className="board__tasks">
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                        editTask={editTask} />

                ))}
            </div>
            <button className="load-more" type="button">load more</button>
        </section>
    );
};

export default TaskList;