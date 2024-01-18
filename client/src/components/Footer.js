import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, margin: "10px 0" }}>
        This website is for Plamen's educational purposes only!
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
