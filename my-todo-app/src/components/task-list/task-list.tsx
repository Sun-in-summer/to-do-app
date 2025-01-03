
import Task from '../task/task';
import { TaskType } from '../../types/task';



type TaskListProps = {
    tasks: TaskType[];
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

function TaskList({ tasks, toggleTask, deleteTask }: TaskListProps): JSX.Element {
    return (
        <div className="board__tasks">
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask} />

            ))}
        </div>
    );
};

export default TaskList;