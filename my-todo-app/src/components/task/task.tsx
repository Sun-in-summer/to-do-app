
import { useState } from 'react';
import { TaskType } from '../../types/task';



type TaskProps = {
    task: TaskType;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    editTask: (taskId: number, newText: string) => void;
}

function Task({ task, toggleTask, deleteTask, editTask }: TaskProps): JSX.Element {

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const taskClass = task.completed ? 'card card--pink  card--done' : 'card card--black';

    const handleEditButtonClick = () => {
        if (isEditing && editText.trim()) {
            editTask(task.id, editText.trim());
        }
        setIsEditing(!isEditing);
    };


    return (
        <article className={taskClass}>
            <div className="card__form">
                <div className="card__inner">
                    <div className="card__control">
                        <button type="button" className="card__btn card__btn--edit" onClick={() => deleteTask(task.id)}>
                            delete
                        </button>
                        <div><input type="checkbox" checked={task.completed} className="card__btn card__btn--archive" onChange={() => toggleTask(task.id)} />

                            <span className='card__btn' >
                                done
                            </span></div>

                        <button
                            type="button"
                            className="card__btn card__btn--favorites"
                            onClick={handleEditButtonClick}
                        >
                            {isEditing ? 'save' : 'edit'}
                        </button>
                    </div>

                    <div className="card__color-bar" >
                        <svg className="card__color-bar-wave" width="100%" height="10">
                            <use href="/img/wave.svg#wave"></use>
                        </svg>
                    </div>

                    <div className="card__textarea-wrap">
                        {isEditing ? (
                            <input
                                className="card__text-input"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                        ) : (
                            <p className="card__text">{task.text}</p>
                        )}
                    </div>

                    <div className="card__settings">
                        <div className="card__details">
                            <div className="card__dates">
                                <div className="card__date-deadline">
                                    <p className="card__input-deadline-wrap">
                                        <span className="card__date">{` ${task.date?.format('DD-MMM')} ${task.date?.format('HH:mm')}`}</span>
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