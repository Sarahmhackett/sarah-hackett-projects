import Image from "next/image";
import wmsmessageheaderimage from "../../../public/wms-messenger/wmsmessengerheaderimage.png";
import styles from "./page.module.css";

export default function BlogPost1() {
  return (
    <main>
      <div className={styles.headerArea}>
        <Image
          src={wmsmessageheaderimage}
          alt="wms message image header"
          className={styles.headerImage}
          width={353}
          height={296}
          priority
        />
      </div>
      <div className={styles.titleContainer}>
        <h1>Web Messenger Integration</h1>
      </div>
      <div>
        <p>This is the content of the first blog post.</p>
      </div>
    </main>
  );
}
