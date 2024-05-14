import Logo from "../assets/Rentlogo.png";
import ProfilePic from "../assets/ProfilePic.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";

function Header() {
  return (
    <header className="Header">
      <div className="left-side">
        <img className="logo-image" src={Logo} alt="Logo-pic" />

        <div className="category">
          <RxHamburgerMenu className="logo-menu" />
          <p className="logo-text">All Categories</p>
        </div>
      </div>

      <div className="right-side">
        <button className="button-ad">Post Free Ad</button>
        <span className="menu-bar">
          <img className="Profile-image" src={ProfilePic} />
          <p className="Profile-text">Account</p>
          <RiArrowDropDownLine className="Profile-menu " />
        </span>
      </div>
    </header>
  );
}

export default Header;
