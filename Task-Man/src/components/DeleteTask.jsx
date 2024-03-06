import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteTask() {
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteTask = async () => {
    await axios.delete(`http://127.0.0.1:8000/tasks/${id}/`);
    navigate("/landing");
    location.reload();
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-danger ms-4"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Delete Task
      </button>

      <div
        class="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content ">
            <div class="modal-header">
              <h1
                class="modal-title fs-2 fw-bold text-uppercase"
                id="staticBackdropLabel"
              >
                Delete Task
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body fs-5">
              Are you sure you want to delete this task?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-danger" onClick={deleteTask}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
