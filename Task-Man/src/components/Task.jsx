import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";

export default function Task() {
  const [task, setTask] = useState([]);
  const nav = useNavigate();
  const { id } = useParams();

  const getATask = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/tasks/${id}/`);
    setTask(data);
  };

  useEffect(() => {
    getATask();
  }, []);

  return (
    <>
      <div className="container d-flex justify-content-center ">
        <h1 className="position-absolute mt-5 mb-5 land-head">TASK DETAILS</h1>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="container d-flex justify-content-center mt-5">
        <div class="card text-center p-5">
          <div class="card-body">
            <h5 class="card-title mb-4">
              <b className="fw-bolder fs-4">Task Name:</b> {task.name}
            </h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              <b className="fw-bolder fs-5">Date: </b>
              {task.date}
            </h6>
            <h6 class="card-subtitle mb-4 text-body-secondary">
              <b className="fw-bolder fs-5">Time: </b>
              {task.time}
            </h6>

            <EditTask />
            <DeleteTask />
          </div>
        </div>
      </div>
    </>
  );
}
