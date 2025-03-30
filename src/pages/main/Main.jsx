import classes from "./css/Main.module.css";
import Gnb from "../layouts/Gnb";
import { Link } from "react-router-dom";

import demo_part from "../../assets/animatedTale/demo_part.gif";
import P1 from "../../assets/smartParking/P1.png";

const Main = () => {
  return (
    <div className={classes.home}>
      <Gnb />
      <div className={classes.main}>
        <div className={classes.title}>A2S</div>
      </div>
      <hr />
      <p className={classes.span}>WHO WE ARE</p>
      <div className={classes.article}>
        <p className={classes.article_p}>A2S LAB IS RESEARCH LABATORY </p>
        <p className={classes.article_p}>
          CREATES CONVENIENT SERVICES DRIVEN BY AI TECHNOLOGY
        </p>
      </div>
      <hr />
      <div className={classes.project_wrap}>
        <div className={classes.project_class}>AI</div>
        <div className={classes.project}>
          <div className={classes.list_number}>
            <h2 className={classes.current}>01</h2>
            <h2 className={classes.total}>02</h2>
          </div>
          <div className={classes.list}>
            <div className={classes.box_wrap}>
              <Link to="/project/animatedTale" className={classes.box}>
                <div className={classes.img_wrap}>
                  <a>
                    <img
                      src={demo_part}
                      alt="Project 1 Description"
                      className={classes.img}
                    ></img>
                  </a>
                </div>
                <div className={classes.text_wrap}>
                  <div className={classes.subject}>Animated Tale</div>
                  <ul className={classes.word}>
                    <li>
                      <span className={classes.circle_text}>
                        pose estimation
                      </span>
                      <span className={classes.circle_text}>
                        Image Segmentation
                      </span>

                      <span className={classes.circle_text}>interactive</span>
                    </li>
                  </ul>
                  <div className={classes.content}>
                    As a part of Arts Korea Lab project, this project attempts
                    to provide a useful tool for artists or content creators to
                    make 2D animation easily.
                  </div>
                </div>
                <div className={classes.line} />
              </Link>
              <Link to="/project/smartParking" className={classes.box}>
                <div className={classes.img_wrap}>
                  <a>
                    <img
                      src={P1}
                      alt="Project 1 Description"
                      className={classes.img}
                    ></img>
                  </a>
                </div>
                <div className={classes.text_wrap}>
                  <div className={classes.subject}>
                    딥러닝 기반 스마트 주차 서비스
                  </div>
                  <ul className={classes.word}>
                    <li>
                      <span className={classes.circle_text}>OCR</span>
                      <span className={classes.circle_text}>
                        Classification
                      </span>
                      <span className={classes.circle_text}>
                        Siamese network
                      </span>
                    </li>
                  </ul>
                  <div className={classes.content}>
                    주차 앱의 불편함과 보안 문제 개선을 목표로 한 스마트 주차
                    서비스
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
