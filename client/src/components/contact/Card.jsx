import classes from './css/Card.module.css';

export default function Card({ name, position, information, profile_img }) {
  return (
    <li className={classes.li}>
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
    </li>
  );
}
