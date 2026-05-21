"use client";

import { TechnologyType, WorkType } from "@app-types/index";
import styles from "./index.module.scss";
import Badge from "@components/badge";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppConfig from "@/config";
import AppComponents from "@components/index";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Work = () => {
  const [workType, setWorkType] = useState<WorkType>(WorkType.ALL);
  const [technology, setTechnology] = useState<TechnologyType>(TechnologyType.ALL);

  const workTypeOptions = Object.values(WorkType).map((value) => ({
    label: value.charAt(0).toUpperCase() + value.slice(1),
    value,
  }));

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.header_item}>
          <label htmlFor="active-tab" className={styles.select_label}>
            Work
          </label>
          <AppComponents.Dropdown
            options={workTypeOptions}
            onSelect={(option) => setWorkType(option.value as WorkType)}
            placeholder="Select Work Type"
            selected={{
              label: workType.charAt(0).toUpperCase() + workType.slice(1),
              value: workType,
            }}
          />
        </div>
        <div className={styles.header_item}>
          <label htmlFor="technology" className={styles.select_label}>
            Technology
          </label>
          <AppComponents.Dropdown
            options={Object.values(TechnologyType).map((item) => ({
              label: item.charAt(0).toUpperCase() + item.slice(1),
              value: item,
            }))}
            onSelect={(option) => setTechnology(option.value as TechnologyType)}
            placeholder="Select Technology"
            selected={{
              label: technology.charAt(0).toUpperCase() + technology.slice(1),
              value: technology,
            }}
          />
        </div>
      </div>

      {AppConfig.projects
        .filter((item) => item.type === workType || workType === WorkType.ALL)
        .filter((item) => item.technologies.includes(technology) || technology === TechnologyType.ALL)
        .map((item, index) => {
          const itemCount = AppConfig.projects
            .filter((project) => project.type === workType || workType === WorkType.ALL)
            .filter(
              (project) => project.technologies.includes(technology) || technology === TechnologyType.ALL
            ).length;

          return (
            <div
              key={JSON.stringify(item)}
              className={index === itemCount - 1 ? styles.container__noborder : styles.container}
            >
              <div className={styles.image_container}>
                <AppComponents.ImageSlider
                  images={item.images}
                  title={item.title}
                  renderOverlay={(url) => (
                    <Link href={url} target="_blank" rel="noreferrer" className={styles.see_live_project_button}>
                      <p>See Live Project</p>
                      <FontAwesomeIcon icon={faGlobe} />
                    </Link>
                  )}
                />
              </div>
              <div className={styles.content}>
                <div>
                  <p className={styles.title}>{item.title}</p>
                  <div className={styles.type}>
                    <Badge text={item.type} />
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className={styles.left}>
                <p className={styles.title}>Technologies</p>
                <div>
                  {item.technologies.map((tech) => (
                    <p key={tech}>{tech}</p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Work;
