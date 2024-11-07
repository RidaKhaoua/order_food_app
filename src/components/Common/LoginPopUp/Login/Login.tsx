import Alert from "@components/Common/Alert/Alert";
import { Form, Input } from "@components/forms";
import { Button } from "@components/ui";
import useLogin from "@hooks/useLogin";
import Title from "../Title/Title";

type TLogin = {
  currentState: string;
  setCurrentState: (newVal: string) => void;
  setIsVisibleShowLoginPopUp: (newVal: boolean) => void;
};

function Login({
  currentState,
  setCurrentState,
  setIsVisibleShowLoginPopUp,
}: TLogin) {
  const showLoginPopUp = () => {
    setIsVisibleShowLoginPopUp(false);
  };
  const { register, handleSubmit, submitLoginForm, errors, status, error } =
    useLogin({ showLoginPopUp });

  return (
    <>
      {error && <Alert className="error" text={error} />}
      <Form onSubmit={handleSubmit(submitLoginForm)}>
        <Title
          text={currentState}
          setIsVisibleShowLoginPopUp={setIsVisibleShowLoginPopUp}
        />
        <Input
          type="text"
          placeHolder="example@mail.com"
          register={register}
          name="identifier"
          error={errors.identifier?.message}
        />

        <Input
          type="password"
          placeHolder="password"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <Button
          type="submit"
          disabled={status === "pending" ? true : false}
          style={{
            backgroundColor: "tomato",
            color: "white",
            borderRadius: "10px",
            border: "none",
            padding: "10px",
            width: "100%",
            marginBottom: "10px",
            opacity: `${status === "pending" ? "0.5" : ""}`,
          }}>
          {status === "pending" ? "Loading..." : "Sing in"}
        </Button>
        <p>
          You don't have Account?
          <Button
            type="button"
            style={{
              textTransform: "capitalize",
              backgroundColor: "transparent",
              textDecoration: "underline",
              border: "none",
            }}
            onClick={() => setCurrentState("sing up")}>
            Sing up
          </Button>
        </p>
      </Form>
    </>
  );
}

export default Login;
