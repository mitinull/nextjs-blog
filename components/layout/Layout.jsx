import { Navigation } from "./navigation/Navigation";

export const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
    </>
  );
};
