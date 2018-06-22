import Header from "./Header";
import Footer from "./Footer";
import Work from "./Work";
import Personal from "./Personal";

const layoutStyle = {
    margin: 0,
    padding: 0
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        <Footer />
          <Work imgURLs={props.imgURLs}/>
          <Personal />
          {props.children}
    </div>
);

export default Layout;
