import React, { memo, useRef } from "react";
import { Parol, User } from "../../assets/react-icons";
import { Button } from "../../components/fields";

const index = memo(() => {
  const loginValue = useRef("");
  const parolValue = useRef("");
  const hendleSubmit = (e) => {
    e.preventDefault();
    console.log(loginValue.current.value);
    console.log(parolValue.current.value);
  };
  return (
    <div className="login">
      <h1 className="login__title">Kirish</h1>
      <form className="login__form" onSubmit={hendleSubmit}>
        <label htmlFor="Login">
          <User />
          <input ref={loginValue} type="text" id="Login" placeholder="Login" />
        </label>  
        <label htmlFor="Parol">
          <Parol />
          <input ref={parolValue} type="password" id="" placeholder="Parol" />
        </label>
        <Button className="login__submit" type="submit">
          Kirish
        </Button>
      </form>
    </div>
  );
});
export default index;
