export default function Landing() {
  return (
    <>
      <div className="d-flex justify-content-end">
        <p className="me-4 fs-5 text-dark text-opacity-75 mt-2">
          Hello, User
          <button className="bg-transparent border-0">
            <i className="far fa-user-circle fs-4 opacity-75"></i>
          </button>
        </p>
      </div>

      <h1 className="text-center mt-4 mb-4 land-head">MY TASKS</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="tabs d-flex justify-content-between fs-4 mb-4 p-2 container-fluid rounded-4">
              <p className="tab-text tab-1 ms-5 mt-3 p-2 border border-black rounded-5">
                All Tasks
              </p>
              <p className="tab-text mt-3 p-2">Ongoing</p>
              <p className="tab-text me-5 mt-3 p-2">Completed</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-end">
              <button className="btn-tsk border-0 rounded-4 p-2">
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
            </div>
          </div>
        </div>
      </div>

      <div className="tasks d-flex justify-content-between fs-4 p-2 container-fluid rounded-4 p-5"></div>
    </>
  );
}
