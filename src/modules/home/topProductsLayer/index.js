import styles from "./topProductsLayer.module.css";
import Image from "next/image";
import Link from "next/link";

// image
import background from "../../../assets/Image/hero/background.png";
import layer from "../../../assets/Image/layer/Layer-1.png";

// image
import product1 from "../../../assets/Image/product/product-1.jpg";
import product2 from "../../../assets/Image/product/product-2.jpg";
import product3 from "../../../assets/Image/product/product-3.jpg";
import product4 from "../../../assets/Image/product/product-4.jpg";
import product5 from "../../../assets/Image/product/product-5.jpg";
import product6 from "../../../assets/Image/product/product-6.jpg";
import product7 from "../../../assets/Image/product/product-7.jpg";
import product8 from "../../../assets/Image/product/product-8.jpg";
import product9 from "../../../assets/Image/product/product-9.jpg";
import product10 from "../../../assets/Image/product/product-10.jpg";
import product11 from "../../../assets/Image/product/product-11.jpg";
import product12 from "../../../assets/Image/product/product-12.jpg";
import product13 from "../../../assets/Image/product/product-13.jpg";
import product14 from "../../../assets/Image/product/product-14.jpg";
import product15 from "../../../assets/Image/product/product-15.jpg";
import product16 from "../../../assets/Image/product/product-16.jpg";
import ProductsCardColum from "@/components/productsCardColum";

const topProducts = [
  {
    image: product6,
    rating: 5,
    title:
      "A Time for Mercy (Jake Brigance) Hardcover – October 13, 2020 Introduction",
    oldPrice: 24.99,
    currentPrice: 14.99,
    sold: 5,
    stock: 10,
  },
  {
    image: product14,
    rating: 5,
    title:
      "Against the Night (The Raines of Wind Canyon, 5) Mass Market Paperback – February 28, 2012 Introduction",
    oldPrice: 24.99,
    currentPrice: 14.99,
    sold: 10,
    stock: 0,
  },
  {
    image: product15,
    rating: 5,
    title:
      "Broken Trust: A Dark High School Romance (Dark Legacy) Paperback – May 21, 2019",
    oldPrice: 24.99,
    currentPrice: 14.99,
    sold: 0,
    stock: 10,
  },
  {
    image: product12,
    rating: 5,
    title: "Great Again: How to Fix Our Crippled America Kindle Edition",
    oldPrice: 24.99,
    currentPrice: 14.99,
    sold: 1,
    stock: 10,
  },
  {
    image: product13,
    rating: 5,
    title: "Hannaford Prep: The Complete Series Paperback – October 24, 2020",
    oldPrice: 24.99,
    currentPrice: 14.99,
    sold: 1,
    stock: 10,
  },
  {
    image: product8,
    rating: 5,
    title: "Hate Me: A Stepbrother Bully Romance Paperback – January… 25, 2021",
    oldPrice: 24.99,
    currentPrice: 14.99,
    sold: 6,
    stock: 10,
  },
  {
    image: product1,
    rating: 5,
    title: "HATE: A Dark Reverse Harem Romance (Madison Kate)",
    oldPrice: 24.99,
    currentPrice: 14.99,
    sold: 6,
    stock: 10,
  },
  {
    image: product16,
    rating: 5,
    title:
      "Island Of The Dolls (World’s Scariest Places – A Psychological Horror… Thriller) Paperback – March 27, 2016",
    oldPrice: 24.99,
    currentPrice: 14.99,
    sold: 0,
    stock: 10,
  },
  {
    image: product7,
    rating: 5,
    title: "Marauder (The Oregon Files) Hardcover – November 10, 2020",
    oldPrice: 24.99,
    currentPrice: 14.99,
    sold: 8,
    stock: 10,
  },
  {
    image: product9,
    rating: 5,
    title:
      "Suicide Forest (World’s Scariest Places – A psychological Horror thriller) Paperback – December 16, 2014Introduction",
    oldPrice: 24.99,
    currentPrice: 14.99,
    sold: 2,
    stock: 10,
  },
];

const TopProductsLayer = () => {
  return (
    <div className={styles.topProductsLayerAllDataContainer}>
      <div className={styles.topProductsLayerDataInfoContainer}>
        <Image className={styles.topProductsLayerImage} src={layer} alt="" />

        <div>
          <h1>Top Products</h1>
          <div className={styles.topProductsCardContainer}>
            {topProducts.slice(0, 3).map((product, ind) => (
              <ProductsCardColum key={ind} productCardData={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProductsLayer;
