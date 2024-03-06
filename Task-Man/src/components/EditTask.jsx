import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTask() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getTask = async () => {
      const result = await axios.get(`http://127.0.0.1:8000/tasks/${id}/`);

      setName(result.data.name);
      setDate(result.data.date);
      setTime(result.data.time);
    };

    getTask();
  }, [id]);

  const editTask = async () => {
    let field = new FormData();

    field.append("name", name);
    field.append("date", date);
    field.append("time", time);

    await axios({
      method: "PUT",
      url: `http://127.0.0.1:8000/tasks/${id}/`,
      data: field,
    }).then((response) => {
      navigate(`/tasks/${id}`);
      location.reload();
    });
  };
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop2"
      >
        Edit Task
      </button>

      <div
        class="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-2" id="staticBackdropLabel">
                EDIT TASK
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
                className="form-control border-black"
                placeholder="Task Name..."
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="date"
                className="form-control border-black mt-3 mb-3"
                placeholder="Task Date..."
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="time"
                className="form-control border-black"
                placeholder="Task Time..."
                name="time"
                value={time}
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
              <button type="button" class="btn btn-success" onClick={editTask}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
