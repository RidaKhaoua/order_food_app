
import { Container } from "@components/ui";
import Footerleft from "./Footerleft/Footerleft";
import { footerLinks } from "@constantData/constantData";
import Footercenter from "./Footercenter/Footercenter";
import FooterRight from "./FooterRight/FooterRight";

import styles from "./styles.module.css";

const { footer, footer_content, footer_copyRight } = styles;

function Footer() {
  return (
    <footer className={footer}>
      <Container>
        <div className={footer_content}>
          <Footerleft />
          <Footercenter dataLink={footerLinks} />
          <FooterRight />
        </div>
        <hr />
          <p className={footer_copyRight}>
            CopyRight 2024 Tomato.com - All Right Reserved
          </p>
      </Container>
    </footer>
  );
}

export default Footer;
