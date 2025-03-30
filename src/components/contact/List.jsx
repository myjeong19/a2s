import classes from "./css/List.module.css";
import Card from "./Card";

const members = [
  {
    id: 1,
    link: "/contact/hyo",
    name: "이효원",
    position: "Backend",
    information: "안녕하세요. 프론트엔드 개발자 정민영입니다.",
    profile_img: "https://avatars.githubusercontent.com/u/69748769?v=4",
  },
  {
    id: 2,
    name: "박상필",
    position: "Frontend",
    information: "안녕하세요. 프론트엔드 개발자 정민영입니다.",
    profile_img: "https://avatars.githubusercontent.com/u/69748769?v=4",
  },
  {
    id: 3,
    link: "/contact/jeong",
    name: "이정우",
    position: "Frontend",
    information: "안녕하세요. 프론트엔드 개발자 정민영입니다.",
    profile_img: "https://avatars.githubusercontent.com/u/69748769?v=4",
  },
  {
    id: 4,
    link: "/contact/min",
    name: "정민영",
    position: "Frontend",
    information: "안녕하세요. 프론트엔드 개발자 정민영입니다.",
    profile_img: "https://avatars.githubusercontent.com/u/69748769?v=4",
  },
  {
    id: 5,
    link: "/contact/eun",
    name: "김은비",
    position: "Frontend",
    information: "안녕하세요. 프론트엔드 개발자 정민영입니다.",
    profile_img: "https://avatars.githubusercontent.com/u/69748769?v=4",
  },
];

export default function List() {
  return (
    <ul className={classes.ul}>
      {members.map((member) => (
        <Card key={member.id} {...member} />
      ))}
    </ul>
  );
}
