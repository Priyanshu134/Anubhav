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
        {/* Genuine dream job experiences */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">Rajesh Kumar</span>
            <span className="rating">Rating: 4.5/5</span>
          </div>
          <p className="comment">"Working as a software engineer has been a dream come true. Every day, I get to solve challenging problems and collaborate with talented colleagues."</p>
        </div>
        <div className="review-card">
          <div className="review-header">
            <span className="author">Anjali Sharma</span>
            <span className="rating">Rating: 4/5</span>
          </div>
          <p className="comment">"Being a travel blogger allows me to explore the world and share my experiences with others. It's incredibly fulfilling to turn my passion into a career."</p>
        </div>
        <div className="review-card">
          <div className="review-header">
            <span className="author">Amit Patel</span>
            <span className="rating">Rating: 3.5/5</span>
          </div>
          <p className="comment">"Working in the film industry has its challenges, but seeing my ideas come to life on the big screen makes it all worth it. I love every moment of it."</p>
        </div>
        <div className="review-card">
          <div className="review-header">
            <span className="author">Deepika Singh</span>
            <span className="rating">Rating: 4.8/5</span>
          </div>
          <p className="comment">"As a wildlife photographer, I get to capture the beauty of nature and raise awareness about conservation. It's a privilege to do what I love for a living."</p>
        </div>
        <div className="review-card">
          <div className="review-header">
            <span className="author">Vivek Gupta</span>
            <span className="rating">Rating: 4.2/5</span>
          </div>
          <p className="comment">"Working as a chef in a Michelin-starred restaurant has been my dream since I was a child. The creativity and precision required in the kitchen keep me motivated every day."</p>
        </div>
        <div className="review-card">
          <div className="review-header">
            <span className="author">Neha Verma</span>
            <span className="rating">Rating: 4.6/5</span>
          </div>
          <p className="comment">"As a fashion designer, I have the opportunity to express my creativity and bring my visions to life through clothing. It's a dream job that allows me to constantly innovate and inspire."</p>
        </div>
        <div className="review-card">
          <div className="review-header">
            <span className="author">Rahul Sharma</span>
            <span className="rating">Rating: 4.3/5</span>
          </div>
          <p className="comment">"Working in the aerospace industry has always been my dream. The thrill of contributing to space exploration and pushing the boundaries of technology is unparalleled."</p>
        </div>
        <div className="review-card">
          <div className="review-header">
            <span className="author">Priya Singh</span>
            <span className="rating">Rating: 4.7/5</span>
          </div>
          <p className="comment">"Being a professional athlete is more than just a job - it's a lifelong dream. The dedication and hard work required are challenging, but the feeling of accomplishment is unmatched."</p>
        </div>
        <div className="review-card">
          <div className="review-header">
            <span className="author">Manoj Kumar</span>
            <span className="rating">Rating: 4.1/5</span>
          </div>
          <p className="comment">"Working as a marine biologist allows me to explore the ocean and study its wonders. It's a dream job that combines my passion for science and nature."</p>
        </div>
        {/* Additional dream job experiences */}
        <div className="review-card">
          <div className="review-header">
            <span className="author">Renuka Patel</span>
            <span className="rating">Rating: 4.9/5</span>
          </div>
          <p className="comment">"Being an astronaut and exploring outer space has been my dream since childhood. Every day of training brings me closer to fulfilling that dream."</p>
        </div>
        <div className="review-card">
          <div className="review-header">
            <span className="author">Suresh Verma</span>
            <span className="rating">Rating: 4.6/5</span>
          </div>
          <p className="comment">"Working as a professional musician allows me to connect with people through music and share my emotions with the world. It's a dream job that brings joy to both me and my audience."</p>
        </div>
        <div className="review-card">
          <div className="review-header">
            <span className="author">Divya Singh</span>
            <span className="rating">Rating: 4.4/5</span>
          </div>
          <p className="comment">"Being a successful author and writing stories that inspire and entertain readers has always been my dream. Every book published feels like a dream come true."</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;


