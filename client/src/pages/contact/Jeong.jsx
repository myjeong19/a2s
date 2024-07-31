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
                <h3 className={classes.mono__p}>AI 엔지니어</h3>
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
                  - 국민대 (학사) 빅데이터경영통계학과 (2014.03 - 2022.02)
                </h3>
                <h3 className={classes.mono__p}>
                  - 성균관대 (석사) 인공지능융합학과 (2022.02 - 2024.02)
                </h3>
              </div>
              <div className={classes.container__box}>
                <h3>Career</h3>
                <h3 className={classes.mono__p}>
                  - 스마일게이트 AI센터 생성AI서비스팀 (2024.01 - 2024.04)
                </h3>
                <h3 className={classes.mono__p}>
                  - 코드스테이츠 AI Bootcamp (2021.10 - 2022.03)
                </h3>
              </div>

              <div className={classes.container__box}>
                <h3>Experience</h3>
                <h3 className={classes.mono__p}>
                  - 모두의 연구소 AI 그룹 연구원 활동
                </h3>
                <h3 className={classes.mono__p}>
                  - 빅데이터 연합 동아리 투빅스(ToBig’s) 18기
                </h3>
                <h3 className={classes.mono__p}>
                  - Google Machine Learning Bootcamp 2기 수료
                </h3>
                <h3 className={classes.mono__p}>
                  - 스마일게이트 AI멤버쉽 3기 활동
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
                <h3 className={classes.mono__p}>- 빅데이터 분석기사</h3>
                <h3 className={classes.mono__p}>- ADSP</h3>
                <h3 className={classes.mono__p}>
                  - SK Creative Challenge 2022 : 메타버스 UX 서비스 기획 (본선
                  발표 부문 장려상)
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
