import { useState, useEffect } from "react";
import classes from "./css/Gnb.module.css";

const DropDown = (props) => {
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);

  const className = `${classes.menu_wrap} ${
    props.visibility
      ? classes.slide_fade_in_dropdown
      : classes.slide_fade_out_dropdown
  }`;

  useEffect(() => {
    if (props.visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 400)
      );
    }
  }, [props.visibility]);

  return (
    <article className={className}>
      {visibilityAnimation && props.children}
    </article>
  );
};

export default DropDown;
