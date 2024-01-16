export default function Signup() {
  return (
    <>
      <div className="d-flex justify-content-end">
        <button className="log-btn index-btn border-0 rounded-4 p-1 position-absolute text-center me-4">
          Log In
        </button>
      </div>

      <div className="container-fluid">
        <div className="index-row row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="d-block justify-content-center form p-5 bg-white rounded-4 bg-opacity-50 text-center">
              <h1 className="form-mainhead mb-0 fs-1">SIGN UP</h1>
              <h3 className="form-minihead fs-5 mb-5">Join The TaskMan Community</h3>

              <input
                type="text"
                className="form-control mt-3 mb-4 border-0 opacity-75"
                placeholder="First Name..."
                name="fname"
              />

              <input
                type="text"
                className="form-control mt-3 mb-4 border-0 opacity-75"
                placeholder="Last Name..."
                name="lname"
              />

              <input
                type="email"
                className="form-control mt-3 mb-4 border-0 opacity-75"
                placeholder="Email Address..."
                name="email"
              />

              <input
                type="password"
                className="form-control  mt-3 mb-4 border-0 opacity-75"
                placeholder="Password..."
                name="pass"
              />

              <input
                type="password"
                className="form-control mt-3 mb-5 border-0 opacity-75"
                placeholder="Confirm Password..."
                name="cpass"
              />

              <button className="sub-btn rounded-3 border-0 p-2 w-25 mb-2">Submit</button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img className="index-image" src="images/main.avif" />
          </div>
        </div>
      </div>
    </>
  );
}
