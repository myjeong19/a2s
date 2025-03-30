import classes from "./css/Title.module.css";

export default function Title({ title, description }) {
  return (
    <div className={classes.title}>
      <h2>{title}</h2>
      <div className={classes.title__paragraph}>
        <p>{description}</p>
      </div>
    </div>
  );
}
