import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CompletedTasks() {
  const [tasks, setTasks] = useState([]);

  const getCompletedTasks = async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/tasks/?completed=True"
    );
    setTasks(response.data);
  };

  useEffect(() => {
    getCompletedTasks();
  }, []);

  const taskStatus = async (id, checked) => {
    const updateTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: checked };
      }
      return task;
    });

    setTasks(updateTask);

    await axios.patch(`http://127.0.0.1:8000/tasks/${id}/`, {
      completed: checked,
    });

    location.reload();
  };
  return (
    <>
      {tasks.map((task) => (
        <div className="mb-4">
          <input
            className="me-2"
            type="checkbox"
            id={task.id}
            name="task_status"
            checked={task.completed || false}
            onChange={(e) => taskStatus(task.id, e.target.checked)}
          />
          <label
            for={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.name}
          </label>
          <p className="task-details ms-4">
            {task.date}, <span className="ms-1 me-2">{task.time}</span>
            <Link to={`/tasks/${task.id}`}>
              <button className="bg-transparent border-0 rounded-4">
                <svg
                  width="1.3vw"
                  height="1.3vw"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-1"
                >
                  <path
                    d="M32.1667 14.8749L25.0833 7.87492L27.4167 5.54159C28.0556 4.9027 28.8406 4.58325 29.7717 4.58325C30.7028 4.58325 31.4872 4.9027 32.125 5.54159L34.4583 7.87492C35.0972 8.51381 35.4306 9.28492 35.4583 10.1883C35.4861 11.0916 35.1806 11.8621 34.5417 12.4999L32.1667 14.8749ZM29.75 17.3333L12.0833 34.9999H5V27.9166L22.6667 10.2499L29.75 17.3333Z"
                    fill="#994735"
                    fill-opacity="0.8"
                  />
                </svg>
              </button>
            </Link>
          </p>
        </div>
      ))}
    </>
  );
}
