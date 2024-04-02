// ReviewSection.js
import axios from 'axios';

import React, { useState, useRef, useEffect } from 'react';
import './ReviewSection.css'; // Import the CSS file for styling

const ReviewSection = () => {
  const [isActive, setIsActive] = useState(false);
  const reviewContainerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(() => {
        reviewContainerRef.current.scrollTo({
          left: reviewContainerRef.current.scrollLeft + 300, // Adjust scroll distance as needed
          behavior: 'smooth',
        });
      }, 3000); // Change the interval time as needed (milliseconds)

      return () => clearInterval(intervalId);
    }
  }, [isActive]);

  const toggleAnimation = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`review-section ${isActive ? 'active' : ''}`} onClick={toggleAnimation}>
      <div className="review-container" ref={reviewContainerRef}>
        {/* Demo reviews */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">John Doe</span>
            <span className="rating">Rating: 5/5</span>
          </div>
          <p className="comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* Add more demo reviews here */}
        {/* Review 25 */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">Emily Wilson</span>
            <span className="rating">Rating: 4/5</span>
          </div>
          <p className="comment">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        {/* Add more demo reviews here */}
        {/* Review 26 */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">Jessica Brown</span>
            <span className="rating">Rating: 3.5/5</span>
          </div>
          <p className="comment">Nulla vitae elit libero, a pharetra augue.</p>
        </div>
        {/* Review 27 */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">David Wilson</span>
            <span className="rating">Rating: 4/5</span>
          </div>
          <p className="comment">Aenean lacinia bibendum nulla sed consectetur.</p>
        </div>
        {/* Add more demo reviews here */}
        {/* Review 28 */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">Sarah Lee</span>
            <span className="rating">Rating: 4.5/5</span>
          </div>
          <p className="comment">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        </div>
        {/* Review 29 */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">Mike Brown</span>
            <span className="rating">Rating: 4/5</span>
          </div>
          <p className="comment">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
        </div>
        {/* Add more demo reviews here */}
        {/* Review 30 */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">Alex Johnson</span>
            <span className="rating">Rating: 3.5/5</span>
          </div>
          <p className="comment">Vestibulum id ligula porta felis euismod semper.</p>
        </div>
        {/* Review 31 */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">Jennifer Taylor</span>
            <span className="rating">Rating: 4/5</span>
          </div>
          <p className="comment">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </div>
        {/* Add more demo reviews here */}
        {/* Review 32 */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">Chris Evans</span>
            <span className="rating">Rating: 5/5</span>
          </div>
          <p className="comment">Donec sed odio dui.</p>
        </div>
        {/* Review 33 */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">Emily Wilson</span>
            <span className="rating">Rating: 4/5</span>
          </div>
          <p className="comment">Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </div>
        {/* Add more demo reviews here */}
        {/* Review 34 */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">John Doe</span>
            <span className="rating">Rating: 4.5/5</span>
          </div>
          <p className="comment">Vestibulum id ligula porta felis euismod semper.</p>
        </div>
        {/* Review 35 */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">Jane Smith</span>
            <span className="rating">Rating: 4/5</span>
          </div>
          <p className="comment">Sed posuere consectetur est at lobortis.</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;


