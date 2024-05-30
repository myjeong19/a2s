import classes from "./css/Main.module.css";
import Gnb from "../layouts/Gnb";

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
              <div className={classes.box}>
                <div className={classes.img_wrap}>
                  <a>
                    <img alt="Project 1 Description"></img>
                  </a>
                </div>
                <div className={classes.text_wrap}>
                  <div className={classes.subject}>2d 애니메이션</div>
                  <ul className={classes.word}>
                    <li>
                      <span className={classes.circle_text}>
                        pose estimation
                      </span>
                      <span className={classes.circle_text}>interactive</span>
                    </li>
                  </ul>
                  <div className={classes.content}>
                    인물 움직임 영상을 통해 어쩌구 저쩌구 프로젝트 설명 어쩌구
                    저쩌구 프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구
                    저쩌구 프로젝트 설명 어쩌구 저쩌구 프로젝트 설명
                  </div>
                </div>
                <div className={classes.line} />
              </div>
              <div className={classes.box}>
                <div className={classes.img_wrap}>
                  <a>
                    <img alt="Project 1 Description"></img>
                  </a>
                </div>
                <div className={classes.text_wrap}>
                  <div className={classes.subject}>2d 애니메이션</div>
                  <ul className={classes.word}>
                    <li>
                      <span className={classes.circle_text}>
                        pose estimation
                      </span>
                    </li>
                  </ul>
                  <div className={classes.content}>
                    인물 움직임 영상을 통해 어쩌구 저쩌구 프로젝트 설명 어쩌구
                    저쩌구 프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구
                    저쩌구 프로젝트 설명 어쩌구 저쩌구 프로젝트 설명
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
