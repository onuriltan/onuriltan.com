import { TechnologyType, WorkType } from "@app-types/index";
import styles from "./index.module.css";
import Config from "@/config";
import Badge from "@components/badge";
import Image from "next/image";
import { useState } from "react";

const Work = () => {
  const [workType, setWorkType] = useState<WorkType>(WorkType.ALL);
  const [technology, setTechnology] = useState<TechnologyType>(
    TechnologyType.ALL
  );

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.header_item}>
          <label htmlFor="active-tab" className={styles.select_label}>
            Work Type
          </label>
          <select
            value={workType}
            className={styles.select}
            onChange={(e) => setWorkType(e.target.value as WorkType)}
            id="active-tab"
          >
            {Object.values(WorkType).map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.header_item}>
          <label htmlFor="technology" className={styles.select_label}>
            Technology Type
          </label>
          <select
            value={technology}
            className={styles.select}
            onChange={(e) => setTechnology(e.target.value as TechnologyType)}
            id="technology"
          >
            {Object.values(TechnologyType).map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {Config.projects
        .filter((item) => item.type === workType || workType === WorkType.ALL)
        .filter(
          (item) =>
            item.technologies.includes(technology) ||
            technology === TechnologyType.ALL
        )
        .map((item) => {
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
                  priority
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
