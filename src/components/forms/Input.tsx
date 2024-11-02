
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import style from "./style.module.css";

type TInput<TFieldValues extends FieldValues> = {
  placeHolder: string;
  type: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  formText?: string;
  success?: string;
  notSucces?: string;
  disabled?: boolean;
};

const {
  input,
  isValid,
  isInValid,
  input_feedback_valid,
  input_feedback_inValid,
} = style;

const Input = <TFieldValues extends FieldValues>({
  placeHolder,
  type,
  name,
  register,
  onBlur,
  error,
  success,
  formText,
  disabled,
}: TInput<TFieldValues>) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };

  const inputIsValid = success ? isValid : "";
  const inputIsInvalid = error ? isInValid : ""
  return (
    <div className={input}>
      <input
        type={type}
        placeholder={placeHolder}
        {...register(name)}
        name={name}
        onBlur={onBlurHandler}
        className={`${inputIsValid} ${inputIsInvalid} `}
        readOnly={disabled}
      />
      <p className={`${error ? input_feedback_inValid : ""}`}>{error}</p>
      <p className={`input-feedback ${success ? input_feedback_valid : ""}`}>
        {success}
      </p>
      {formText && <p>{formText}</p>}
    </div>
  );
};

export default Input;
