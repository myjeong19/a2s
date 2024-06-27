import classes from "./css/ContactDetail.module.css";
import Gnb from "../layouts/Gnb";
import Jeong from "../../assets/Jeong.jpg";

export default function Eun() {
  return (
    <div className={classes.home}>
      <Gnb />

      <main className={classes.main}>
        <div className={classes.main__title}>
          <p>About Jeongwoo Lee</p>
        </div>
        <hr />

        <section className={classes.section1}>
          <div className={classes.profile__wrap}>
            <div className={classes.main__profile}>
              <img src={Jeong} alt="profile" />
            </div>
          </div>

          <div className={classes.section1__wrap}>
            <div className={classes.section1__wrap2}>
              <div className={classes.section1__position}>
                <h3>Position</h3>
                <h3 className={classes.mono__p}>AI Developer</h3>
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
              새로운 지식과 기술에 대한 끊임없는 호기심이 저를 인공지능 분야에
              깊이 빠지게 했습니다.
              <br />
              특히, 다양한 분야와 결합된 'AI + X' 모델을 통해 새로운 가치를
              창출하는 데 큰 관심이 있습니다.
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
                  - 2014.03 - 2022.02 국민대 (학사) 빅데이터경영통계학과
                </h3>
                <h3 className={classes.mono__p}>
                  - 2022.03 - 2024.02 성균관대 (석사) 인공지능융합학과
                </h3>
              </div>
              <div className={classes.container__box}>
                <h3>Community</h3>
                <h3 className={classes.mono__p}>
                  - 성균관대학교 Human-AI Interaction 소속 (2023.03~현재)
                </h3>
                <h3 className={classes.mono__p}>
                  - 스마일게이트멤버쉽 AI 3기 수료 (2023.07~2023.11)
                </h3>
                <h3 className={classes.mono__p}>
                  - AI 기술 기반 주차 관제 시스템 개발
                </h3>
                <h3 className={classes.mono__p}>
                  - 투빅스(ToBig’s) 빅데이터 연합 동아리 운영진 활동
                  (2022.07~2023.07)
                </h3>
                <h3 className={classes.mono__p}>
                  - 코드스테이츠 AI 부트캠프 수료 (2021.03 - 2021.09)
                </h3>
                <h3 className={classes.mono__p}>
                  - 구글 머신러닝 부트캠프 수료 (2021.08 - 2021.12)
                </h3>
              </div>

              <div className={classes.container__box}>
                <h3>Experience</h3>
                <h3 className={classes.mono__p}>
                  - 코드스테이츠 / 인턴 (2021.10~2022.03)
                </h3>
                <h3 className={classes.mono__p}>
                  - Coaching Assistant of AI/DS Bootcamp
                </h3>
              </div>
            </div>

            <div className={classes.section2__container}>
              <div className={classes.container__box}>
                <h3>Skills</h3>
                <h3 className={classes.mono__p}>
                  Python, PyTorch, Tensorflow, OpenCV, Pandas, Matplotlib,
                  Flask, FastAPI, Langchain, Streamlit, Gradio
                </h3>
              </div>
              <div className={classes.container__box}>
                <h3>Award</h3>
                <h3 className={classes.mono__p}>- OPIC IH</h3>
                <h3 className={classes.mono__p}>
                  - SK mySUNI Creative Challenge 2022 / 장려상 / SK (2023.02)
                </h3>
                <h3 className={classes.mono__p}>
                  - 빅데이터 분석기사 / 한국데이터산업진흥원 (2021.07)
                </h3>
                <h3 className={classes.mono__p}>
                  - ADSP / 한국데이터산업진흥원 (2017.12)
                </h3>
              </div>
            </div>
          </div>

          <div />
        </section>
      </main>
    </div>
  );
}
