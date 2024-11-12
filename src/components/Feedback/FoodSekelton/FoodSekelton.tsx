import ContentLoader from "react-content-loader";
import style from "./style.module.css";

const { product_sekelton } = style;

function FoodSekelton() {
  const renderList = Array(12)
    .fill(0)
    .map((_, idx) => (
      <ContentLoader
        key={idx}
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#cbc8c8"
        foregroundColor="#ffffff">
        <rect x="4" y="335" rx="2" ry="2" width="183" height="7" />
        <rect x="7" y="297" rx="2" ry="2" width="66" height="5" />
        <rect x="5" y="17" rx="2" ry="2" width="342" height="244" />
        <rect x="6" y="365" rx="2" ry="2" width="17" height="28" />
      </ContentLoader>
    ));
  return <div className={product_sekelton}>{renderList}</div>;
}

export default FoodSekelton;
