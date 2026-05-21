"use client";

import { useState, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAQAAAAAPLY1AAAAQUlEQVR42u3PQREAAAwCoNm/9DL49aABuREREREREREREREREREREREREREREREREREREREREREREREREREREWk8EJEAM6x+0l8AAAAASUVORK5CYII=";

export type SliderImage = {
  image: StaticImageData | string;
  url: string;
};

type Props = {
  images: SliderImage[];
  title: string;
  renderOverlay?: (url: string) => ReactNode;
};

const ImageSlider = ({ images, title, renderOverlay }: Props) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const showArrows = images.length > 1;
  const current = images[index];

  const prev = () => {
    setDirection("left");
    setIndex((i) => (i - 1 + images.length) % images.length);
  };
  const next = () => {
    setDirection("right");
    setIndex((i) => (i + 1) % images.length);
  };

  return (
    <div className={styles.slider}>
      {showArrows && (
        <button className={styles.arrow_prev} onClick={prev} aria-label="Previous image">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      <div className={styles.image_wrapper}>
        {renderOverlay && (
          <div className={styles.image_actions_wrapper}>
            {renderOverlay(current.url)}
          </div>
        )}
        <div
          key={`${index}-${direction}`}
          className={direction === "right" ? styles.slide_enter_right : styles.slide_enter_left}
        >
          <Image
            priority
            src={current.image}
            alt={title}
            className={styles.image}
            width={500}
            height={320}
            style={{ width: "auto", height: "100%" }}
            unoptimized
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
      </div>
      {showArrows && (
        <button className={styles.arrow_next} onClick={next} aria-label="Next image">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  );
};

export default ImageSlider;
