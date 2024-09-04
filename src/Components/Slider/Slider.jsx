import React from 'react'
import './slider.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';




const Slider = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [course, setCourse] = React.useState('');

    const handleChange = (event) => {
      setCourse(event.target.value);
    };


    useGSAP(() => {
        gsap.from(".main-hadding-component h2", {
            scale: 0,
            opacity: 0,
            duration: 2,
            delay: 1,
            stagger: 1
        })
        gsap.from(".slider-context", {
            scale: 0,
            y: 100,
            opacity: 0,
            duration: 2,
            delay: 1,
            stagger: 1
        })
    })
    return (
        <>
            <div className="main-slider_component">
                <div className="video-content">
                    <video autoPlay muted loop>
                        <source src="img/institude.mp4" type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="container-text_component">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="main-hadding-component">
                                    <h2><span>AR Square IT </span> Institute of Technology</h2>
                                    <h2>RAJASTHAN 6+ BRANCHES</h2>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 col-sm-6">
                                <div className="slider-context">
                                    <img src="img/Training.png" alt="training" />
                                    <h3>Training</h3>
                                    <p>AR Square Institute provides cutting-edge technology training with a focus on augmented reality, enhancing skills for modern tech professionals.</p>
                                    <button onClick={handleOpen}>Join Now</button>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 col-sm-6">
                                <div className="slider-context">
                                    <img src="img/Devlopment.png" alt="devloment" />
                                    <h3>Development</h3>
                                    <p>AR Square Institute offers advanced technology training, specializing in augmented reality development, to equip professionals with essential skills for innovation.</p>
                                    <button onClick={handleOpen}>Join Now</button>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 col-sm-6">
                                <div className="slider-context">
                                    <img src="img/Placement.png" alt="placement" />
                                    <h3>Placement</h3>
                                    <p>AR Square Institute ensures successful placement by connecting graduates with top tech companies, leveraging industry connections and personalized career support.</p>
                                    <button onClick={handleOpen}>Join Now</button>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 col-sm-6">
                                <div className="slider-context">
                                    <img src="img/Intership.png" alt="Intership" />
                                    <h3>Intership</h3>
                                    <p>AR Square Institute offers valuable internships, providing hands-on experience and industry exposure to enhance practical skills and career growth opportunities</p>
                                    <button onClick={handleOpen}>Join Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className="modal-box">
                        <h2>Appointment Form</h2>
                        <form action="">
                            <TextField type="text" label="FirstName" variant="standard" className='Text-Name' />
                            <TextField type="text" label="LastName" variant="standard" className='Text-Name' />
                            <TextField type="number" label="Phone" variant="standard" className='Text-Name' />
                            <TextField type="email" label="Email" variant="standard" className='Text-Name' />
                            <TextField type="text" label="Address" variant="standard" className='Text-Name' />
                            <TextField type="text" label="City" variant="standard" className='Text-Name' />
                            <FormControl variant="standard" className='Course-text'>
                            <InputLabel id="Arsquare-course-details">Courses</InputLabel>
                            <Select
                                labelId="Arsquare-course-details"
                                value={course}
                                onChange={handleChange}
                                label="Courses-Name"
                            >
                                <MenuItem value=""><em>None</em> </MenuItem>
                                <MenuItem value={10}>Web Development</MenuItem>
                                <MenuItem value={20}>Web Desing</MenuItem>
                                <MenuItem value={30}>Graphic Desing</MenuItem>
                                <MenuItem value={40}>Digital Marketing</MenuItem>
                                <MenuItem value={50}>App Development</MenuItem>
                                <MenuItem value={60}>Accounting</MenuItem>
                                <MenuItem value={70}>Tally Prime</MenuItem>
                                <MenuItem value={80}>Basic Computer / RS-CIT</MenuItem>
                                <MenuItem value={90}>CMS Devlopement</MenuItem>
                                <MenuItem value={80}>Video Editing</MenuItem>
                                <MenuItem value={80}>2D & 3D Animation</MenuItem>
                            </Select>
                            </FormControl> 
                            <button type="submit">Book a Appointment</button> 
                            <p>By scheduling this appointment, you agree to arrive on time, provide accurate information, and adhere to AR Square Institute's policies. Cancellations must be made 24 hours in advance. Thank you.</p>
                        </form>
                    </div>
                </Modal>

                <div className="contact-us-content">
                    <a href=" https://wa.me/+919783717366">
                        <WhatsAppIcon />
                    </a>
                    < a href="https://telegram.me/username">
                        <TelegramIcon />
                    </a>
                    <a href="#">
                        <YouTubeIcon />
                    </a>
                </div>

            </div>
        </>
    )
}

export default Slider
