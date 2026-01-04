import { useEffect, useState } from "react";
import api from "../services/api";
import "../App.css";

export default function Dashboard({ setIsAuth }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  // 🔹 fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks", err);
    }
  };

  // 🔹 add task
  const addTask = async () => {
    if (!title.trim()) return;

    try {
      await api.post(
        "/tasks",
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTitle("");
      fetchTasks();
    } catch (err) {
      console.error("Error adding task", err);
    }
  };

  // 🔹 delete task
  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task", err);
    }
  };

  // 🔹 logout (IMPORTANT)
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false); // 🔥 triggers route change immediately
  };

  // 🔹 load tasks on dashboard open
  useEffect(() => {
    let isMounted = true;

    const loadTasks = async () => {
      try {
        const res = await api.get("/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (isMounted) {
          setTasks(res.data);
        }
      } catch (err) {
        console.error("Error fetching tasks", err);
      }
    };

    loadTasks();

    return () => {
      isMounted = false;
    };
  }, [token]);

  return (
    <div className="container">
      <div className="card">
        <h2>Dashboard</h2>

        <button className="logout" onClick={logout}>
          Logout
        </button>

        <input
          placeholder="New task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>

        <div>
          {tasks.length === 0 && (
            <p style={{ textAlign: "center", marginTop: 12 }}>
              No tasks yet
            </p>
          )}

          {tasks.map((task) => (
            <div key={task._id} className="task">
              <span>{task.title}</span>
              <button onClick={() => deleteTask(task._id)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
