import { Navigation } from "./navigation/Navigation";

import styles from "./Layout.module.css"

export const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{props.children}</main>
    </>
  );
};
