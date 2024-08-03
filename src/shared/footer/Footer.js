import styles from "./footer.module.css";
import Link from "next/link";

const footerData = [
  {
    name: "company Info",
    items: [
      { item: "about us", url: "" },
      { item: "contact us", url: "" },
      { item: "blogs", url: "" },
      { item: "become a vendor", url: "" },
      { item: "business with us", url: "" },
      { item: "find a store", url: "" },
    ],
  },
  {
    name: "let Us Help You",
    items: [
      { item: "orders", url: "" },
      { item: "checkout", url: "" },
      { item: "downloads", url: "" },
      { item: "addresses", url: "" },
      { item: "Account details", url: "" },
      { item: "Lost password", url: "" },
    ],
  },
  {
    name: "quick Links",
    items: [
      { item: "Special Offers", url: "" },
      { item: "Gift Cards", url: "" },
      { item: "Privacy Policy", url: "" },
      { item: " Teams of Use", url: "" },
      { item: "Portfolio", url: "" },
      { item: "FAQs", url: "" },
    ],
  },

  {
    name: "useful Links",
    items: [
      { item: "Flash Deal", url: "" },
      { item: "New Arrivals", url: "" },
      { item: "Personal Branding", url: "" },
      { item: "Best Seller", url: "" },
      { item: "Top Rating", url: "" },
      { item: "Search Trending", url: "" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footerAllDataContainer}>
      <div className={styles.footerDataContainer}>
        <div>
          <h3 className={styles.callToOrderText}>Call to order</h3>

          <div>
            <h1 className={styles.orderNumber}>+8801770365981</h1>
          </div>
        </div>

        <div className={styles.footerDataListContainer}>
          {footerData.map((footerInfo, ind) => (
            <div key={ind}>
              <h3 className={styles.footerDataListName}>{footerInfo.name}</h3>
              <div className={styles.footerDataListItemContainer}>
                {footerInfo.items.map((item, ind) => (
                  <Link
                    className={styles.footerDataListItem}
                    key={ind}
                    href={item.url}
                  >
                    {item.item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
