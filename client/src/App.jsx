import classes from "./css/App.module.css";

function App() {
  return (
    <>
      <header className={classes.header}>
        <h1>A2S LAB</h1>

        <strong>menu</strong>

        <div />
      </header>

      <main className={classes.main}>
        <div className={classes.main__title}>
          <p>About Eunbi Kim</p>
        </div>
        <hr />

        <section className={classes.section1}>
          <div className={classes.profile__wrap}>
            <div className={classes.main__profile}></div>
          </div>

          <div className={classes.section1__position}>
            <strong>Position</strong>
            <p>Frontend Developer</p>
          </div>

          <div className={classes.section1__contact}>
            <strong>Contact</strong>
            <nav>
              <a href="">Github</a>
              <a href="">Linkdin</a>
            </nav>
          </div>
        </section>

        <hr />

        <section className={classes.section2}>
          <div className={classes.section2__title}>
            <h1>LIMITLESS DEVELOPER</h1>
          </div>

          <div className={classes.section2__information}>
            <div className={classes.section2__container}>
              <div className={classes.container__box}>
                <strong>Education</strong>
                <p>2019 ~ 2023 인천대학교 소비자학과</p>
              </div>
              <div className={classes.container__box}>
                <strong>Education</strong>
                <p>2019 ~ 2023 인천대학교 소비자학과</p>
              </div>

              <div className={classes.container__box}>
                <strong>Education</strong>
                <p>2019 ~ 2023 인천대학교 소비자학과</p>
              </div>
            </div>

            <div className={classes.section2__container}>
              <div className={classes.container__box}>
                <strong>Education</strong>
                <p>2019 ~ 2023 인천대학교 소비자학과</p>
              </div>
              <div className={classes.container__box}>
                <strong>Education</strong>
                <p>2019 ~ 2023 인천대학교 소비자학과</p>
              </div>
            </div>
          </div>

          <div />
        </section>
      </main>
    </>
  );
}

export default App;
