import  { useState } from "react";
import Register from "./Register/Register";
import Login from "./Login/Login";
import styles from "./style.module.css";


type TLoginPopUp = {
  isVisibleShowLoginPopUp: boolean;
  setIsVisibleShowLoginPopUp: (val: boolean) => void;
};

const { login_popUp } = styles;

function LoginPopUp({ isVisibleShowLoginPopUp, setIsVisibleShowLoginPopUp }: TLoginPopUp) {
  const [currentState, setCurrentState] = useState("sing up");

  return (
    <>
      {isVisibleShowLoginPopUp && (
        <div className={login_popUp}>
          {currentState === "sing up" ? (
            <Register
              currentState={currentState}
              setCurrentState={setCurrentState}
              setIsVisibleShowLoginPopUp={setIsVisibleShowLoginPopUp}
            />
          ) : (
            <Login
              currentState={currentState}
              setCurrentState={setCurrentState}
              setIsVisibleShowLoginPopUp={setIsVisibleShowLoginPopUp}
            />
          )}
        </div>
      )}
    </>
  );
}

export default LoginPopUp;
