import classes from "./css/ProjectDetail.module.css";
import Gnb from "../layouts/Gnb";
import P2 from "../../assets/smartParking/P2.png";
import P3 from "../../assets/smartParking/P3.png";
import P4 from "../../assets/smartParking/P4.png";

const SmartParking = () => {
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
          <h1>딥러닝 기반 스마트 주차 서비스</h1>
        </div>

        <div className={classes.section2__information}>
          <div className={classes.section2__container}>
            <div className={`${classes.container__box} ${classes.roboto_mono}`}>
              <h3>Project type</h3>
              <h3 className={classes.mono__p}>Web, Exhibits</h3>
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
              <h3 className={classes.mono__p}>SGM</h3>
            </div>
            <div className={classes.container__box}>
              <h3>Date</h3>
              <h3 className={classes.mono__p}>2023.0333</h3>
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
              본 프로젝트는 주차 앱의 불편함과 보안 문제를 개선하여 더 편리하고
              안전한 스마트 주차 서비스를 제공하는 것을 목표로 합니다.
            </h3>
            <h3>
              기존 주차 앱은 본인 확인 절차의 미비, 수동 정보 입력, 정보
              오기입에 따른 불이익 등의 문제를 가지고 있었습니다.
            </h3>
            <h3>
              이러한 문제점을 해결하기 위해, 본 프로젝트는 사용자의 정보 입력을
              자동화하고 차량 번호판의 문자 인식뿐만 아니라 차량 이미지와 번호판
              이미지를 비교하여 보안을 강화하는 새로운 서비스를 개발하고자
              합니다.
            </h3>
          </div>
          <div className={classes.gap__small} />

          <img src={P2} className={classes.img__large} />
          <div className={classes.gap__small} />

          <div className={classes.sub}>
            <h1>데모</h1>
          </div>
          <div className={classes.img__container}>
            <img
              src={P3}
              className={classes.img__small}
              style={{ width: "65%" }}
            />
            <img
              src={P4}
              className={classes.img__small}
              style={{ width: "30%" }}
            />
          </div>
          <div className={classes.gap__small} />

          <div className={classes.sub}>
            <h1>데모 프로세스</h1>
          </div>
          <div className={classes.descriptionWrapper}>
            <h3>
              1. <span>OCR과 Classification 모델</span>을 통해 차량 정보 추출
            </h3>
            <h3>
              2. 추출된 정보를 데이터베이스에 등록된 정보와 비교하여 차량 인증
            </h3>
            <h3>
              3. 번호판 인식 오류나 정보 불일치 발생 시.{" "}
              <span>Two-stream siamese network</span>를 사용한 이미지 비교로
              추가 보안 절차 진행
            </h3>
            <h3>4. 최종 차량 통과 여부 결정</h3>
            <h3>5. 최종 결과에 따라 모터 제어</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartParking;
