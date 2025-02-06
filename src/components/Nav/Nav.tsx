import { getMenu } from "@/lib/shopify";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";

export async function Nav() {
  const menu = await getMenu("next-js-frontend-menu");
  console.log(menu);

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>Nav Item + Cart here</div>
      </nav>
    </header>
  );
}
