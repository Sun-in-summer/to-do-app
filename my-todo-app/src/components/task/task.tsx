
import { TaskType } from '../../types/task';



type TaskProps = {
    task: TaskType;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

function Task({ task, toggleTask, deleteTask }: TaskProps): JSX.Element {

    const taskClass = task.completed ? 'card card--pink  card--done' : 'card card--black';
    return (
        <article className={taskClass}>
            <div className="card__form">
                <div className="card__inner">
                    <div className="card__control">
                        <button type="button" className="card__btn card__btn--edit" onClick={() => deleteTask(task.id)}>
                            delete
                        </button>
                        <input type="checkbox" checked={task.completed} className="card__btn card__btn--archive" onChange={() => toggleTask(task.id)} />

                        <span className='card__btn' >
                            done
                        </span>
                        <button
                            type="button"
                            className="card__btn card__btn--favorites"
                        >
                            favorites
                        </button>
                    </div>

                    <div className="card__color-bar" >
                        <svg className="card__color-bar-wave" width="100%" height="10">
                            <use href="/img/wave.svg#wave"></use>
                        </svg>
                    </div>

                    <div className="card__textarea-wrap">
                        <p className="card__text">{task.text}</p>
                    </div>

                    <div className="card__settings">
                        <div className="card__details">
                            <div className="card__dates">
                                <div className="card__date-deadline">
                                    <p className="card__input-deadline-wrap">
                                        <span className="card__date">23 September</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Task;