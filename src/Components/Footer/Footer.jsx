import React from 'react'
import './Footer.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <>

      <div className="col-lg-4">
        <div className="footer">
          <img src="/img/ logo.jpg" alt="logo" />
        </div>
      </div>


      <div className="col-lg-2">
        <div className="footer">
          <h4>About Us</h4>
          <ul>
            <li> <ArrowDropDownIcon className='down' />Home</li>
            <li><ArrowDropDownIcon className='down' />About</li>
            <li><ArrowDropDownIcon className='down' />Contact</li>
            <li><ArrowDropDownIcon className='down' />Job Oriented Courses</li>
            <li><ArrowDropDownIcon className='down' />Coding</li>
            <li><ArrowDropDownIcon className='down' />Our Team</li>
            <li><ArrowDropDownIcon className='down' />Placement</li>
          </ul>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="footer">
          <h4>Contact Us</h4>
          <ul>
            <li><ArrowDropDownIcon className='down' />Phone : <small>+91-9783717366</small></li>
            <li><ArrowDropDownIcon className='down' />Mob : <small>+91-7732837173</small> </li>
            <li><ArrowDropDownIcon className='down' />Email : <small>arsquarechomu@gmail.com</small> </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="footer">
          <div className="address">
            <h4>Address </h4> <span>AR SQUARE IT BEST COMPUTER<br /> CLASSES THANA MODE CHOMU , JAIPUR <br /> RAJSTHAN PIN: 303702 <br /></span>
            <ul>
              <li><WhatsAppIcon className='addicon' /></li>
              <li><InstagramIcon className='addicon' /></li>
              <li><FacebookIcon className='addicon' /></li>
              <li><TelegramIcon className='addicon' /></li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer
