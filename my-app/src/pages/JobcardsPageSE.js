import React from "react";
import JobcardsPage from "../components/JobcardsSE.js";
import NavigationMenu from "../components/NavigationMenu.js";
import Footer from "../components/Footer.jsx";
function JobcardsPageSE() {
    return (
      <>
        <NavigationMenu />
        <JobcardsPage />
        <Footer />
      </>
    );
  }
  export default JobcardsPageSE;