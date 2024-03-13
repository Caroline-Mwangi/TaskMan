import { useState } from "react";
import AddTask from "./AddTask";
import AllTasks from "./AllTasks";
import OngoingTasks from "./OngoingTasks";
import CompletedTasks from "./CompletedTasks";

export default function Landing() {
  const [active, setActive] = useState("all");
  return (
    <>
      <div className="d-flex justify-content-end">
        <p className="me-4 fs-5 text-dark text-opacity-75 mt-2">
          <div className="dropdown">
            <button
              className="bg-transparent btn-sm border-0 dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Hello, User
              <i className="ms-2 far fa-user-circle opacity-75"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </p>
      </div>

      <h1 className="text-center mt-4 mb-4 land-head">MY TASKS</h1>

      <div className="container">
        <div className="row">
          <div className="col-sm-11 col-md-11">
            <div className="tabs d-flex justify-content-between mb-4 p-2 container-fluid rounded-4">
              <p
                className={`tab-text  ms-5 mt-3 p-2  ${
                  active === "all" ? "active" : ""
                }`}
                onClick={() => setActive("all")}
              >
                All Tasks
              </p>
              <p
                className={`tab-text mt-3 p-2 ${
                  active === "ongoing" ? "active" : ""
                }`}
                onClick={() => setActive("ongoing")}
              >
                Ongoing
              </p>
              <p
                className={`tab-text me-5 mt-3 p-2 ${
                  active === "completed" ? "active" : ""
                }`}
                onClick={() => setActive("completed")}
              >
                Completed
              </p>
            </div>
          </div>
          <div className="col-sm-1 col-md-1">
            <div className="d-flex justify-content-end">
              <AddTask />
            </div>
          </div>
        </div>
      </div>

      <div className="tasks d-block p-2 container-fluid rounded-4 p-5">
        {active === "all" && <AllTasks />}
        {active === "ongoing" && <OngoingTasks />}
        {active === "completed" && <CompletedTasks />}
      </div>
    </>
  );
}
