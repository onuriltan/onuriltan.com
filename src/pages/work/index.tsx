import { TechnologyType, WorkType } from "@app-types/index";
import styles from "./index.module.scss";
import Config from "@/config";
import Badge from "@components/badge";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, findIconDefinition } from "@fortawesome/fontawesome-svg-core";

const LeftArrow: IconDefinition = findIconDefinition({
  prefix: "fas",
  iconName: "chevron-left",
});
const RightArrow: IconDefinition = findIconDefinition({
  prefix: "fas",
  iconName: "chevron-right",
});

const NextArrow = (props: any) => {
  const { onClick, style, className } = props;
  return (
    <div className={`${className} ${styles.arrow}`} style={{ ...style, zIndex: 10 }} onClick={onClick}>
      <FontAwesomeIcon icon={RightArrow} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick, style, className } = props;
  return (
    <div className={`${className} ${styles.arrow}`} style={{ ...style, zIndex: 10 }} onClick={onClick}>
      <FontAwesomeIcon icon={LeftArrow} />
    </div>
  );
};

const defaultSliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  dots: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Work = () => {
  const [workType, setWorkType] = useState<WorkType>(WorkType.ALL);
  const [technology, setTechnology] = useState<TechnologyType>(TechnologyType.ALL);
  const [sliderSettings, setSliderSettings] = useState(defaultSliderSettings);

  return (
    <div className={styles.main}>
      <style jsx global>
        {`
          .slick-prev {
            left: -30px;
            top: 50%;
          }
          .slick-next {
            top: 50%;
            right: -34px;
          }
          .slick-prev:before,
          .slick-next:before {
            content: "" !important;
          }
        `}
      </style>
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
            Technology
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
        .filter((item) => item.technologies.includes(technology) || technology === TechnologyType.ALL)
        .map((item, index) => {
          const itemCount = Config.projects
            .filter((project) => project.type === workType || workType === WorkType.ALL)
            .filter((project) => project.technologies.includes(technology) || technology === TechnologyType.ALL).length;

          return (
            <div
              key={JSON.stringify(item)}
              className={index === itemCount - 1 ? styles.container__noborder : styles.container}
            >
              <div className={styles.image_container}>
                <div>
                  <Slider {...sliderSettings}>
                    {item.images.map((image) => {
                      return (
                        <a
                          href={image.url}
                          target="_blank"
                          rel="noreferrer"
                          key={JSON.stringify(image)}
                          className={styles.image_wrapper}
                        >
                          <Image
                            priority
                            src={image.image}
                            alt={item.title}
                            className={styles.image}
                            width={100}
                            height={50}
                            unoptimized
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAQAAAAAPLY1AAAAQUlEQVR42u3PQREAAAwCoNm/9DL49aABuREREREREREREREREREREREREREREREREREREREREREREREREREREWk8EJEAM6x+0l8AAAAASUVORK5CYII="
                          />
                        </a>
                      );
                    })}
                  </Slider>
                </div>
                {item.githubUrl && (
                  <a href={item.githubUrl} target="_blank" rel="noreferrer">
                    <div className={styles.github_link}>
                      <p>See Github Repository</p>
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </div>
                  </a>
                )}
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
            </div>
          );
        })}
    </div>
  );
};

export default Work;
