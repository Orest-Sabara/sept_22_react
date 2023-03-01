import React, { useState } from 'react';
import css from './Todo.module.css'

function Task(props) {
    const { id, title, description, status, toggleStatus } = props;

    return (
        <div >
            <div className={css.task}>
                <tbody>
                <tr >
                    <td className={css.wid}>{id}</td>
                    <td className={css.wid}>{title}</td>
                    <td className={css.wid}>{description}</td>
                    <td><div className={css.wid}>
                        <input type="checkbox" checked={status === 'done'} onChange={toggleStatus} />
                    </div></td>
                </tr>
                </tbody>

            </div>
        </div>
    );
}

function TaskHeader() {
    return (
        <div className={css.taskHeader}>
            <table>
                <thead>
                <tr>
                    <th className={css.wid}>ID</th>
                    <th className={css.wid}>Title</th>
                    <th className={css.wid}>Description</th>
                    <th className={css.wid}>Status</th>
                </tr>
                </thead>
            </table>
        </div>
    );
}


function ToDoList() {
    const [tasks, setTasks] = useState([]);

    const addTask = (title, description) => {
        const id = tasks.length;
        const task = { id, title, description, status: 'not done' };
        setTasks([...tasks, task]);
    };

    const toggleStatus = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, status: task.status === 'done' ? 'not done' : 'done' };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div >
            <h1>ToDo List</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const description = e.target.description.value;
                addTask(title, description);
                e.target.reset();
            }}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required />
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" required />
                <button type="submit">Create</button>
            </form>
            <h2>Tasks:</h2>
            <div>
                <TaskHeader />
                {tasks.map(task => (
                    <Task key={task.id} {...task} toggleStatus={() => toggleStatus(task.id)} />
                ))}
            </div>
        </div>
    );
}

export default ToDoList;