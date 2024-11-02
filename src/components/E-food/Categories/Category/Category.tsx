import { Img } from "@components/ui";
import styles from "./style.module.css";


const { category, category_img, category_title, category_img_active } = styles;

type TCategoryProps = {
  catName: string;
  img: string;
  activeLink: string;
  handleActiveLink: (newLink: string) => void;
  handleGetFoodByCat: (catName: string) => void;
};

function Category({
  catName,
  img,
  activeLink,
  handleActiveLink,
  handleGetFoodByCat,
}: TCategoryProps) {
  
  return (
    <div
      className={category}
      onClick={() => {
        handleActiveLink(catName);
        handleGetFoodByCat(catName);
      }}>
      <div
        className={`${category_img} ${
          activeLink === catName ? category_img_active : ""
        }`}>
        <Img imgName={img} title={catName} />
      </div>
      <div className={category_title}>
          <h4>{catName}</h4>
        </div>
    </div>
  );
}

export default Category;
