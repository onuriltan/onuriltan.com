import styles from "./index.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";

import Config from "@/config";

const githubIcon: IconDefinition = findIconDefinition({
  prefix: "fab",
  iconName: "github",
});
const linkedInIcon: IconDefinition = findIconDefinition({
  prefix: "fab",
  iconName: "linkedin",
});
const stackoverflowIcon: IconDefinition = findIconDefinition({
  prefix: "fab",
  iconName: "stack-overflow",
});
const workIcon: IconDefinition = findIconDefinition({
  prefix: "fas",
  iconName: "building",
});

const links = [
  {
    icon: <FontAwesomeIcon icon={githubIcon} />,
    name: "Github",
    url: "https://github.com/onuriltan",
  },
  {
    icon: <FontAwesomeIcon icon={linkedInIcon} />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/onur-iltan/",
  },
  {
    icon: <FontAwesomeIcon icon={stackoverflowIcon} />,
    name: "Stackoverflow",
    url: "https://stackoverflow.com/users/3756237/onuriltan",
  },
  {
    icon: <FontAwesomeIcon icon={workIcon} />,
    name: "My Work",
    url: "/work",
  },
];

const Home = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}>
          {Config.name}
          <span className={styles.surname}> {Config.surname}</span>
        </div>
        <div className={styles.description}>Senior Sofware Engineer</div>
        <div className={styles.description_2}>
          Hello, I'm a Software Engineer and enthusiast who enjoys writing clean
          and maintainable code with new and mature technologies. My expertise
          are{" "}
          <span className={styles.description_2_highlight}>
            creating web apps end to end, Javascript, Typescript React.js,
            Node.js, MongoDB and SQL.
          </span>
          Lets get to know each other better! If you have any questions, feel
          free to contact me from my links below.
        </div>
        <div className={styles.links}>
          {links.map((link) => {
            return (
              <a
                className={styles.link}
                key={JSON.stringify(link)}
                target={link.url === "/work" ? "_self" : "_blank"}
                rel="noreferrer"
                href={link.url}
              >
                <span className={styles.linkIcon}>{link.icon}</span>
                <span className={styles.linkName}>{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
