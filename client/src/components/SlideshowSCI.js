import React, { useState } from 'react';
import './Slideshow.css';

const slides = [
  'SCI'
];

function SlideshowSCI() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(index);
  }

  function handleClose() {
    setActiveIndex(null);
  }

  return (
    <div className="slideshow-wrapper">
      <div className="slideshow-list">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slideshow-list-item${activeIndex === index ? ' active' : ''}`}
            onClick={() => handleClick(index)}
          >
            Spinal Cord Injury
          </div>
        ))}
      </div>
      <div className={`slideshow-container${activeIndex !== null ? ' active' : ''}`}>
        <div className="slideshow">
          <button className="close-button" onClick={handleClose}>Close</button>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slideshow-item${activeIndex === index ? ' active' : ''}`}
            >
              <iframe
                src="https://onedrive.live.com/embed?resid=8231C5B016E26FE4%21940&amp;authkey=!ANGlXRZtsSTCIwk&amp;em=2&amp;wdAr=1.7777777777777777"
                title={`Slide ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
          <button className="close-button" onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default SlideshowSCI;


