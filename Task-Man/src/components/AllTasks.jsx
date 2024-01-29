import axios from "axios";
import { useState, useEffect } from "react";

export default function AllTasks() {
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
    const response = await axios.get("http://127.0.0.1:8000/tasks/");
    setTasks(response.data);
  };

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <>
      {tasks.map((task) => (
        <div className="mb-4">
          <input
            className="me-2"
            type="checkbox"
            id={task.id}
            name="task_status"
          />
          <label for={task.id}>{task.task}</label>
          <p className="task-details ms-4">
            {task.date}, <span className="ms-1 me-2">{task.time}</span>
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
            <svg
              width="1.3vw"
              height="1.3vw"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ms-1"
            >
              <path
                d="M10 31.6667C10 33.5 11.5 35 13.3334 35H26.6667C28.5 35 30 33.5 30 31.6667V11.6667H10V31.6667ZM31.6667 6.66667H25.8334L24.1667 5H15.8334L14.1667 6.66667H8.33337V10H31.6667V6.66667Z"
                fill="#994735"
                fill-opacity="0.8"
              />
            </svg>
          </p>
        </div>
      ))}
    </>
  );
}
