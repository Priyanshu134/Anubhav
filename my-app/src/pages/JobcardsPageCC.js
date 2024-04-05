import React from "react";
import JobcardsPage from "../components/JobcardsCC.js";
import NavigationMenu from "../components/NavigationMenu.js";
import Footer from "../components/Footer.jsx";
function JobcardsPageCC() {
    return (
      <>
        <NavigationMenu />
        <JobcardsPage />
        <Footer />
      </>
    );
  }
  export default JobcardsPageCC;