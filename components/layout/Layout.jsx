import { Navigation } from "./navigation/Navigation";
import { ToastContainer } from "react-toastify";

export const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  );
};
