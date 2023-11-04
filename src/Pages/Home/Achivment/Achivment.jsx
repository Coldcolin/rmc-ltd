// import React, { useState } from 'react'
import "./Achivment.css"
// import CountUp from "react-countup";
// import { ImCheckmark } from "react-icons/im";
// import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import Shape1 from "../../../assets/Shape1.png"
import Worker from "../../../assets/Worker.jpg"
import Worker2 from "../../../assets/Worker2.jpg"
import Worker3 from "../../../assets/Worker3.jpg"
import Data1 from "./Data1"

export const Achivment = () => {
    // const [viewPortEntered, setViewPortEntered] = useState(false);


    
    return (
        <section className='Achivment'>
            <main className='Achivment-background'></main>
            <div className='Achivment-backgroundposition'>
                <div className='Achivment-title'>
                    <h2>NIGERIA CONTENT DEVELOPMENT</h2>
                </div>
                <div className='Achivment-text'>
                    <p>
                    Rayjay Multinational's technical crew is
                    an eloquent testimony to the success of
                    the Nigerian content initiative. All
                    maintenance and repair services are fully
                    undertaken by the crew resulting in
                    operational efficiency. This has
                    particularly eliminated interruptions
                    arising from break downs.
                    </p>
                </div>
           
                <div className='Achivment-wins'>
                    <div className='Achivment-winscontainers'>
                        {/* <h1>131</h1> */}
                       <Data1 end={100} suffix="%"/>
                        <p>Indegenous</p>
                    </div>
                    <div className='Achivment-winscontainers'>
                        <Data1 end={100} suffix="%"/>
                        <p>Local Content</p></div>
                    <div className='Achivment-winscontainers'>
                        <Data1 end={100} suffix="%"/>
                        <p>Costumer Satisfaction</p></div>
                </div>
            </div>
            <header className='famous'>
                <div className='Service-titlewhat'>
                    <h3>COMMUNITY RELATIONS </h3>
                    <h3>(CSR)</h3>
                </div>


                <div className='Service-titleimage'>
                    <img src={Shape1} alt="share" />
                </div>
                <div className='Service-titletext'>
                    <p>
                    Rayjay Multinational Company Limited
                    adheres strictly to her community
                    relations policy. This policy defines the
                    relationship between the company and
                    host communities. The relationship
                    involves the provision of employment for
                    locals and corporate contributions for
                    community infrastructural development.
                    These agreements and relationships are
                    usually expressed in a Memorandum of
                    Understanding.

                    </p></div>
            </header>

            <section className='worker'>
                <section className='worker-wrapper'>
                    <article className='worker-boxes'>
                        <div className='worker-image'>
                            <img src={Worker} alt="worker" />
                            <div className='worker-imagehover'>
                                {/* <main className='social-boxes'><BiLogoFacebook size={30} color='white' /></main>
                                <main className='social-boxes'><BiLogoTwitter size={27} color='white' /></main>
                                <main className='social-boxes'>
                                    <main className='social-boxes'><BiLogoInstagram size={27} color='white' /></main>
                                </main> */}
                            </div>
                        </div>
                        <div className='worker-text'>
                            <h1>Sara Anderson</h1>
                            <p>Engineer</p>
                        </div>
                    </article>

                    <article className='worker-boxes'>
                        <div className='worker-image'>
                            <img src={Worker2} alt="worker" />
                            <div className='worker-imagehover'>
                                {/* <main className='social-boxes'><BiLogoFacebook size={30} color='white' /></main>
                                <main className='social-boxes'><BiLogoTwitter size={27} color='white' /></main>
                                <main className='social-boxes'>
                                    <main className='social-boxes'><BiLogoInstagram size={27} color='white' /></main>
                                </main> */}
                            </div>
                        </div>
                        <div className='worker-text'>
                            <h1>Sara Anderson</h1>
                            <p>Engineer</p>
                        </div>
                    </article>

                    <article className='worker-boxes'>
                        <div className='worker-image'>
                            <img src={Worker3} alt="worker" />
                            <div className='worker-imagehover'>
                                {/* <main className='social-boxes'><BiLogoFacebook size={30} color='white' /></main>
                                <main className='social-boxes'><BiLogoTwitter size={27} color='white' /></main>
                                <main className='social-boxes'>
                                    <main className='social-boxes'><BiLogoInstagram size={27} color='white' /></main>
                                </main> */}
                            </div>
                        </div>
                        <div className='worker-text'>
                            <h1>Sara Anderson</h1>
                            <p>Engineer</p>

                        </div>
                    </article>
                </section>
            </section>

        </section>

    )
}