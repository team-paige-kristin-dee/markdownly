import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';


function Home() {
  return (
    <div className={styles.home}>
      <nav>
        <Link to="/markdown">
      Create a markdown
        </Link>
      </nav>
      <h1>MARKDOWNLY</h1>
      <p>Welcome to an interactive markdown editor where you can create and edit markdown files and see a preview </p>
    </div>
  );
}

export default Home;
