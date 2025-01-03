import { useState } from 'react';

interface TaskInputProps {
    addTask: (taskText: string) => void;
}

function TaskInput({ addTask }: TaskInputProps): JSX.Element {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTask(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add new task"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskInput;