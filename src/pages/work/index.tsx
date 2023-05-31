import { TechnologyType, WorkType } from "@app-types/index";
import styles from "./index.module.css";
import Config from "@/config";
import Badge from "@components/badge";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import Icons from "@/assets/icons";

const NextArrow = (props: any) => {
  const { onClick, style, className } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: 20 }}
      onClick={onClick}
    >
      <Image src={Icons.ArrowRight} alt="ArrowRight" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick, style, className } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: 20 }}
      onClick={onClick}
    >
      <Image src={Icons.ArrowLeft} alt="ArrowLeft" />
    </div>
  );
};
const defaultSliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  dots: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Work = () => {
  const [workType, setWorkType] = useState<WorkType>(WorkType.ALL);
  const [technology, setTechnology] = useState<TechnologyType>(
    TechnologyType.ALL
  );
  const [sliderSettings, setSliderSettings] = useState(defaultSliderSettings);

  return (
    <div className={styles.main}>
      <style jsx global>
        {`
          .slick-slide {
            margin: 100%px;
          }
          .slick-slide > div {
            margin: 10px;
          }
          .slick-slide > div > div {
            height: 400px;
          }
          // .slick-list {
          //   margin: -25px;
          // }
          .slick-prev {
            left: -15px;
          }
          .slick-next {
            right: -22px;
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
            <div
              key={JSON.stringify(item)}
              className={styles.container}
              // href={item.url}
              // target="_blank"
              // rel="noreferrer"
            >
              <div className={styles.image_container}>
                <Slider {...sliderSettings}>
                  {item.images.map((image) => {
                    return (
                      <Image
                        priority
                        src={image.image}
                        alt={item.title}
                        className={styles.image}
                        key={JSON.stringify(image)}
                      />
                    );
                  })}
                </Slider>
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
