import React from 'react';
// import SearchBar from '../components/SearchBar.js';
import PopularJobsSection from '../components/PopularJobsSection.js';
import ReviewSection from '../components/ReviewSection.js';
import SignupForm from '../components/SignupForm.js';
import NavigationMenu from '../components/NavigationMenu.js'
import JobcardsPageCA from '../components/JobcardsPageCA.js';

import Footer from '../components/Footer.jsx'

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
      <ReviewSection />
      <Footer />
    </>
  );
}
export default HomePage;