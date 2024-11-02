import styles from "./style.module.css";
import { TCategory } from "@types";
import { GridList } from "@components/Common";
import Category from "./Category/Category";
import  { useRef, useState } from "react";

type TCategorieList = {
  data: TCategory[];
  activeLink: string;
  handleActiveLink: (newLink: string) => void;
  handleGetFoodByCat: (catName: string) => void
};

function CategorieList({ data, activeLink, handleActiveLink, handleGetFoodByCat }: TCategorieList) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDraging, setIsDraging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [sliderPos, setSsliderPos] = useState(0);

  const handelMouseDown = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      setIsDraging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setSsliderPos(sliderRef.current.scrollLeft);
    }
  };
  const handeleMousLeave = () => {
    setIsDraging(false);
  };

  const handeleMouseUp = () => {
    setIsDraging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraging) return;
    e.preventDefault();
    if (sliderRef.current) {
      const xEnd = e.clientX - sliderRef.current.offsetLeft;
      const distance = (xEnd - startX) * 2;
      sliderRef.current.scrollLeft = sliderPos - distance;
      console.log(Math.floor(sliderRef.current.scrollLeft));
    }
  };

  return (
    <div
      className={`${styles.categorie_list} ${
        isDraging ? styles.categorie_list_active : ""
      }`}
      ref={sliderRef}
      onMouseDown={handelMouseDown}
      onMouseLeave={handeleMousLeave}
      onMouseUp={handeleMouseUp}
      onMouseMove={handleMouseMove}
      onDragStart={(e: React.DragEvent) => e.preventDefault()}>
      <GridList<TCategory>
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        data={data}
        renderData={(item) => (
          <Category
            {...item}
            activeLink={activeLink}
            handleActiveLink={handleActiveLink}
            handleGetFoodByCat={handleGetFoodByCat}
          />
        )}
        message="there are no Product"
      />
    </div>
  );
}

export default CategorieList;
