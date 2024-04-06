import React from 'react';

import NavigationMenu from '../components/NavigationMenu.js'
import PrivacyPolicy from '../components/privacypolicy.jsx';

import Footer from '../components/Footer.jsx'
import TermsOfUse from '../components/termsofuse.jsx';
import HelpSection from '../components/helpsection.jsx';

function HelpSectionPage() {
  return (
    <>
      <NavigationMenu />
      <HelpSection/>
 
     
      <Footer />
    </>
  );
}
export default HelpSectionPage;