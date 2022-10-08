import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Route from "./router/Route";
import Router from "./router/Router";
import Routes from "./router/Routes";
import Home from "./components/Home";
import About from "./components/About";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' component={<Home/>}/>
        <Route path='/about' component={<About/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
