import styles from "./styles.module.css";

type Title = {
  text: string;
  setIsVisibleShowLoginPopUp: (newVal: boolean) => void;
};

const { title, title_close } = styles;

function Title({ text, setIsVisibleShowLoginPopUp }: Title) {
  return (
    <div className={title}>
      <h3>{text}</h3>
      <div
        className={title_close}
        onClick={() => setIsVisibleShowLoginPopUp(false)}>
        X
      </div>
    </div>
  );
}

export default Title;
