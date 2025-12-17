import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        textAlign:"center",
        marginTop: "80px",
        backgroundColor: "rgb(48, 43, 43)",
      }}
    >
      <p
        style={{
          color: " rgb(215, 215, 215)",
          margin: "0px",
          fontSize: "14px",
          padding: "20px 0px 0px 0px",
        }}
      >
        © 2025 Your Name. All rights reserved. Use of this content is prohibited{" "}
        <br />
        without prior written permission from the owner.
      </p>

      <ul
        style={{
          display: "flex",
          gap: "16px",
          fontSize: "22px",
          listStyle: "none",
          color: "rgb(227, 211, 211)",
          justifyContent: "center",
          margin: "0",
          padding: "12px 0px 14px 0px",
        }}
      >
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaFacebookMessenger />
        </li>
        <li>
          <FaYoutube />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
