import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: "", email: "", pass: "", cpass: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, pass, cpass } = form;

    if (!name || !email || !pass || !cpass)
      return setMsg("All fields are required!");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email))
      return setMsg("Invalid email format!");

    if (pass.length < 6)
      return setMsg("Password must be at least 6 characters!");

    if (pass !== cpass)
      return setMsg("Passwords do not match!");

    setMsg("Registration Successful!");
    setTimeout(() => {
      setForm({ name: "", email: "", pass: "", cpass: "" });
      setMsg("");
    }, 2000);
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Register</h2>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="pass"
          type="password"
          placeholder="Password"
          value={form.pass}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="cpass"
          type="password"
          placeholder="Confirm Password"
          value={form.cpass}
          onChange={handleChange}
          style={styles.input}
        />
        <p style={{ color: msg.startsWith("✅") ? "green" : "red", textAlign: "center", height: "16px" }}>
          {msg}
        </p>
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  form: {
    background: "#fff",
    padding: "35px 30px",
    borderRadius: "12px",
    width: "330px",
    boxShadow: "0 0 25px rgba(255,255,255,0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "25px",
    color: "#222",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0 14px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
    boxSizing: "border-box",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#000",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },
};