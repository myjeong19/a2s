import classes from "./css/ContactDetail.module.css";
import Gnb from "../layouts/Gnb";
import min from "../../assets/min.jpg";

export default function Eun() {
  return (
    <div className={classes.home}>
      <Gnb />

      <main className={classes.main}>
        <div className={classes.main__title}>
          <p>About Minyeong Jeong</p>
        </div>
        <hr />

        <section className={classes.section1}>
          <div className={classes.profile__wrap}>
            <div className={classes.main__profile}>
              <img src={min} alt="profile" />
            </div>
          </div>

          <div className={classes.section1__wrap}>
            <div className={classes.section1__wrap2}>
              <div className={classes.section1__position}>
                <h3>Position</h3>
                <h3 className={classes.mono__p}>Frontend Developer</h3>
              </div>

              <div className={classes.section1__contact}>
                <h3>Contact</h3>
                <nav>
                  <a className={classes.mono__p} href="">
                    Github,{" "}
                  </a>
                  <a className={classes.mono__p} href="">
                    Linkdin
                  </a>
                </nav>
              </div>
            </div>
            <div className={classes.section1__liner}>
              안녕하세요. 프런트엔드 개발을 지망하는 정민영입니다.
              <br />
              사용자가 직관적으로 이해하고 편안하게 사용할 수 있는, UI/UX
              디자인에 깊은 관심을 가지고 있습니다.
              <br />
              <br />
              또한, Post CSS를 사용하는 것을 좋아합니다.
              <br />
              동료들과 지속적으로 피드백을 주고받으며, 함께 성장해 나가는 과정을
              소중히 여깁니다.
            </div>
          </div>
        </section>

        <hr />

        <section className={classes.section2}>
          <div className={classes.section2__title}>
            <h1>LIMITLESS DEVELOPER</h1>
          </div>

          <div className={classes.section2__information}>
            <div className={classes.section2__container}>
              {/* <div
                className={`${classes.container__box} ${classes.roboto_mono}`}
              >
                <h3>Education</h3>
                <h3 className={classes.mono__p}>
                  2016.03 - 2023.08 인천대학교 임베디드시스템공학과
                </h3>
              </div> */}
              <div className={classes.container__box}>
                <h3>Community</h3>
                <h3 className={classes.mono__p}>Modu Lab</h3>
              </div>

              <div className={classes.container__box}>
                <h3>Experience</h3>
                <h3 className={classes.mono__p}>
                  2023.11-2024.04 웹 풀 스택 개발 부트캠프 수강
                </h3>
              </div>
            </div>

            <div className={classes.section2__container}>
              <div className={classes.container__box}>
                <h3>Skills</h3>
                <h3 className={classes.mono__p}>
                  TypeScript, React, Next.js, React-Query, Redux, Express,
                  Sequelize
                </h3>
              </div>
              {/* <div className={classes.container__box}>
                <h3>Award</h3>
                <h3 className={classes.mono__p}>
                  2019 인천대학교 영어 경시대회 최우수상
                </h3>
                <h3 className={classes.mono__p}>TOEIC 975</h3>
              </div> */}
            </div>
          </div>

          <div />
        </section>
      </main>
    </div>
  );
}
