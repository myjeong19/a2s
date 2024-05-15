import classes from "./css/Gnb.module.css";
import { useState } from "react";

const Gnb = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("MENU");

  const onClickMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setMenu("MENU");
    } else {
      setMenu("CLOSE");
    }
  };

  return (
    <>
      <nav className={classes.gnb}>
        <button className={classes.menuContainer} onClick={onClickMenu}>
          <p>{menu}</p>
        </button>
      </nav>

      <nav className={`${classes.allMenu} ${isOpen ? classes.showMenu : ""}`}>
        <ul className={classes.menu}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">RESEARCH</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Gnb;
