import React from 'react';
import './boxy.css'; // Import CSS file for styling
import waterImage from './Q.PNG'; // Import the image

const BoxComponent = () => {
  return (
    <div className="box-container">
      <div className="content">
        <div className="text">
          <h1 className="heading">LIVE YOUR DREAM EXPERIENCE</h1>
          <p className="explanation">
            Embarking on the journey to live out your dreams is an exhilarating adventure, made seamless and enriching with the aid of our website. From igniting the spark of inspiration to realizing your aspirations, our platform serves as a guiding light through every step of the way. With a plethora of resources at your fingertips, curated specifically to empower and inspire, you're equipped to navigate the path towards your dreams with confidence and clarity. Whether it's honing new skills, discovering untapped passions, or connecting with a supportive community, our website fosters an environment conducive to growth and fulfillment. Embrace the transformative power of pursuing your dreams, and let our website be your steadfast companion on this extraordinary journey of self-discovery and achievement.
          </p>
        </div>
        <div className="image">
          <img src={waterImage} alt="Water" />
        </div>
      </div>
    </div>
  );
};

export default BoxComponent;