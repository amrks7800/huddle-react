import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Ssocial } from "./styles/social-s";

const Socialicons = () => {
  return (
    <Ssocial>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </Ssocial>
  );
};

export default Socialicons;
