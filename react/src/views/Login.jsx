import { Link } from "react-router-dom";

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefaul();
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Login into your account</h1>
          <input type="email" placeholder="Email" />
          <input type="pasword" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not Registered? <Link to="/signup">Create an account</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
