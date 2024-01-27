import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddTask() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  const AddTaskInfo = async () => {
    let field = new FormData();

    field.append("task", task);
    field.append("date", date);
    field.append("time", time);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/tasks/",
      data: field,
    }).then((response) => {
      setTask("");
      setDate("");
      setTime("");
      navigate("/landing");
      
    });
  };
  return (
    <>
      <button
        className="btn-tsk border-0 rounded-4 p-2"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3vw"
          height="3vw"
          viewBox="0 0 37 39"
          fill="none"
          id="createTaskBtn"
        >
          <path
            d="M32.233 22.518V30.5179C32.233 31.3666 31.9161 32.1806 31.3521 32.7807C30.7881 33.3808 30.0231 33.7179 29.2254 33.7179H8.1728C7.37516 33.7179 6.61018 33.3808 6.04617 32.7807C5.48215 32.1806 5.16528 31.3666 5.16528 30.5179V8.11797C5.16528 7.26927 5.48215 6.45534 6.04617 5.85523C6.61018 5.25511 7.37516 4.91797 8.1728 4.91797H15.6916V8.11797H8.1728V30.5179H29.2254V22.518H32.233Z"
            fill="#994735"
          />
          <path
            d="M32.233 11.318H26.2179V4.91797H23.2104V11.318H17.1954V14.518H23.2104V20.918H26.2179V14.518H32.233V11.318Z"
            fill="#994735"
          />
        </svg>
      </button>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content my-modal">
            <div class="modal-header">
              <h1 class="modal-title fs-3" id="staticBackdropLabel">
                Add A New Task
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control mt-3 mb-4 border-0 opacity-75"
                placeholder="Task Name..."
                name="task"
                onChange={(e) => setTask(e.target.value)}
              />

              <input
                type="date"
                className="form-control mt-3 mb-4 border-0 opacity-75"
                name="date"
                onChange={(e) => setDate(e.target.value)}
              />

              <input
                type="time"
                className="form-control mt-3 mb-4 border-0 opacity-75"
                name="time"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn my-modal-btn"
                onClick={AddTaskInfo}
                data-bs-dismiss="modal"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
