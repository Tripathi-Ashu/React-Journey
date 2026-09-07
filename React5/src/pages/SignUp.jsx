import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignUp() {

  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password) {
      setError("Sabhi fields bharna zaroori hai");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Password match nahi kar raha");
      return;
    }

    const result = signup({
      name: form.name,
      email: form.email,
      password: form.password,
    });

    if (!result.success) {
      setError(result.message);
      return;
    }

    // Signup successful — sign in page pe bhej do
    navigate("/supportive/sign-in");
  };

  return (
    <div className="auth-container">

      <form className="auth-card" onSubmit={handleSubmit}>

        <h2>Sign Up</h2>

        {error && <p className="auth-error">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>

        <p>
          Already have an account?{" "}
          <Link to="/supportive/sign-in">Sign In</Link>
        </p>

      </form>

    </div>
  );
}

export default SignUp;