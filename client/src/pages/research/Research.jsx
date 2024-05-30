import classes from "./css/Research.module.css";
import Gnb from "../layouts/Gnb";
import { Link } from "react-router-dom";

const Research = () => {
  return (
    <div className={classes.home}>
      <h1 className={classes.h1}>A2S LAB</h1>
      <Gnb />
      <div className={classes.gap}></div>
      <div className={classes.top}>
        <div className={classes.title}>Research</div>
        <div className={classes.article}>
          <p>
            By fusing our unique AI and XR technology with interacive
            storytelling,
          </p>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.row}>
          <Link to="/research/1" className={classes.item}>
            <div className={classes.feature}>
              <div className={classes.thum}></div>
              <div className={classes.blogTitle}>Research Area</div>
              <div className={classes.description}></div>
            </div>
          </Link>
          <Link to="/research/2" className={classes.item}>
            <div className={classes.feature}>
              <div className={classes.thum}></div>
              <div className={classes.blogTitle}>Research Area</div>
              <div className={classes.description}></div>
            </div>
          </Link>
          <Link to="/research/3" className={classes.item}>
            <div className={classes.feature}>
              <div className={classes.thum}></div>
              <div className={classes.bottom}>
                <div className={classes.blogTitle}>Research Area</div>
                <div className={classes.description}>
                  Insights from Google's fifth annual VisD Summit
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Research;
