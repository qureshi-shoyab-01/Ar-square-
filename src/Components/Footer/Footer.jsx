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






  <footer>
  <div className="row primary">
    <div className="column about">
    <img
          className="logofooter"
          src="img/logo.png"
          alt=""
        />
      <p>
      Ar Square it institute of technology in Chomu which teaches you IT courses according to your choice and interest. It has been 5+ years that our institute is doing great and working with highly expert
      </p>
      
    </div>
    <div className="column links">
      <h3>About Us</h3>
      <ul>
        <li>
          <a href=" "><ArrowDropDownIcon className='down' />Home</a>
        </li>
        <li>
          <a href=""><ArrowDropDownIcon className='down' />About</a>
        </li>
        <li>
          <a href="s"><ArrowDropDownIcon className='down' />Contact</a>
        </li>
        <li>
          <a href=""><ArrowDropDownIcon className='down' />Job Oriented </a>
        </li>
        <li>
          <a href=""><ArrowDropDownIcon className='down' />Coding</a>
        </li>
        <li>
          <a href=""><ArrowDropDownIcon className='down' />Our Team</a>
        </li>
        <li>
          <a href=""><ArrowDropDownIcon className='down' />Placement</a>
        </li>
        
      </ul>
    </div>
    <div className="column links">
      <h3>Address</h3>
      <ul>
        <li>
          <a href=""> <span> THANA MODE CHOMU , JAIPUR <br /> RAJSTHAN PIN: 303702 <br /></span></a>
        </li>
        <li>
          <a href=""><WhatsAppIcon className='addicon' /> <InstagramIcon className='addicon' /><FacebookIcon className='addicon' /><TelegramIcon className='addicon' /></a>
        </li>
       
      </ul>
    </div>
    <div className="column subscribe">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113591.76783017242!2d75.6412365373687!3d27.164383231734263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x396dabef913d6307%3A0x189b755e65da2c46!2s5P7F%2BV92%2C%20Chomu%2C%20Rajasthan%20303702!3m2!1d27.164407299999997!2d75.723638!5e0!3m2!1sen!2sin!4v1725948058613!5m2!1sen!2sin"
  
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
    </div>
  </div>
  
</footer>

    </>
  )
}

export default Footer
