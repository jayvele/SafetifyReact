import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <div>
      <NavBar />
      {/* <BackgroundImage /> */}
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
