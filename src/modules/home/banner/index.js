import styles from "./banner.module.css";
import Image from "next/image";
import Link from "next/link";

// Import image
import banner1 from "../../../assets/Image/banner/banner1.jpg";
import banner2 from "../../../assets/Image/banner/banner2.jpg";

const bannerData = [
  { image: banner1, bannerUrlPath: "" },
  { image: banner2, bannerUrlPath: "" },
];

const Banner = () => {
  return (
    <div className={styles.bannerAllDataContainer}>
      {bannerData.map((banner, ind) => (
        <Link key={ind} href={banner.bannerUrlPath}>
          <Image className={styles.bannerImage} src={banner.image} alt="" />
        </Link>
      ))}
    </div>
  );
};

export default Banner;
