import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Menu from './components/Menu'
import Specials from './components/Specials'
import Admin from './components/Admin'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className='navContainer'>
            <div className='navButtons'>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
                <li>
                  <Link to='/menu'>Menu</Link>
                </li>
                <li>
                  <Link to='/specials'>Specials</Link>
                </li>
                <li>
                  <Link to='/admin'>Admin</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/' component={Home}>
            <Home />
          </Route>
          <Route path='/about' component={About}>
            <About />
          </Route>
          <Route path='/login' component={Login}>
            <Login />
          </Route>
          <Route path='/menu' component={Menu}>
            <Menu />
          </Route>
          <Route to='/specials' component={Specials}>
            <Specials />
          </Route>
          <Route to='/admin' component={Admin}>
            <Admin />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
