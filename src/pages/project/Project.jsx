import classes from "./css/Project.module.css";
import Gnb from "../layouts/Gnb";
import { Link } from "react-router-dom";
import Title from "../../components/ui/Title";
import A1 from "../../assets/animatedTale/A1.png";
import P1 from "../../assets/smartParking/P1.png";

const Project = () => {
  return (
    <div className={classes.home}>
      <Gnb />
      <div className={classes.gap}></div>
      <Title
        title="Project"
        description="By fusing our unique AI and XR technology with interacive storytelling,"
      />

      <div className={classes.container}>
        <div className={classes.row}>
          <Link to="/project/animatedTale" className={classes.item}>
            <div className={classes.feature}>
              <img src={A1} className={classes.thum} />
              <div className={classes.blogTitle}>animatedTale</div>
              <div className={classes.description}>
                As a part of Arts Korea Lab project, this project attempts to
                provide a useful tool for artists or content creators to make 2D
                animation easily.
              </div>
            </div>
          </Link>
          <Link to="/project/smartParking" className={classes.item}>
            <div className={classes.feature}>
              <img src={P1} className={classes.thum} />
              <div className={classes.blogTitle}>
                딥러닝 기반 스마트 주차 서비스
              </div>
              <div className={classes.description}>
                주차 앱의 불편함과 보안 문제 개선을 목표로 한 스마트 주차 서비스
                개발
              </div>
            </div>
          </Link>
          <Link to="/project/3" className={classes.item}>
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

export default Project;
