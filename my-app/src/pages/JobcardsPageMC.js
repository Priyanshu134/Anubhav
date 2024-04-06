import React from "react";
import JobcardsPage from "../components/JobcardsMC.js";
import NavigationMenu from "../components/NavigationMenu.js";
import Footer from "../components/Footer.jsx";
function JobcardsPageMC() {
    return (
      <>
        <NavigationMenu />
        <JobcardsPage />
        <Footer />
      </>
    );
  }
  export default JobcardsPageMC;