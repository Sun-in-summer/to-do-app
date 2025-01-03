
import Task from '../task/task';
import { TaskType } from '../../types/task';
import SortControls from '../sort-controls/sort-controls';



type TaskListProps = {
    tasks: TaskType[];
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    editTask: (taskId: number, newText: string) => void;
    toggleSortOrder: () => void;
    loadMoreTasks: () => void;
    hasMore: boolean;

}

function TaskList({ tasks, toggleTask, deleteTask, editTask, toggleSortOrder, loadMoreTasks, hasMore }: TaskListProps): JSX.Element {
    return (

        <section className="board container">
            <SortControls toggleSortOrder={toggleSortOrder} />
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
            {hasMore && (
                <button className="load-more" type="button" onClick={loadMoreTasks}>
                    Load More
                </button>
            )}
        </section>
    );
};

export default TaskList;