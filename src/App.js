import './App.css';
import {Routes , Route} from 'react-router-dom'
import AllMeetups from './pages/AllMeetups'
import FavoritesPages from './pages/Favorites';
import NewMeetups from './pages/NewMeetUps';
import  MainNavigation from './compo/layout/MainNavigation'
function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<AllMeetups/>}/>
        <Route path="/favorites" element={<FavoritesPages/>}/>
        <Route path="/new-meetup" element={<NewMeetups/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
