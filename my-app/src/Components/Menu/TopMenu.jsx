import React from 'react' 
import { Link} from 'react-router-dom'

export class TopMenu extends React.Component {
        render() {
            return <nav className="navbar" role="navigation" aria-label="main navigation"> 
            <div className="navbar-brand"> 
            <a className="navbar-item" href="javascript:void(0)"> 
            <img src="https://vk.com/sticker/1-163-128-1" width={30} height={30} /> 
            </a> 
            </div> 
            <div id="navbarBasicExample" className="navbar-menu"> 
            <div className="navbar-start"> 
            <Link className="navbar-item" to="/">Главная</Link> 
            <Link className="navbar-item" to="/about">О нас</Link> 
            </div>  
            </div> 
            </nav>
        }
      };
    




