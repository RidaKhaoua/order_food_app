import ContentLoader from "react-content-loader";
import style from "./style.module.css";

const {cat_sekelton} = style;

function CategorieSekelton() {
  return (
    <div className={cat_sekelton}>
    <ContentLoader 
    speed={2}
    width={546}
    height={124}
    viewBox="0 0 546 124"
    backgroundColor="#eee"
    foregroundColor="#ffffff"
  >
    <circle cx="92" cy="66" r="45" /> 
    <circle cx="211" cy="66" r="45" /> 
    <circle cx="336" cy="66" r="45" /> 
    <circle cx="465" cy="66" r="45" />
    <circle cx="465" cy="66" r="45" />
    <circle cx="465" cy="66" r="45" />
    <circle cx="465" cy="66" r="45" />
    <circle cx="465" cy="66" r="45" />

  </ContentLoader>
    </div>
  )
}

export default CategorieSekelton