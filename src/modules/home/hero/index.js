"use client";
import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";

//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import image
import slider1 from "../../../assets/Image/hero/slider1.png";
import slider2 from "../../../assets/Image/hero/slider2.png";
import sliderBg from "../../../assets/Image/hero/background.png";

const Hero = () => {
  const heroSliderData = [
    {
      title: "There is no friend as loyal as a book",
      subTitle: "BUGMART -Bring the world of knowledge to you",
      btnUrl: "",
      image: slider1,
    },
    {
      title: "There is no friend as loyal as a book",
      subTitle: "BUGMART -Bring the world of knowledge to you",
      btnUrl: "",
      image: slider2,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {heroSliderData.map((data, ind) => (
            <div key={ind}>
              <Image
                className={styles.sliderBackgroundImage}
                src={sliderBg}
                alt=""
              />

              <div className={styles.heroSliderAllDataContainer}>
                <div className={styles.heroSliderDataContainer}>
                  <div>
                    <h2 className={styles.sliderTitle}>{data.title}</h2>
                    <p className={styles.sliderSubTitle}>{data.subTitle}</p>
                    <Link
                      className={styles.sliderShopNowBtn}
                      href={data.btnUrl}
                    >
                      Shop now
                    </Link>
                  </div>

                  <Image
                    className={styles.sliderDataImage}
                    src={data.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
