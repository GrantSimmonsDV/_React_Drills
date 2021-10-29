import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    alert(`Username:${user} Password:${password}`);
  };

  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleClick}>Login</button>
    </div>
  );
}
