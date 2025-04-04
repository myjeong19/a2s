import classes from "./css/Gnb.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import DropDown from "./DropDown";

const Gnb = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const onClickMenu = () => {
    setDropdownVisibility(!dropdownVisibility);
  };

  return (
    <div className={classes.container}>
      <Link to="/" className={classes.title}>
        A2S LAB
      </Link>
      <nav className={classes.gnb}>
        <button className={classes.menuContainer} onClick={onClickMenu}>
          {dropdownVisibility ? "CLOSE" : "MENU"}
        </button>
      </nav>

      <nav>
        <DropDown visibility={dropdownVisibility}>
          <ul className={classes.menu}>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/project">PROJECT</a>
            </li>
            <li>
              <a href="/research">RESEARCH</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </DropDown>
      </nav>
    </div>
  );
};

export default Gnb;
