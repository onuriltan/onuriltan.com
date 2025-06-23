import React from "react";
import styles from "./index.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import AppConfig from "@config/index";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    icon: <FontAwesomeIcon icon={faGithub} />,
    name: "Github",
    url: "https://github.com/onuriltan",
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/onur-iltan/",
  },
  {
    icon: <FontAwesomeIcon icon={faStackOverflow} />,
    name: "Stackoverflow",
    url: "https://stackoverflow.com/users/3756237/onuriltan",
  },
  {
    icon: <FontAwesomeIcon icon={faBuilding} />,
    name: "My Work",
    url: "/work",
  },
];

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        {AppConfig.name} <span className={styles.surname}>{AppConfig.surname}</span>
      </div>
      <div className={styles.job_title}>Senior Sofware Engineer</div>
      <div className={styles.description}>
        Hi, I’m Onur, a software engineer based in Istanbul. I build full stack web applications from start to finish. I
        write clean and maintainable code with modern and well-established tools, and I am proficient in{" "}
        <span className={styles.description_highlight}>
          JavaScript, TypeScript, React.js, Node.js, MongoDB and SQL.
        </span>
        <br />
        <br />I enjoy creating smooth user experiences, working with remote teams, and learning new technologies. When
        I’m not coding, I’m usually taking portraits or traveling in my free time. If you’d like to connect or talk
        about a project, feel free to reach out through the links below.
      </div>
      <div className={styles.links}>
        {links.map((link) => {
          if (link.url.includes("https")) {
            return (
              <a className={styles.link} key={JSON.stringify(link)} target="_blank" rel="noreferrer" href={link.url}>
                <span className={styles.linkIcon}>{link.icon}</span>
                <span className={styles.linkName}>{link.name}</span>
              </a>
            );
          } else {
            return (
              <Link className={styles.link} key={JSON.stringify(link)} href={link.url}>
                <span className={styles.linkIcon}>{link.icon}</span>
                <span className={styles.linkName}>{link.name}</span>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
