import { FormEvent, useState } from "react";

import "./style.scss";

export default function index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(username);
    console.log(password);
  };

  return (
    <div className="login">
      <form action="" className="login__form" onSubmit={formSubmit}>
        <input
          name="username"
          type="text"
          className="login__form--input"
          placeholder="Username"
          onChange={handleUsernameChange}
        />
        <input
          name="password"
          type="password"
          className="login__form--input"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <button className="login__form--btn">Login</button>
      </form>
    </div>
  );
}
