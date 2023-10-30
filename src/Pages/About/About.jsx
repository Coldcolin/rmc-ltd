import "./About.css";

import Shape1  from "../../assets/Shape1.png"
import mechanicalengineering from "../../assets/mechanicalengineering.jpg"
import mechanicalengineering2 from "../../assets/mechanicalengineering2.jpg"
import mechanicalengineering3 from "../../assets/mechanicalengineering3.jpg"
import mechanicalengineering4 from "../../assets/mechanicalengineering4.jpg"
import mechanicalengineering5 from "../../assets/mechanicalengineering5.jpg"
import mechanicalengineering6 from "../../assets/mechanicalengineering6.jpg"
import Worker from "../../assets/Worker.jpg"
import portimgone from "../../assets/portimgone.jpg"
import portimgthree from "../../assets/portimgthree.jpg"
import {RiCrossFill} from "react-icons/ri"
import testi1 from "../../assets/testi1.png"
import videobg from "../../assets/videobg.jpg"
import Service from "../Home/Service/Service";


// import {RiCrossFill} from "react-icons/ri"

const About = () => {
  return (
    <div className="NewAboutBody">
      <div className="aboutimagediv">
        <div className="wrapper">
          <div className="overlay"></div>
        </div>
      </div>
      <div className="aboutspace">
        <div className="aboutspacewrapper">
                <header className='About-title'>
                    <div className='About-titlewhat'>
                        <h3>Our Mission</h3>
                        {/* <h3>we provide</h3> */}
                    </div>
                    <div className='About-titleimage'>
                        <img src={Shape1} alt="share" />
                    </div>
                    <div className='About-titletext'>
                        <p>RMC is Committed to deploying
                        Quality, Reliable and Effective
                        Services Leveraging on Technology
                        and Innovations in Conformity with
                        the Requirements of ISO 9001:2015
                        and Other Best Practices.
                        </p></div>
                </header> 
        </div>
      </div>
      <div className="aboutspaces">
        <div className="aboutspacewrapper">
                <header className='About-title'>
                    <div className='About-titlewhat'>
                        <h3>Our Vision</h3>
                        {/* <h3>we provide</h3> */}
                    </div>
                    <div className='About-titleimage'>
                        <img src={Shape1} alt="share" />
                    </div>
                    <div className='About-titletext'>
                        <p>To be an accomplished; a standpoint
                        for accountability and trustworthy
                        service delivery cutting across West
                        Africa Region servicing the Oil &
                        Gas, Marine and Construction
                        Sectors.

                        </p></div>
                </header> 
        </div>
      </div>
    <Service/>
      {/* <section  className='About-body'>
                <main className='About-bodytop'>
                    <div className='AboutContent'>
                        <div className='AboutContentImage'><img src={mechanicalengineering} alt="image" /></div>
                        <div className='AboutContenttext'>
                                                        <h2>Mechanical Engineering</h2>
                                <p>It is a long established fact that a reader will page when looking at its layout.</p>
                                                </div>
                        
                    </div>
                    <div className='AboutContent'>
                        <div className='AboutContentImage'><img src={mechanicalengineering2} alt="image" /></div>
                        <div className='AboutContenttext'>
                                                        <h2>Mechanical Engineering</h2>
                                <p>It is a long established fact that a reader will page when looking at its layout.</p>
                                                </div>
                        
                    </div>
                    <div className='AboutContent'>
                        <div className='AboutContentImage'><img src={mechanicalengineering3} alt="image" /></div>
                        <div className='AboutContenttext'>
                                                        <h2>Mechanical Engineering</h2>
                                <p>It is a long established fact that a reader will page when looking at its layout.</p>
                                                </div>
                        
                    </div>
             
               
                <div className='AboutContent'>
                        <div className='AboutContentImage'><img src={mechanicalengineering4} alt="image" /></div>
                        <div className='AboutContenttext'>
                                                        <h2>Mechanical Engineering</h2>
                                <p>It is a long established fact that a reader will page when looking at its layout.</p>
                                                </div>
                        
                    </div>
                    <div className='AboutContent'>
                        <div className='AboutContentImage'><img src={mechanicalengineering5} alt="image" /></div>
                        <div className='AboutContenttext'>
                                                        <h2>Mechanical Engineering</h2>
                                <p>It is a long established fact that a reader will page when looking at its layout.</p>
                                                </div>
                        
                    </div>
                    <div className='AboutContent'>
                        <div className='AboutContentImage'><img src={mechanicalengineering6} alt="image" /></div>
                        <div className='AboutContenttext'>
                                                        <h2>Mechanical Engineering</h2>
                                <p>It is a long established fact that a reader will page when looking at its layout.</p>
                                                </div>
                        
                    </div>
                    </main>
                </section> */}
      

      <div className="thirdaboutspace"></div>

      <section className='Portfoilo'>
            <main className='Portfoilo-mainDiv'>
                <div className='Portfoilo-left'>
                    <div className='portfoilo-title'><p>Our Portfolio Is Our Inspiration
                    </p></div>
                    <div className='portfoilo-text'><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p></div>
                    <div className='portfoilo-btn'><button>See All Portfolios</button></div>
                </div>
                <div className='Portfoilo-middle'>
                    
                    <div className='portfoilo-images'>
                        <img src={portimgone} alt="" />
                        <div className='portfoilo-imageshover'></div>
                    </div> 
                    <div className='portfoilo-images'>
                        <img src={Worker} alt="" />
                        <div className='portfoilo-imageshover'></div>
                    </div>
                     <div className='portfoilo-images'>
                        <img src={portimgthree} alt="" />
                        <div className='portfoilo-imageshover'><RiCrossFill size={17} color='90'/></div>
                    </div>                   
                </div>
                <div className='Portfoilo-mainContainerright'></div>
                            </main>

                            <div  className='portfoilo-nextcontainer'>
                                <div className='portfoilo-next'></div>
                                <div className='portfoilo-next'></div>
                            </div>
                           
        </section>

      <div className="fourthaboutspace"></div>

      <main className='video-part'>
                <div className='video-container'>
                    <div className='video-containerleft'>
                        <main className='video-video'>
                            <img src={videobg} alt="" />
                        </main>
                        <main className='video-videodown'>
                        <h1>For Emergency Contact Only</h1>
                            <h3>
                            
                            +8803456788465
                            </h3>
                        </main>
                    </div>
                    <div className='video-partcontainerright'>
                        <div className='video-up'>
                            <article className='video-upcircle'><img src={testi1} alt="" /></article>
                        </div>
                        <div className='video-middle'>
                            <p>
                            A standpoint for accountability and trustworthy service delivery
                cutting across West Africa Region  servicing the Oil & Gas,
                Marine and Construction Sectors.
                            </p>
                        </div>
                        <div className='video-down'>
                            <div className='video-downup'>
                            <h2> Rakib Rahiyanil</h2>
                            <h5>Graphic Designer</h5>
                            </div>
                            <div  className='video-downdown'>
                                <div className='videocarosel'></div>
                                <div className='videocarosel'></div>
                                <div className='videocarosel'></div>
                            </div>
                        </div>
                    </div>
                </div>
         </main>

     

    </div>
  )
}

export default About

