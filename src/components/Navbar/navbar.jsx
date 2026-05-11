import React from 'react'
import './navbar.css'
import Logo from '../../assets/imgs/logo.png'
import {Link} from 'react-scroll'
import { DownloadIcon } from 'lucide-react'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={Logo} alt='Logo' className='LogoImg' />
      
      <div className='desktopMenu'>
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Skills</Link>
        <Link className='desktopMenuListItem'>Projects</Link>
        <Link className='desktopMenuListItem'>Experience</Link>
        <Link className='desktopMenuListItem'>Contact</Link>
        
      </div>
      <button className='desktopMenuResumeBtn'>
        Download CV<DownloadIcon size={18}/>
      </button>
    </nav>
  )
}

export default Navbar;
