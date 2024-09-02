import React, { useState } from 'react';
import './C.css'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';


const Courses = () => {
    const [content, setContent] = useState(<Van />);

    const handleClick = (component) => {
        setContent(component);
    };

    return (
        <>
            <div className="col-lg-4 col-8">
                <div className="Display">
                    <img src="/img/output-onlinegiftools copy.gif" alt="" />
                    {content}


                </div>
            </div>

            <div className="col-lg-8 col-4">
                <div className="main-1">
                    <div className="row">

                        {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">



                                <div className="box1" onClick={() => handleClick(<Van />)}>
                                    <img src="/img/development.png" alt="" />

                                    <h3>Web-Designing (UI/UX)</h3>
                                    <button className='read'>Read More</button>
                                </div>


                            </div>
                        </div>

                        {/* small card div end */}

                        {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">



                                <div className="box1" onClick={() => handleClick(<Wd />)}>
                                    <img src="/img/html.png" alt="" />

                                    <h3>Web-Development</h3>
                                    <button className='read'>Read More</button>
                                </div>


                            </div>
                        </div>

                        {/* small card div end */}





                        {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">

                                <div className="box1" onClick={() => handleClick(<Gd />)}>

                                    <img src="/img/garaphic.png" alt="" />
                                    <h3>Graphics Designing </h3>
                                    <button className='read'>Read More</button>
                                </div>
                            </div>
                        </div>

                        {/* small card div end */}




                        {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">

                                <div className="box1" onClick={() => handleClick(<Excel />)}>

                                    <img src="/img/pngwing.com.png" alt="" />
                                    <h3>Advance Excel</h3>
                                    <button className='read'>Read More</button>
                                    <h3></h3>
                                </div>


                            </div>
                        </div>

                        {/* small card div end */}





                        {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">
                                <div className="box1" onClick={() => handleClick(<Pally />)}>

                                    <img src="/img/tally2.png" alt="" />
                                    <h3>RS-CIT/ Tally</h3>
                                    <button className='read'>Read More</button>
                                    <h3></h3>
                                </div>

                            </div>
                        </div>

                        {/* small card div end */}



                        {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">

                                <div className="box1" onClick={() => handleClick(<Com />)}>
                                    <img src="/img/app.png" alt="" />
                                    <h3>App Development</h3>
                                    <button className='read'>Read More</button>
                                    <h3></h3>
                                </div>
                            </div>
                        </div>

                        {/* small card div end */}


                        {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">

                                <div className="box1" onClick={() => handleClick(<Science />)}>
                                    <img src="/img/science.png" alt="" />
                                    <h3>Data Science</h3>
                                    <button className='read'>Read More</button>
                                    <h3></h3>
                                </div>
                            </div>
                        </div>

                        {/* small card div end */}



                        {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">

                                <div className="box1" onClick={() => handleClick(<Analytics />)}>
                                    <img src="/img/ana.png" alt="" />
                                    <h3>Data Analytics</h3>
                                    <button className='read'>Read More</button>
                                    <h3></h3>
                                </div>

                            </div>
                        </div>

                        {/* small card div end */}  {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">

                                <div className="box1" onClick={() => handleClick(<Machine />)}>
                                    <img src="/img/mac.png" alt="" />
                                    <h3>Machine Learning</h3>
                                    <button className='read'>Read More</button>
                                </div>

                            </div>
                        </div>

                        {/* small card div end */}  {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">

                                <div className="box1" onClick={() => handleClick(<Vfx />)}>
                                    <img src="/img/vfx.png" alt="" />
                                    <h3>VFX (Visual Effects)</h3>
                                    <button className='read'>Read More</button>
                                </div>

                            </div>
                        </div>

                        {/* small card div end */}  {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">

                                <div className="box1" onClick={() => handleClick(<Video />)}>
                                    <img src="/img/vid.png" alt="" />
                                    <h3>Video Editing</h3>
                                    <button className='read'>Read More</button>
                                </div>

                            </div>
                        </div>

                        {/* small card div end */}



                        {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">

                                <div className="box1" onClick={() => handleClick(<Microsoft />)}>
                                    <img src="/img/office.png" alt="" />
                                    <h3>Microsoft Office</h3>
                                    <button className='read'>Read More</button>
                                </div>

                            </div>
                        </div>

                        {/* small card div end */}


                        {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">

                                <div className="box1" onClick={() => handleClick(<Hacking />)}>
                                    <img src="/img/hack1.png" alt="" />
                                    <h3>Ethical Hacking</h3>
                                    <button className='read'>Read More</button>
                                </div>

                            </div>
                        </div>

                        {/* small card div end */}


                        {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">

                                <div className="box1" onClick={() => handleClick(<Digital />)}>
                                    <img src="/img/digital1.png" alt="" />
                                    <h3>Digital Marketing</h3>
                                    <button className='read'>Read More</button>
                                </div>

                            </div>
                        </div>

                        {/* small card div end */}


                        {/* small card div start */}

                        <div className="col-lg-4">
                            <div className="dc">

                                <div className="box1" onClick={() => handleClick(<Banking />)}>
                                    <img src="/img/bank.png" alt="" />
                                    <h3>Banking & Accounts</h3>
                                    <button className='read'>Read More</button>
                                </div>

                            </div>
                        </div>

                        {/* small card div end */}
                    </div>
                </div>
            </div>
        </>
    );
};

// Inner Data section start

// van is define in onclick event web desining

const Van = () => {
    return (

        <div className="dev">

            <div id="info">
                <h5> Web - Desining:</h5>
            </div>

            <p>Web design is the process of planning, conceptualizing, and implementing a website's layout, content, and appearance to make it functional and user-friendly.</p>

            <div id="info">
                <h4>Duration :</h4>
            </div>

            <p>On average, web designing course duration varies between 2 months to 6 months. </p>



            <div id="info">
                <h4>Topics :</h4>
            </div>

            <ul>
                <li>Design: Typography, color theory, and layout </li>
                <li>Coding: HTML, CSS, and JavaScript  </li>
                <li>User research: User interviews, observations, and demographic studies </li>


            </ul>

            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>

    )
}

// wd is define in onclick event wd (web development)

const Wd = () => {
    return (

        <div className="dev">

            <div id="info">
                <h5> Web - Development:</h5>
            </div>

            <p>Web design is the process of planning, conceptualizing, and implementing a website's layout, content, and appearance to make it functional and user-friendly.</p>

            <div id="info">
                <h4>Duration :</h4>
            </div>

            <p>Some say that beginners can learn the basics of HTML, CSS, and JavaScript in 6–12 months, while others say you can learn website development skills from scratch in 5–6 months.  </p>



            <div id="info">
                <h4>Topics :</h4>
            </div>

            <ul>
                <li>Design: Typography, color theory, and layout </li>
                <li>Coding: HTML, CSS, and JavaScript  </li>
                <li>User research: User interviews, observations, and demographic studies </li>


            </ul>

            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>

    )
}

// Gd is define in onclick event gd(graphic desining)

const Gd = () => {
    return (

        <div className="dev">

            <div id="info">
                <h5>Graphic - Design:</h5>
            </div>

            <p>Graphic design is a craft where professionals create visual content to communicate messages. </p>

            <div id="info">
                <h4>Duration :</h4>
            </div>

            <p>Certificate programs: Some programs offer certificate programs that can be completed in 16 weeks or 6 months.</p>



            <div id="info">
                <h4>Topics :</h4>
            </div>

            <ul>
                <li>Adobe Illustrator</li>
                <li>CorelDRAW  </li>
                <li>Adobe Photoshop</li>
                <li>Adobe Express</li>
                <li>VistaCreate</li>



            </ul>

            <br />
            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>

    )
}

// excel is define in onclick  event excel(advanced excel)

const Excel = () => {
    return (

        <div className="dev">

            <div id="info">
                <h5>Advanced - Excel:</h5>
            </div>

            <p>Advanced Excel skills include the ability to produce graphs and tables, use spreadsheets efficiently, and perform calculations and automation to process large volumes of data.</p>

            <div id="info">
                <h4>Duration :</h4>
            </div>

            <p>Overview. Aptech's Advanced Excel is a 1 month course offered at the Certificate level.</p>



            <div id="info">
                <h4>Topics :</h4>
            </div>

            <ul>
                <li>PivotTables</li>
                <li>VBA macro</li>
                <li>Conditional formatting</li>
                <li>Chart</li>
                <li>Advanced charting , Data validation , Sort function</li>



            </ul>

            <br />
            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>
    )
}



// pally define in onclick event tally


const Pally = () => {
    return (
        <div className="dev">

            <div id="info">
                <h5>Tally :</h5>
            </div>

            <p>Tally Solutions is an Indian multinational technology company that provides enterprise resource planning software. It is headquartered in Bangalore.</p>

            <div id="info">
                <h4>Duration :</h4>
            </div>

            <p>Generally, the duration of a Tally course is 1 – 3 months, but it varies depending on the tally institution you want to join.</p>



            <div id="info">
                <h4>Topics :</h4>
            </div>

            <ul>
                <li>Inventory: Manage inventory. </li>

                <li>Taxes: Learn about Goods and Services Tax (GST) and Value Added Tax (VAT).
                </li>
                <li>Payroll: Process payroll, calculate employee benefits, and manage company payroll.
                </li>

                <li>Advanced charting , Data validation , Sort function</li>



            </ul>
            <br />
            <br />


            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>
    );
};

// com is define in onclick event app development

const Com = () => {
    return (
        <div className="dev">

            <div id="info">
                <h5>App - Development :</h5>
            </div>

            <p>Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.</p>

            <div id="info">
                <h4>Duration :</h4>
            </div>

            <p>What is a standard mobile app development timeline? On average, it will take 2-4 months to develop a simple mobile app like a plain to-do list app, 4-7 months to develop a medium-complexity app like a fitness tracker, and 7-12+ months – a complex app like a social media platform or a mobile banking app.</p>



            <div id="info">
                <h4>Topics :</h4>
            </div>

            <ul>
                <li>programming languages,JavaScript, C++, Python, C#, Java, Kotlin, React.js, Swift,  </li>

                <li>user experience (UX) design,
                </li>
                <li>cross-platform development
                </li>

                <li>Objective-C, and Angular.</li>



            </ul>
            <br />



            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>
    );
};



// science is define in onclick event science (Data Sceince)

const Science = () => {
    return (
        <div className="dev">

            <div id="info">
                <h5>Data - Science:</h5>
            </div>

            <p>Data science is a multidisciplinary field that combines principles from mathematics, statistics, artificial
                intelligence, and computer engineering to analyze large amounts of data to extract insights for business. </p>

            <div id="info">
                <h4>Duration :</h4>
            </div>

            <p>Data Science is a full-time course of 3-years duration. The course comprises of
                study of domains of Artificial Intelligence, Business Analytics, and Computer Science.</p>



            <div id="info">
                <h4>Topics :</h4>
            </div>

            <ul>
                <li>
                    Machine learning </li>

                <li>
                    Data visualization
                </li>
                <li>Programming
                </li>

                <li>Cloud computing ,
                    Data mining, Big data,
                    Statistics,
                    Natural language processing,</li>



            </ul>
            <br />


            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>
    )
}

// Analytics is define in onclick event Analytics (Data Analytics)

const Analytics = () => {
    return (

        <div className="dev">

            <div id="info">
                <h5>Data - Analytics:</h5>
            </div>

            <p>Data analytics is the process of examining raw data to find patterns, draw conclusions, and make informed decisions</p>

            <div id="info">
                <h4>Duration :</h4>
            </div>

            <p>Diploma or postgraduate diploma: Depending on the institute, these courses can take 8 months to 1 year.</p>



            <div id="info">
                <h4>Topics :</h4>
            </div>

            <ul>
                <li>
                    Descriptive, </li>

                <li>
                    Predictive,
                </li>
                <li>Diagnostic,
                </li>

                <li> Prescriptive Insights.</li>



            </ul>
            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>

    )
}

// Machine is define in onclick event Machine(Machine learning)


const Machine = () => {
    return (
        <div className="dev">

            <div id="info">
                <h5>Machine - Learning:</h5>
            </div>

            <p>
                Machine learning (ML) is a branch of artificial intelligence (AI) and computer science that
                focuses on the using data and algorithms to enable AI to imitate the way that humans learn,
                gradually improving its accuracy.</p>

            <div id="info">
                <h4>Duration :</h4>
            </div>

            <p>The average machine learning curriculum runs around 6 months, although it can take years to master multiple requirements for a specific role.</p>



            <div id="info">
                <h4>Topics :</h4>
            </div>

            <ul>
                <li>
                    Reinforcement Learning </li>

                <li>
                    Neural network
                </li>
                <li>
                    Regression
                </li>

                <li>
                    Artificial intelligence ,
                    Data mining,
                    Computer cluster ,
                    Computer vision ,
                    Classification ,
                    Decision trees.</li>



            </ul>
            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>
    )
}


// vfx is define in onclick event vfx (vissual effects)

const Vfx = () => {
    return (

        <div className="dev">

            <div id="info">
                <h5>VFX (Visual Effects):</h5>
            </div>

            <p>
                A career in Visual Effects (VFX) is one of the most sought-after careers in today's time.
                It has introduced us to the wonders of the larger-than-life visual effects (onscreen)
                that bring the fantasy world alive. MAAC understands the true potential of VFX.
                And therefore, it has introduced some exclusive courses on VFX</p>

            <div id="info">
                <h4>Duration :</h4>
            </div>

            <p>Visual effects (VFX) courses can range in duration from 6 months to 4 years, depending on the level of the course. </p>



            <div id="info">
                <h4>Topics :</h4>
            </div>

            <ul>
                <li>
                    Animation and VFX Principles, Lighting and Rendering, Tools and Techniques of Cinematography, </li>

                <li>
                    Mass Media and Media Literacy,
                </li>
                <li>
                    Animation Drawing,
                </li>

                <li>
                    Augmented Reality and Virtual Reality, Story Design and Development, Advanced Rigging, </li>



            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>

    )
}

// video is define in onclick event video (Video editing)

const Video = () => {
    return (
        <div className="dev">
            <div id="info">
                <h5>Video Editing:</h5>
            </div>
            <p> Video editing is the art of manipulating and combining video files to create a completed video project.
                Video Editors will cut together film clips, alter and correct sound mixing, add digital effects,
                and make other essential technical changes to video files.</p>
            <div id="info">
                <h4>Duration :</h4>
            </div>
            <p>Diploma programs: These long-term courses can last 6–18 months and cover fundamentals like graphic design, photo editing, and non-linear video editing.</p>
            <div id="info">
                <h4>Topics :</h4>
            </div>
            <ul>
                <li>Video editing fundamentals , Adobe Premiere Pro , Final Cut Pro </li>
                <li>Color grading , Film editing , Editing techniques ,</li>
                <li>Animation Drawing,</li>
                <li>Adobe After Effects , </li>
            </ul>
            <br /> <br /><br /><br /> <br /><br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>
            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>
            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />
        </div>
    )
}

// Microsoft is define in onclick event Microsoft (Microsoft Office)

const Microsoft = () => {
    return (
        <div className="dev">
            <div id="info">
                <h5>Microsoft - Office:</h5>
            </div>
            <p>
                Microsoft Office, or simply Office, is a family of client software,
                server software, and services developed by Microsoft
                . It was first announced by Bill Gates on August 1, 1988, at COMDEX in Las Vegas.</p>
            <div id="info">
                <h4>Duration :</h4>
            </div>
            <p>2 to 6 months </p>
            <div id="info">
                <h4>Topics :</h4>
            </div>
            <ul>
                <li>none</li>
                <li>
                    none

                </li>

                <li>none </li>

                <li>none </li>



            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>
    )
}

// Hacking is define in onclick event Hacking (Ethical Hacking)

const Hacking = () => {
    return (
        <div className="dev">

            <div id="info">
                <h5>Ethical - Hacking:</h5>
            </div>

            <p>
                Ethical hacking is a process of detecting vulnerabilities in an application,
                system, or organization's infrastructure that an attacker can use
                to exploit an individual or organization. </p>

            <div id="info">
                <h4>Duration :</h4>
            </div>

            <p>Diploma in Ethical Hacking and IT Security	1 - 2 years</p>



            <div id="info">
                <h4>Topics :</h4>
            </div>

            <ul>
                <li>
                    none</li>

                <li>
                    none

                </li>

                <li>none </li>

                <li>none </li>



            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>
    )
}

// Digital is define in onclick event Digital (Digital Marketing)

const Digital = () => {
    return (
        <div className="dev">

            <div id="info">
                <h5>Digital - Marketing:</h5>
            </div>

            <p>
                Digital marketing is the component of marketing that uses the
                Internet and online-based digital technologies such as desktop computers,
                mobile phones, and other digital media and platforms to promote products and services.</p>

            <div id="info">
                <h4>Duration :</h4>
            </div>

            <p>Specialist courses: These courses can be eight to 12 months long and are designed for people who want to become digital marketing specialists.
            </p>



            <div id="info">
                <h4>Topics :</h4>
            </div>

            <ul>
                <li>
                    Search engine optimization</li>

                <li>
                    Facebook marketing

                </li>

                <li>YouTube marketing</li>

                <li>Content marketing, Google AdWords, Digital marketing framework , Search Engine Marketing, Email marketing </li>



            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>
    )
}

// Banking is define in onclick event Banking (Banking & Accounts)

const Banking = () => {
    return (
        <div className="dev">

            <div id="info">
                <h5>Digital - Marketing:</h5>
            </div>

            <p>
                Digital marketing is the component of marketing that uses the
                Internet and online-based digital technologies such as desktop computers,
                mobile phones, and other digital media and platforms to promote products and services.</p>

            <div id="info">
                <h4>Duration :</h4>
            </div>

            <p>Specialist courses: These courses can be eight to 12 months long and are designed for people who want to become digital marketing specialists.
            </p>



            <div id="info">
                <h4>Topics :</h4>
            </div>

            <ul>
                <li>
                    Search engine optimization</li>

                <li>
                    Facebook marketing

                </li>

                <li>YouTube marketing</li>

                <li>Content marketing, Google AdWords, Digital marketing framework , Search Engine Marketing, Email marketing </li>



            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div id="info">
                <h4>Contact Us :</h4>
            </div>

            <p><AddIcCallIcon className='icon' /> <WhatsAppIcon className='icon' /> <EmailIcon className='icon' /></p>

            <img src="/img/100-job-assistance-digital-marketing-program.webp" alt="" />


        </div>
    )
}

export default Courses;
