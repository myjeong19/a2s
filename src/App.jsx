import classes from './css/App.module.css';

function App() {
  return (
    <>
      <header className={classes.header}>
        <h1>A2S LAB</h1>
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
                    Github,{' '}
                  </a>
                  <a className={classes.mono__p} href="">
                    Linkdin
                  </a>
                </nav>
              </div>
            </div>
            <div className={classes.section1__liner}>Hi there!</div>
          </div>
        </section>

        <hr />

        <section className={classes.section2}>
          <div className={classes.section2__title}>
            <h1>LIMITLESS DEVELOPER</h1>
          </div>

          <div className={classes.section2__information}>
            <div className={classes.section2__container}>
              <div className={`${classes.container__box} ${classes.roboto_mono}`}>
                <h3>Education</h3>
                <h3 className={classes.mono__p}>2019 ~ 2023 인천대학교 소비자학과</h3>
              </div>
              <div className={classes.container__box}>
                <h3>Community</h3>
                <h3 className={classes.mono__p}>2019 ~ 2023 인천대학교 소비자학과</h3>
              </div>

              <div className={classes.container__box}>
                <h3>Experience</h3>
                <h3 className={classes.mono__p}>2019 ~ 2023 인천대학교 소비자학과</h3>
              </div>
            </div>

            <div className={classes.section2__container}>
              <div className={classes.container__box}>
                <h3>Skills</h3>
                <h3 className={classes.mono__p}>2019 ~ 2023 인천대학교 소비자학과</h3>
              </div>
              <div className={classes.container__box}>
                <h3>Award</h3>
                <h3 className={classes.mono__p}>2019 ~ 2023 인천대학교 소비자학과</h3>
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
