import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Script Reports - Your Premier News Source</h1>
      <p>
        Stay informed with the latest and most relevant news updates from around the globe as we bring trends to 
        your <strong>'phone-step'</strong>. At Script Reports, we bring you top trending stories, in-depth 
        analyses, and comprehensive coverage on a wide range of topics to keep you updated and engaged.
      </p>
      <Link to="newslist" smooth={true} duration={500}>
        <button>Proceed to News</button>
      </Link>
    </div>
  );
};

export default Home;
