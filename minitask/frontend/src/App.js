import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            
            <Link to="/" >Minitask_Algoscale</Link>
          </div>
          <div className="header-links">
            
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin">ADMIN</Link>
            }
          </div>
        </header>
        
        <main className="main">
          <div className="content">
            <Route path="/profile" component={ProfileScreen} />
            
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            
            <Route path="/" exact={true} component={HomeScreen} />


          </div>

        </main>
        <footer className="footer">
          All rights should be reserved.!
    </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
