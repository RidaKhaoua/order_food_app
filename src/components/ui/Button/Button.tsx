import {HTMLAttributes} from "react";
import "./styles.css";

interface TButton extends HTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  children: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const Button = ({
  children,
  style,
  type = "button",
  disabled = false,
  className = "",
  ...reset
}: TButton) => {
  return (
    <button
      type={type}
      {...reset}
      style={style}
      disabled={disabled}
      className={className}>
      {children}
    </button>
  );
};

export default Button;
