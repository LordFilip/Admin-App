import { Link } from "react-router-dom";

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefaul();
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Sign up for free</h1>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="pasword" placeholder="Password" />
          <input type="pasword" placeholder="Password Confirmation" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Already Registered? <Link to="/signup">Sign in an account</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
