import React from 'react';

import NavigationMenu from '../components/NavigationMenu.js'
import PrivacyPolicy from '../components/privacypolicy.jsx';

import Footer from '../components/Footer.jsx'
import TermsOfUse from '../components/termsofuse.jsx';
import HelpSection from '../components/helpsection.jsx';
import FraudAlert from '../components/fraudalert.jsx';
import AboutUsSection from '../components/aboutus.jsx';

function AboutUsPage() {
  return (
    <>
      <NavigationMenu />
      <AboutUsSection/>
 
     
      <Footer />
    </>
  );
}
export default AboutUsPage;