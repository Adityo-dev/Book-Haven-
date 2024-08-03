import styles from "./productsCardRow.module.css";
import Image from "next/image";
import Link from "next/link";

// icons
import { RiEmotionUnhappyLine } from "react-icons/ri";
import ProductRating from "../productRating";

const handleButton = ({ btnName, btnUrl }) => {
  return (
    <>
      <Link href={`/${btnUrl}`}>{btnName}</Link>;
    </>
  );
};

const ProductsCardRow = ({ productCardData }) => {
  const { image, rating, title, oldPrice, currentPrice, sold, stock } =
    productCardData;
  return (
    <div>
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
          </div>

          <div className={styles.productCardDataTextInfoContainer}>
            <ProductRating rating={rating} />
            <p className={styles.productTitle}>{`${title}`}</p>
            <div className={styles.productPriceAndSoldContainer}>
              <div className={styles.productPriceContainer}>
                <del className={styles.productOldPrice}>${oldPrice}</del>
                <p className={styles.productCurrentPrice}>${currentPrice}</p>
              </div>
              <p className={styles.productSold}>{sold}Sold</p>
            </div>

            <div>
              <button className={styles.productCardBtn}>View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCardRow;
