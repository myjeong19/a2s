import classes from "./css/ContactDetail.module.css";
import Gnb from "../layouts/Gnb";
import hyo from "../../assets/hyo.jpg";

export default function Eun() {
  return (
    <div className={classes.home}>
      <Gnb />

      <main className={classes.main}>
        <div className={classes.main__title}>
          <p>About HyoOne Lee</p>
        </div>
        <hr />

        <section className={classes.section1}>
          <div className={classes.profile__wrap}>
            <div className={classes.main__profile}>
              <img src={hyo} alt="profile" />
            </div>
          </div>

          <div className={classes.section1__wrap}>
            <div className={classes.section1__wrap2}>
              <div className={classes.section1__position}>
                <h3>Position</h3>
                <h3 className={classes.mono__p}>Backend Developer</h3>
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
              안녕하세요, 이것저것 다 하는 개발자 이효원입니다.
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
              <div
                className={`${classes.container__box} ${classes.roboto_mono}`}
              >
                <h3>Education</h3>
                <h3 className={classes.mono__p}>
                  2016.03 - 2023.08 인천대학교 임베디드시스템공학과
                </h3>
              </div>
              <div className={classes.container__box}>
                <h3>Community</h3>
                <h3 className={classes.mono__p}>Modu Lab</h3>
              </div>

              <div className={classes.container__box}>
                <h3>Experience</h3>
                <h3 className={classes.mono__p}>
                  2022.01 - 2023.12 ICS 국제학교
                </h3>
              </div>
            </div>

            <div className={classes.section2__container}>
              <div className={classes.container__box}>
                <h3>Skills</h3>
                <h3 className={classes.mono__p}>
                  Node.js, Python, React, C++, Matlab, MySQL
                </h3>
              </div>
              <div className={classes.container__box}>
                <h3>Award</h3>
                <h3 className={classes.mono__p}>
                  - 2019 인천대학교 영어 경시대회 최우수상
                </h3>
                <h3 className={classes.mono__p}>- TOEIC 975</h3>
              </div>
            </div>
          </div>

          <div />
        </section>
      </main>
    </div>
  );
}
