import classes from "./css/ResearchDetail.module.css";
import Gnb from "../layouts/Gnb";

const ResearchDetail = () => {
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
              <h3 className={classes.mono__p}>2023.04.05 -</h3>
            </div>
          </div>
        </div>

        <div />
      </section>
      <div className={classes.gap} />
      <hr />
      <section className={classes.contant}>
        <div className={classes.contant__description}>
          <h3>
            As a part of Arts Korea Lab project, this project attempts to
            provide a useful tool for artists or content creators to make 2D
            animation easily.
          </h3>
          <h3>The code is based on the "Animated Drawings" by Meta.</h3>
          <div className={classes.gap__small} />
          <div className={classes.img__large}></div>
          <div className={classes.gap} />
          <div className={classes.sub}>
            <h1>Sub Title</h1>
            <h3>
              This project is a part of the Arts Korea Lab project, which aims
              to provide a useful tool for artists or content creators to make
              2D animation easily. The code is based on the "Animated Drawings"
              by Meta.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchDetail;
