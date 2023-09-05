import { Navigation } from "./navigation/Navigation";

import styles from "./Layout.module.css";
import { ToastContainer } from "react-toastify";

export const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{props.children}</main>
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  );
};
