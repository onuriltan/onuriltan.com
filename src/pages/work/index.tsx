import styles from "./index.module.css";
import Config from "@/config";
import Badge from "@components/badge";
import Image from "next/image";
import { useState } from "react";

enum WorkType {
  CORPORATE = "Corporate",
  FREELANCE = "Freelance",
  HOBBY = "Hobby",
}

const WorkTypes: WorkType[] = [
  WorkType.CORPORATE,
  WorkType.FREELANCE,
  WorkType.HOBBY,
];

const Work = () => {
  const [activeTab, setActiveTab] = useState<WorkType>(WorkType.CORPORATE);

  return (
    <div className={styles.main}>
      <select
        value={activeTab}
        className={styles.select}
        onChange={(e) => setActiveTab(e.target.value as WorkType)}
      >
        {WorkTypes.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
      {Config.projects.map((item) => {
        return (
          <a
            key={JSON.stringify(item)}
            className={styles.container}
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.image_container}>
              <Image
                src={item.image}
                alt={item.title}
                className={styles.image}
              />
            </div>
            <div>
              <p className={styles.title}>{item.title}</p>
              <div className={styles.type}>
                <Badge text={item.type} />
              </div>
              <p>{item.description}</p>
            </div>
            <div className={styles.left}>
              <p className={styles.title}>Technologies</p>
              <ul className={styles.list}>
                {item.technologies.map((item) => {
                  return <li key={JSON.stringify(item)}>{item}</li>;
                })}
              </ul>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Work;
