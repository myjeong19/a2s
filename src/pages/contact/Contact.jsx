import classes from "./css/Contact.module.css";
import Title from "../../components/ui/Title";
import { List } from "../../components/contact";
import Gnb from "../layouts/Gnb";

export default function Contact() {
  return (
    <main className={classes.contact}>
      <Gnb />

      <Title
        title="Contact"
        description="By fusing our unique AI and XR technology with interacive storytelling,"
      />

      <section className={classes.contact__section}>
        <List />
      </section>
    </main>
  );
}
