import React from 'react';

const AllPlans = () => {
  // Scroll to a specific section when an image is clicked
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="all-plans">
      <h2>Featured Services</h2>
      <div className="plan-items">
        <div className="plan-item" onClick={() => scrollToSection('section1')}>
          <img src="image1.jpg" alt="Plan 1" />
          <p>Plan 1 Description</p>
        </div>
        <div className="plan-item" onClick={() => scrollToSection('section2')}>
          <img src="image2.jpg" alt="Plan 2" />
          <p>Plan 2 Description</p>
        </div>
        <div className="plan-item" onClick={() => scrollToSection('section3')}>
          <img src="image3.jpg" alt="Plan 3" />
          <p>Plan 3 Description</p>
        </div>
      </div>
    </div>
  );
};

export default AllPlans;
