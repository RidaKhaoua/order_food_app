
import "./style.css";

type TAlert = {
  className?: "error" | "success" | "warning";
  text: string;
};

function Alert({ className, text }: TAlert) {
  return <div className={`alert ${className}`}>{text}</div>;
}

export default Alert;
