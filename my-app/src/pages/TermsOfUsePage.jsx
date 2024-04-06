import React from 'react';

import NavigationMenu from '../components/NavigationMenu.js'
import PrivacyPolicy from '../components/privacypolicy.jsx';

import Footer from '../components/Footer.jsx'
import TermsOfUse from '../components/termsofuse.jsx';

function TermsOfUsePage() {
  return (
    <>
      <NavigationMenu />
      <TermsOfUse/>
 
     
      <Footer />
    </>
  );
}
export default TermsOfUsePage;