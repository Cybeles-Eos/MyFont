import style from './nav.module.css'
import darkLogo from '../../assets/myfont_logo.png'
import menuLine from '../../assets/menu-line.svg'
import closeMenu from '../../assets/close-line.svg'
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'

function Nav(){
  const [ navStyle, setNavStyle ] = useState(`${style.navUl}`);
  const [ click, setClick ] = useState(true);
  const [ menu, setMenu ] = useState(menuLine);

  const change = () => {
    setNavStyle(click ? `${style.navUl} ${style.show}` : `${style.navUl}`);
    setMenu(click ? closeMenu : menuLine);
    setClick(!click);
  }

  return (
    <>
      <nav className={style.navbox}>
        <div className={style.logoBox} onClick={() => location.reload()}>
            <img className={style.logo} id='logo' src={darkLogo}/>  
        </div>
        
        <ul className={navStyle}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/fontpage'>Fonts</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <img onClick={change} className={style.menu} src={menu}/>
      </nav>

      <Outlet />
    </>
  );
}

export default Nav