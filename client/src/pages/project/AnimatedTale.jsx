import classes from "./css/ProjectDetail.module.css";
import Gnb from "../layouts/Gnb";
import demo_part from "../../assets/animatedTale/demo_part.mp4";
import A2 from "../../assets/animatedTale/A2.png";
import A3 from "../../assets/animatedTale/A3.png";
import A4 from "../../assets/animatedTale/A4.png";
import A5 from "../../assets/animatedTale/A5.png";
import A6 from "../../assets/animatedTale/A6.jpg";
import A7 from "../../assets/animatedTale/A7.png";
import A8 from "../../assets/animatedTale/A8.jpg";
import A9 from "../../assets/animatedTale/A9.png";

const AnimatedTale = () => {
  return (
    <div className={classes.detail}>
      <Gnb />
      <section className={classes.section2}>
        <div className={classes.section2__title}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <circle cx="13" cy="13" r="12.5" stroke="#030001" />
          </svg>
          <h1>2D Image Animation Project</h1>
        </div>

        <div className={classes.section2__information}>
          <div className={classes.section2__container}>
            <div className={`${classes.container__box} ${classes.roboto_mono}`}>
              <h3>Project type</h3>
              <h3 className={classes.mono__p}>Web, Exhibits, Video</h3>
            </div>
            <div className={classes.container__box}>
              <h3>Technology stack</h3>
              <h3 className={classes.mono__p}>AI, FastAPI</h3>
            </div>

            <div className={classes.container__box}>
              <h3>Created with</h3>
              <h3 className={classes.mono__p}>~</h3>
            </div>
          </div>

          <div className={classes.section2__container}>
            <div className={classes.container__box}>
              <h3>Supported by</h3>
              <h3 className={classes.mono__p}>
                Korea Art Management Service, ARTS KOREA LAB
              </h3>
            </div>
            <div className={classes.container__box}>
              <h3>Date</h3>
              <h3 className={classes.mono__p}>2023.07 - 2023.11</h3>
            </div>
          </div>
        </div>

        <div />
      </section>
      <div className={classes.gap} />
      <hr />
      <section className={classes.contant}>
        <div className={classes.contant__description}>
          <div className={classes.descriptionWrapper}>
            <h3>
              본 프로젝트는 애니메이션 제작 과정에서의 복잡하고 시간 소모적인
              작업들을 AI를 이용해 간소화 함으로써 일반 사용자들도 간단한
              애니메이션 제작을 경험해볼 수 있도록 돕기 위해 제작되었습니다.
            </h3>
            <h3>
              본 프로젝트를 통해 사용자는 원하는 2D 캐릭터 그림에 모션을
              적용하고 자동으로 렌더링 하여 gif 파일로 추출할 수 있습니다.
              사용자는 원하는 모션을 선택하거나 직접 영상을 촬영하여 생성할 수
              있습니다. 또한, 사용자의 선호에 따라, 캐릭터의 크기, 위치, 해상도,
              모션 속도 등을 조정할 수 있습니다.
            </h3>
            <h3>
              본 프로젝트를 통해 애니메이션 제작의 접근성을 높여 누구나 쉽게
              원하는 간단한 애니메이션을 제작할 수 있을 것으로 기대합니다.
            </h3>
          </div>
          <div className={classes.gap__small} />
          <video src={demo_part} className={classes.img__large} controls />
          <div className={classes.gap} />
          <div className={classes.sub}>
            <h1>Image Segmentation</h1>
            <h3>이미지의 배경으로부터 캐릭터 추출</h3>
          </div>
          <img src={A2} className={classes.img__large} />
          <div className={classes.gap__small} />

          <div className={classes.sub}>
            <h1>2D Character Rigging</h1>
            <h3>캐릭터 이미지로부터 뼈대 위치 추론</h3>
          </div>
          <img src={A3} className={classes.img__large} />
          <div className={classes.gap__small} />

          <div className={classes.sub}>
            <h1>3D to 2D Retargetting</h1>
            <h3>
              3D bvh 모션 데이터를 2D 캐릭터의 뼈대에 적용하여 애니메이션 생성
            </h3>
          </div>
          <img src={A4} className={classes.img__large} />
          <div className={classes.gap__small} />

          <div className={classes.sub}>
            <h1>프로젝트 개요도 및 이용 방법</h1>
          </div>
          <div className={classes.img__container}>
            <img src={A5} className={classes.img__small} />
            <img src={A6} className={classes.img__small} />
          </div>
          <div className={classes.gap__small} />

          <div className={classes.sub}>
            <h1>Supported by</h1>
          </div>
          <div className={classes.img__container}>
            <img src={A9} className={classes.img__small} />
            <img src={A8} className={classes.img__small} />
          </div>
          <div className={classes.gap__small} />
        </div>
      </section>
    </div>
  );
};

export default AnimatedTale;
