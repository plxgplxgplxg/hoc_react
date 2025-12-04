import { useState } from "react";

type Task = {
    id: number;
    title: string;
    done: boolean;
}

export default function TodoApp() {

    const [tasks, setTasks] = useState<Task[]>([]);

    const [title, setTitle] = useState<string>("");

    function addTask() {
        const trimmed = title.trim();
        if (!trimmed) return;

        const newTask: Task = {
            id: Date.now(),
            title: trimmed,
            done: false,
        };

        setTasks([...tasks, newTask]);
        setTitle("");
    }

    function toggleTask(id: number) {
        setTasks(
            tasks.map( (t) => {
                return t.id == id ? {...t, done: !t.done} : t
            })
        );
    }

    function deleteTask(id: number) {
        setTasks(tasks.filter( (t) => t.id != id));
    }

    return (
        <div style={{maxWidth: 400, margin: "0 auto"}}>
            <h1>Todo List</h1>

            <div style={{display: "flex",
                gap: "8px", 
                marginBottom: "16px"}}>
                    <input value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nhap task..."
                    style={{flex: 1, padding: "4px 8px"}} />

                    <button onClick={addTask}>Add</button>
                </div>

                <ul style={{listStyle: "none", padding: 0}}>
                    {tasks.map( (task) => (
                        <li key={task.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            marginBottom: "8px"
                        }}>
                            <input type="checkbox"
                            checked={task.done}
                            onChange={() => toggleTask(task.id)} />

                            <span
                            style={{
                                flex: 1,
                                textDecoration: task.done ? "line-through" : "none",
                            }}>
                                {task.title}
                            </span>

                            <button onClick={() => deleteTask(task.id)}>Xoa cmn di</button>
                        </li>
                    ))}
                </ul>

                {tasks.length === 0 && <p>No tasks available</p>}
        </div>
    )
}