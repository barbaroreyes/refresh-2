import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header>
        <div>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to ='/'>AllMeetups</Link>
                </li>
                <li>
                    <Link to ='/favorites'>FavoritesPages</Link>
                </li>
                <li>
                    <Link to ='/new-meetup'>new Meetup</Link>
                </li>
            </ul>
        </nav>
      
    </header>
  );
}

export default MainNavigation;
