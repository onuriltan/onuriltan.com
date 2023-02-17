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
];

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.title}>
          {Config.name}
          <span className={styles.surname}> {Config.surname}</span>
        </div>
        <div className={styles.description}>Senior Sofware Engineer</div>
        <div className={styles.links}>
          {links.map((link) => {
            return (
              <a
                className={styles.link}
                key={JSON.stringify(link)}
                target="_blank"
                rel="noreferrer"
                href={link.url}
              >
                <span className={styles.linkIcon}>{link.icon}</span>
                <span className={styles.linkName}>{link.name}</span>
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
