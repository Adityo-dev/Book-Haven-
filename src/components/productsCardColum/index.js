import styles from "./productsCardColum.module.css";
import Image from "next/image";
import Link from "next/link";

// icons
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineLockReset } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import ProductRating from "../productRating";

const ProductsCardColum = ({ productCardData }) => {
  const { image, rating, title, oldPrice, currentPrice, sold, stock } =
    productCardData;
  return (
    <div>
      <div className={styles.productCardDataInfoContainer}>
        <div className={styles.productImageAndStockContainer}>
          <Link href={""}>
            <Image className={styles.productImage} src={image} alt="" />
            <div>
              <p className={`${stock === 0 ? styles.productOutOfStock : ""}`}>
                <RiEmotionUnhappyLine
                  className={styles.productOutOfStockIcon}
                />{" "}
                out of stock
              </p>
            </div>
          </Link>

          <div className={styles.cardDetailsContainer}>
            <IoEyeSharp className={styles.cardDetailsIcon} />
            <LuShoppingCart className={styles.cardDetailsIcon} />
            <GiSelfLove className={styles.cardDetailsIcon} />
            <MdOutlineLockReset className={styles.cardDetailsIcon} />
          </div>
        </div>

        <div className={styles.productCardDataTextInfoContainer}>
          <ProductRating rating={rating} />
          <p className={styles.productTitle}>{`${title}`}</p>
          <div className={styles.productPriceAndSoldContainer}>
            <div className={styles.productPriceContainer}>
              <del className={styles.productOldPrice}>${oldPrice}</del>
              <p className={styles.productCurrentPrice}>${currentPrice}</p>
            </div>

            <div>
              <p className={styles.productSold}>{sold}Sold</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCardColum;
