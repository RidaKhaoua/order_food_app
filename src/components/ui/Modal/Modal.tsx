
import { assets } from "@assets";
import Button from "../Button/Button";
import styles from "./style.module.css";

type TModal = {
  showModal: boolean;
  title: string;
  closeModal: () => void;
  content: string;
};

const style = {
  backgroundColor: "tomato",
  color: "white",
  padding: "8px 22px",
  border: "none",
};

const {
  modal,
  modal_content,
  modal_title_close,
  modal_desc,
  modal_btn,
  modal_show,
} = styles;

function Modal({ showModal, title, content, closeModal }: TModal) {
  return (
    <div className={`${modal} ${showModal ? modal_show : "" }`}>
      <div className={modal_content}>
        <div className={modal_title_close}>
          <h3>{title}</h3>
          <img
            className="close"
            src={assets.cross_icon}
            alt="close"
            onClick={closeModal}
          />
        </div>
        <div className={modal_desc}>{content}</div>
        <div className={modal_btn}>
          <Button type="button" style={style} onClick={closeModal}>
            Confirme
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
