import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/modules/home/hero";
import Banner from "@/modules/home/banner";
import TopProductsLayer from "@/modules/home/topProductsLayer";
import FeaturedProducts from "@/components/featuredProducts";
import NewProducts from "@/components/newProducts";

export default function Home() {
  return (
    <main className={styles.homeDataContainer}>
      <Hero />
      <FeaturedProducts />
      <Banner />
      <TopProductsLayer />
      <NewProducts />
    </main>
  );
}
