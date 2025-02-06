import { getMenu } from "@/lib/shopify";
import styles from "./Nav.module.css";

export async function Nav() {
  const menu = await getMenu("next-js-frontend-menu");
  console.log(menu);

  return (
    <header className={styles.container}>
      <nav>nav here</nav>
    </header>
  );
}
