import React, { useState } from "react";

export default function Login() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, "", 2));
  };

  return (
    <div>
      <h1>Lezione: Oggetti in State</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={profile.firstName || ""}
          onChange={handleChange}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
        <input
          value={profile.lastName || ""}
          onChange={handleChange}
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <input
          value={profile.bday || ""}
          onChange={handleChange}
          type="date"
          name="bday"
        />
        <input
          value={profile.password || ""}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}