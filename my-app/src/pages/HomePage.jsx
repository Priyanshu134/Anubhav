import React from 'react';
// import SearchBar from '../components/SearchBar.js';
import PopularJobsSection from '../components/PopularJobsSection.js';
import ReviewSection from '../components/ReviewSection.js';
import SignupForm from '../components/SignupForm.js';
import NavigationMenu from '../components/NavigationMenu.js'
// import JobcardsPageCA from '../pages/JobcardsPageCA.js';
import JobProfileBox from '../components/JobProfileBox.js';

import Footer from '../components/Footer.jsx'
// import BoxComponent from '../components/box.js';
function HomePage() {
  return (
    <>
      <NavigationMenu />
      
      
      {/* <JobcardsPageCA /> */}
      {/* <Chat /> */}
      {/* <LoginForm /> */}
      {/* <Jobcard /> */}
      {/* <SignupForm /> */}
      {/* <SearchBar /> */}

      <PopularJobsSection />
      {/* <JobProfileBox /> */}
      {/* <BoxComponent /> */}
      <ReviewSection />
      <Footer />
    </>
  );
}
export default HomePage;