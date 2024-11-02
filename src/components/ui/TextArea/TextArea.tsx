import { FieldValues, Path, UseFormRegister } from "react-hook-form";

import style from "./style.module.css";



type TTextArea<TFieldValues extends FieldValues> = {
  placeholder: string;
  register: UseFormRegister<TFieldValues>;
  name: Path<TFieldValues>;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
};

const {textarea, invalidTextArea, textarea_invalid} =style

const TextArea = <TFieldValues extends FieldValues>({
  placeholder,
  register,
  name,
  error,
}: TTextArea<TFieldValues>) => {
  return (
    <div>
        <textarea className={`${textarea} ${error ? textarea_invalid : ""}`} name={name} placeholder={placeholder} {...register}/>
        {error && <p className={error ? invalidTextArea : ""}>{error}</p>}
    </div>
);
};

export default TextArea;
