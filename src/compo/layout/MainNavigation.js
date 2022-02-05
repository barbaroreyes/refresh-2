import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header>
        <div className="logo">React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to ='/'>All-Meetups</Link>
                </li>
                <li>
                    <Link to ='/favorites'>Favorites-Pages</Link>
                </li>
                <li>
                    <Link to ='/new-meetup'>New-Meetup</Link>
                </li>
            </ul>
        </nav>
      
    </header>
  );
}

export default MainNavigation;
