import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersPageContainer from './components/UsersPage/UsersPageContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContanier';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersPageContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;


