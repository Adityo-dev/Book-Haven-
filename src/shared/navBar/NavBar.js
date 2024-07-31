import styles from "./navBar.module.css";
import Image from "next/image";
import Link from "next/link";

// import icons
import { FiFileText } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { TbArrowsRightLeft } from "react-icons/tb";
import { PiSignInFill } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import { RiShoppingCart2Line } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// import image
import NavLogo from "../../assets/Logo/NavLogo/LOGO.png";

const NavBar = () => {
  const navTopItems = [
    { icon: <FiFileText />, itemName: "Track Your order" },
    { icon: <IoLocationSharp />, itemName: "Store Location" },
    { icon: <GiSelfLove />, itemName: "Compare" },
    { icon: <TbArrowsRightLeft />, itemName: "Wishlist" },
    { icon: <PiSignInFill />, itemName: "Sign in / Register" },
  ];

  const navBarCategoriesDataItems = [
    { name: "Ebooks", pathName: "" },
    { name: " Biographies & Memoirs", pathName: "" },
    { name: "Business & Investing", pathName: "" },
    { name: "Children’s Books", pathName: "" },
    { name: "Arts & Photography", pathName: "" },
    { name: "Cookbooks, Food & Wine", pathName: "" },
    { name: "History Books", pathName: "" },
    { name: "Literature & Fiction", pathName: "" },
    { name: "Mystery & Suspense", pathName: "" },
    { name: "Picture Books", pathName: "" },
    { name: "Sci-fi & Fantasy", pathName: "" },
    { name: "Textbooks", pathName: "" },
    { name: "Audio books", pathName: "" },
    { name: "Other", pathName: "" },
  ];

  const navListData = [
    { name: "Home", pathName: "" },
    { name: "Shop", pathName: "" },
    { name: "pages", pathName: "" },
    { name: "blogs", pathName: "" },
    { name: "about", pathName: "" },
    { name: "contact", pathName: "" },
  ];

  return (
    <main className={styles.navBarAllDataContainer}>
      {/* Nav Bar Top section */}
      <div className={styles.navItemsContainer1}>
        <div className={styles.navTopItemContainer}>
          {navTopItems.slice(0, 2).map((topItem, ind) => (
            <div className={styles.navTopItem} key={ind}>
              <span className={styles.navTopItemIcon}>{topItem.icon}</span>{" "}
              <p>{topItem.itemName}</p>
            </div>
          ))}
        </div>

        <div className={styles.navTopItemContainer}>
          {navTopItems.slice(2, 6).map((topItem, ind) => (
            <div className={styles.navTopItem} key={ind}>
              <span className={styles.navTopItemIcon}>{topItem.icon}</span>{" "}
              <p>{topItem.itemName}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nav Bar middle section */}
      <div className={styles.navItemsContainer2Line}>
        <div className={styles.navItemsContainer2}>
          <div>
            <Image src={NavLogo} alt="" />
          </div>

          <div className={styles.navBarSearchFieldContainer}>
            <input
              className={styles.navBarSearchField}
              type="search"
              id="search"
              name="search"
              placeholder="Enter your keyword"
            />
            <AiOutlineSearch className={styles.navBarSearchIcon} />
            <button className={styles.navBarSearchButton}>search</button>
          </div>

          <div className={styles.navBarAddCardContainer}>
            <Link className={styles.navBarAddCardIconContainer} href={"/card"}>
              <RiShoppingCart2Line className={styles.navBarAddCardIcon} />
            </Link>
            <p className={styles.navBarAddCardPrice}>$0.00</p>
          </div>
        </div>
      </div>

      {/* Nav Bar lest section */}
      <div className={styles.navItemsContainer3}>
        <div className={styles.navItemsContainer3NavBarShopByCategoriesData}>
          <div className={styles.navBarShopByCategoriesTextDataContainer}>
            <TfiMenuAlt className={styles.navBarCategoriesMenuIcon} />
            <p>Shop by categories</p>
            <MdOutlineKeyboardArrowDown
              className={styles.categoriesArrowDown}
            />
            <span className={styles.categoriesArrowDownLine} />
          </div>

          <div>
            <div className={styles.navBarShopByCategoriesItemsContainer}>
              {navBarCategoriesDataItems.map((categories, ind) => (
                <div key={ind}>
                  <p>{categories.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.navListDataContainer}>
            {navListData.map((navList, ind) => (
              <Link
                className={styles.navListDataContainerList}
                href={navList.pathName}
                key={ind}
              >
                {navList.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NavBar;
