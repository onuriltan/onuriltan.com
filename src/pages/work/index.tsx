import { TechnologyType, WorkType } from "@app-types/index";
import styles from "./index.module.scss";
import Badge from "@components/badge";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import AppConfig from "@/config";
import AppComponents from "@components/index";

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

  const workTypeOptions = Object.values(WorkType).map((value) => ({
    label: value.charAt(0).toUpperCase() + value.slice(1), // Optional: capitalize
    value,
  }));

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
            Work
          </label>
          <AppComponents.Dropdown
            options={workTypeOptions}
            onSelect={(option) => setWorkType(option.value as WorkType)}
            placeholder="Select Work Type"
            selected={{
              label: workType.charAt(0).toUpperCase() + workType.slice(1), // Optional: capitalize
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
                          <div className={styles.see_live_project_button}>
                            <p>See Live Project</p>
                            <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                          </div>
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

                  {item.githubUrl && (
                    <div className={styles.github_link_wrapper}>
                      <a href={item.githubUrl} target="_blank" rel="noreferrer" className={styles.github_link}>
                        <p>See Github Repository</p>
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  )}
                  <div className={styles.github_links_wrapper}>
                    {item.githubFrontendUrl && (
                      <a href={item.githubFrontendUrl} target="_blank" rel="noreferrer" className={styles.github_link}>
                        <p>See Frontend Repository</p>
                        <i className="fa-brands fa-github"></i>
                      </a>
                    )}
                    {item.githubBackendUrl && (
                      <a href={item.githubBackendUrl} target="_blank" rel="noreferrer" className={styles.github_link}>
                        <p>See Backend Repository</p>
                        <i className="fa-brands fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
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
