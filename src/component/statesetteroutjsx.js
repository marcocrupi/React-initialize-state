import React, { useState } from "react";

export default function EmailTextInput() {
  const [email, setEmail] = useState("");
  const handleChange = (event) => setEmail(event.target.value);
  //   Si può scrivere anche così usando la destrutturazione
  //   dell'oggetto: const handleChange = ({target}) => setEmail(target.value);

  return (
    <div>
      <h1>Lezione: Usare State Setter al di fuori di JSX</h1>
      <p>Output email digitata: {email}</p>
      <form>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Digita qui..."
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
