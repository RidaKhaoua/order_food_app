
import { Foods } from "@components/E-food";
import styles from "./style.module.css";
import { Modal } from "@components/ui";
import useModal from "@hooks/useModal";

const { food_section, food_section_title } = styles;

function FoodSection() {
  const {showModal, handleClose, handleShowModal} = useModal();
  return (
    <>
      <Modal
        showModal={showModal}
        closeModal={handleClose}
        content="you sould lofing first"
        title="Warning"
      />
      <div className={food_section}>
        <h2 className={food_section_title}>Top disches for you</h2>
        <Foods handleShowModal={handleShowModal} />
      </div>
    </>
  );
}

export default FoodSection;
