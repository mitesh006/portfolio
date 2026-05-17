import React from 'react'
import './navbar.css'
import Logo from '../../assets/imgs/logo.png'
import {Link} from 'react-scroll'
import { DownloadIcon } from 'lucide-react'
import Anchor from '../../components/anchor'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={Logo} alt='Logo' className='LogoImg' />
      
      <div className='desktopMenu'>
        <Link className='desktopMenuListItem' to='Hero'smooth={true} duration={500}>Home</Link>
        <Link className='desktopMenuListItem' to='About'smooth={true} duration={500}>About</Link>
        <Link className='desktopMenuListItem' to='Skills'smooth={true} duration={500}>Skills</Link>
        <Link className='desktopMenuListItem' to='Projects'smooth={true} duration={500}> Projects</Link>
        {/* <Link className='desktopMenuListItem'>Experience</Link> */}
        <Link className='desktopMenuListItem' to='Contact'smooth={true} duration={500}>Contact</Link>
        
      </div>
      <Anchor 
        className={'desktopMenuResumeBtn'}
        download={true}
        text={'Resume'}
        icon={<DownloadIcon size={18}/>}
        link={'/MiteshPatil.pdf'}
      />

    </nav>
  )
}

export default Navbar;
