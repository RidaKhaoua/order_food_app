
import { assets } from "@assets";
import styles from "./styles.module.css";

const { footer_left, footer_left_logo, footer_left_desc, footer_left_icons } =
  styles;

function Footerleft() {
  return (
    <div className={footer_left}>
      <div className={footer_left_logo}>
        <img src={assets.logo} alt="logo totmato" />
      </div>
      <p className={footer_left_desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        velit earum. Sed ex eos similique tempora quaerat aliquid enim
        reiciendis, asperiores minus laboriosam modi porro iure hic debitis vero
        unde?
      </p>
      <div className={footer_left_icons}>
        <img src={assets.facebook_icon} alt="facebook" />
        <img src={assets.linkedin_icon} alt="linkedin" />
        <img src={assets.twitter_icon} alt="twitter" />
      </div>
    </div>
  );
}

export default Footerleft;
