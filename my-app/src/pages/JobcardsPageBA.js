import React from "react";
import JobcardsPage from "../components/JobcardsBA.js";
import NavigationMenu from "../components/NavigationMenu.js";
import Footer from "../components/Footer.jsx";
function JobcardsPageBA() {
    return (
      <>
        <NavigationMenu />
        <JobcardsPage />
        <Footer />
      </>
    );
  }
  export default JobcardsPageBA;