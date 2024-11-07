import { Form, Input } from "@components/forms";
import useRegister from "@hooks/useRegister";
import { Button } from "@components/ui";
import Title from "../Title/Title";
import Alert from "@components/Common/Alert/Alert";

type TRegister = {
  currentState: string;
  setCurrentState: (newValue: string) => void;
  setIsVisibleShowLoginPopUp: (newVal: boolean) => void;
};

function Register({
  currentState,
  setCurrentState,
  setIsVisibleShowLoginPopUp,
}: TRegister) {
  const closeLoginPopUp = () => {
    setIsVisibleShowLoginPopUp(false);
  };

  const {
    status,
    error,
    errors,
    statusAvailableEmail,
    handleSubmit,
    register,
    onBlurCheckEmailAvailable,
    submitFormRegister,
  } = useRegister({ closeLoginPopUp });

  return (
    <>
    {error && <Alert  className= "error" text={error} />}
    <Form onSubmit={handleSubmit(submitFormRegister)}>
      <Title
        text={currentState}
        setIsVisibleShowLoginPopUp={setIsVisibleShowLoginPopUp}
      />
      <Input
        type="text"
        register={register}
        name="username"
        placeHolder="Username"
        error={errors.username?.message}
      />

      <Input
        type="email"
        register={register}
        name="email"
        placeHolder="example@gmail.com"
        onBlur={onBlurCheckEmailAvailable}
        formText={
          statusAvailableEmail === "checking"
            ? "we are currently checking the availability of this email. Please wait..."
            : ""
        }
        success={
          statusAvailableEmail === "available" ? "The Email is Available" : ""
        }
        disabled={statusAvailableEmail === "checking" ? true : false}
        error={
          errors.email?.message
            ? errors.email.message
            : statusAvailableEmail === "notAvailable"
            ? "The Email ist not Available"
            : statusAvailableEmail === "failed"
            ? "Currently we can't checking the Email because The Server has a problem"
            : ""
        }
      />
      <Input
        type="password"
        register={register}
        name="password"
        placeHolder="password"
        error={errors.password?.message}
      />
      <Input
        type="password"
        register={register}
        name="confirmPassword"
        placeHolder="Confirmpassword"
        error={errors.confirmPassword?.message}
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
        }}>
        {status === "pending" ? "Loading..." : "Register"}
      </Button>
      <p>
        You have already an Account?
        <Button
          type="button"
          style={{
            textTransform: "capitalize",
            backgroundColor: "transparent",
            textDecoration: "underline",
            border: "none",
          }}
          onClick={() => setCurrentState("sing in")}>
          sing In
        </Button>
      </p>
    </Form>
    </>
  );
}

export default Register;
