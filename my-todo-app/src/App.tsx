import { useState, useEffect } from 'react';
import TaskInput from './components/task-input/task-input';
import TaskFilter from './components/task-filter/task-filter';
import TaskList from './components/task-list/task-list';
import { TaskType } from './types/task';
import { Filter } from './types/filter';
import dayjs from 'dayjs';
import { SortOrder } from './types/sort';
import { DEFAULT_TASK_QTY_ON_PAGE } from './const';



function App(): JSX.Element {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [filter, setFilter] = useState<Filter>(Filter.All);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Asc);
  const [visibleTasks, setVisibleTasks] = useState(DEFAULT_TASK_QTY_ON_PAGE);



  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    console.log('savedTasks', savedTasks);
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);

      const tasksWithDayjs = parsedTasks.map((task: TaskType) => ({
        ...task,
        date: dayjs(task.date),
      }));

      setTasks(tasksWithDayjs);
    }
  }, []);


  useEffect(() => {

    if (tasks.length) {
      console.log('tasks.length', tasks.length)

      localStorage.setItem('tasks', JSON.stringify(tasks));

    }
  }, [tasks]);



  const loadMoreTasks = () => {
    setVisibleTasks((prev) => prev + DEFAULT_TASK_QTY_ON_PAGE);
  };

  const sortTasksByDate = (tasks: TaskType[]) => {
    return tasks.sort((a, b) => {
      return sortOrder === SortOrder.Asc
        ? dayjs(a.date).diff(dayjs(b.date))
        : dayjs(b.date).diff(dayjs(a.date));
    });
  };

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc));
  };

  const addTask = (taskText: string) => {

    if (!taskText.trim()) return;
    const newTask: TaskType = {
      id: Date.now(),
      text: taskText,
      completed: false,
      date: dayjs(),
    };
    setTasks([...tasks, newTask]);
    console.log('+');
  };

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId: number, newText: string) => {
    if (!newText.trim()) return;
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, text: newText } : task
    ));
  };



  const filterMap = {
    [Filter.Completed]: (task: TaskType) => task.completed,
    [Filter.Incomplete]: (task: TaskType) => !task.completed,
    [Filter.All]: () => true,
  };



  const filteredTasks = tasks.filter(filterMap[filter]);
  const filteredAndSortedTasks = sortTasksByDate(filteredTasks);
  const slicedTasks = filteredAndSortedTasks.slice(0, visibleTasks);

  const taskCounts = {
    [Filter.All]: tasks.length,
    [Filter.Completed]: tasks.filter(filterMap[Filter.Completed]).length,
    [Filter.Incomplete]: tasks.filter(filterMap[Filter.Incomplete]).length,
  };

  const hasMore = visibleTasks < filteredAndSortedTasks.length;
  console.log(visibleTasks, filteredAndSortedTasks.length, hasMore);

  return (
    <div>
      <TaskInput addTask={addTask} />
      <TaskFilter
        filter={filter}
        setFilter={setFilter}
        taskCounts={taskCounts} />
      <TaskList
        tasks={slicedTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleSortOrder={toggleSortOrder}
        hasMore={hasMore}
        loadMoreTasks={loadMoreTasks} />
    </div>
  );
};

export default App;