import React from 'react'
import './navbar.css'
import Logo from '../../assets/imgs/logo.png'
import {Link} from 'react-scroll'
import { DownloadIcon } from 'lucide-react'
import Button from '../../components/button'

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
      <Button 
        className={'desktopMenuResumeBtn'}
        text={'Download CV'}
        icon={<DownloadIcon size={18}/>}
      />

    </nav>
  )
}

export default Navbar;
