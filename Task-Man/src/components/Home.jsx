export default function Home() {
  return (
    <>
      <div className="d-flex justify-content-end">
        <button className="sign-btn index-btn border-secondary border-1 rounded-4 p-1 position-absolute btn-opacity-75-hover text-center">
          <a className="link-underline-opacity-0 link-dark" href="/signup">
            Sign Up
          </a>
        </button>
        <button className="log-btn index-btn border-secondary border-1 rounded-4 p-1 position-absolute btn-opacity-75-hover text-center me-4">
          Log In
        </button>
      </div>
      <div className="container-fluid">
        <div className="index-row row  ">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 position-relative">
            <p className="index-text d-flex text-center align-items-center">
              Welcome to TaskMan! A task managing tool that is designed to help
              you stay organized and productive. With our user-friendly
              interface, managing your tasks has never been easier. Create tasks
              and prioritize your tasks with just a few steps. Whether you are a
              student, professional, or simply someone looking to stay
              organized, TaskMan is the perfect tool to help you stay on track
              and accomplish your goals. Experience the power of efficient task
              management and take control of your life with TaskMan today!
            </p>
            <br />
            <br />
            <br />
            <button className="index-btn border-secondary border-1 rounded-4 p-1 position-absolute btn-opacity-75-hover text-center">
              <a className="link-underline-opacity-0 link-dark" href="/signup">
                Get Started
              </a>
            </button>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <img className="index-image" src="images/main.avif" />
          </div>
        </div>
      </div>
    </>
  );
}
