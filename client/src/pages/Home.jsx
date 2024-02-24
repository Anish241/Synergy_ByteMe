import React from "react";
import { Navbar, Footer } from "../components";
import { Fragment } from "react";
import Admin from "../components/admin/adminCard";

const Home = () => {
  return (
    <Fragment>
      <div className="min-h-screen backgroundcol-black">
        
          <Navbar />
           {/* <Admin /> HERO SECTION */}
          <Footer />
        
      </div>
    </Fragment>
  );
};

export default Home;
