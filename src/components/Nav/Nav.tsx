import { getMenu } from "@/lib/shopify";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import Cart from "../../../public/icons/shoppingCart.svg";

export async function Nav() {
  const menu = await getMenu("next-js-frontend-menu");
  console.log(menu);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <div className={styles.iconContainer}>
            <Cart className={styles.icon} />
          </div>
        </div>
      </nav>
    </header>
  );
}
