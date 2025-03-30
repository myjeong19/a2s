import classes from "./css/Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  link,
  name,
  position,
  information,
  profile_img,
}) {
  return (
    <Link to={link} className={classes.li}>
      <img src={profile_img} alt={name} />
      <section className={classes.li__section}>
        <article>
          <h3>{name}</h3>
          <p>{position}</p>
        </article>

        <div>
          <p>{information}</p>
        </div>
      </section>
    </Link>
  );
}
