import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Spinner from "./Spinner"

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const data  = await signInWithEmailAndPassword(auth, email, password);
      console.log("login data: ",data);
      navigate("/")
      setLoading(false)
    } catch (err) {
      setErr(true);
      setLoading(false)
    }
  };

  return (
    <div className="formContainer">
    {loading ? <Spinner/> : (
      <div className="formWrapper">
        <span className="logo">Real Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" onChange={() => setErr(false)} />
          <input type="password" placeholder="password" onChange={() => setErr(false)} />
          <button>Sign in</button>
          {err && <span className="errorlogin">Enter Correct Details</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    )}
    </div>
  );
};

export default Login;
