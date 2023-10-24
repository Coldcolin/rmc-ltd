import './Service.css'

import mechanicalengineering from "../../../assets/mechanicalengineering.jpg"
import mechanicalengineering2 from "../../../assets/mechanicalengineering2.jpg"
import mechanicalengineering3 from "../../../assets/mechanicalengineering3.jpg"
import mechanicalengineering4 from "../../../assets/mechanicalengineering4.jpg"
import mechanicalengineering5 from "../../../assets/mechanicalengineering5.jpg"
import mechanicalengineering6 from "../../../assets/mechanicalengineering6.jpg"



const Service = () => {
    return (
        <section className=' Service'>
            <div className='Service-wrapper'>
                
                <section className='Service-body'>
                    <main className='Service-bodytop'>
                        <div className='Service-bodycontentboxes'>
                            <div className='Service-bodycontentboxesImage'><img src={mechanicalengineering} alt="image" /></div>
                            <div className='Service-bodycontentboxestext'>
                                <h2>EARTH MOVING EQUIPMENT INSPECTION</h2>
                                <p>thorough equipment inspection for safe and efficient construction and mining machinery.</p>
                            </div>

                        </div>
                        <div className='Service-bodycontentboxes'>
                            <div className='Service-bodycontentboxesImage'><img src={mechanicalengineering2} alt="image" /></div>
                            <div className='Service-bodycontentboxestext'>
                                <h2>LIFTING EQUIPMENT INSPECTION</h2>
                                <p>For safe and efficient operations, trust our certified Lifting Equipment Inspections.</p>
                            </div>

                        </div>
                        <div className='Service-bodycontentboxes'>
                            <div className='Service-bodycontentboxesImage'><img src={mechanicalengineering3} alt="image" /></div>
                            <div className='Service-bodycontentboxestext'>
                                <h2>NON-DESTRUCTIVE TESTING (NDT)</h2>
                                <p>Your non-invasive quality assurance solution for materials, structures, and components.</p>
                            </div>

                        </div>


                        <div className='Service-bodycontentboxes'>
                            <div className='Service-bodycontentboxesImage'><img src={mechanicalengineering4} alt="image" /></div>
                            <div className='Service-bodycontentboxestext'>
                                <h2>ROPE ACCESS SERVICES</h2>
                                <p> cost-effective solutions for high and hard-to-reach work locations.</p>
                            </div>

                        </div>
                        <div className='Service-bodycontentboxes'>
                            <div className='Service-bodycontentboxesImage'><img src={mechanicalengineering5} alt="image" /></div>
                            <div className='Service-bodycontentboxestext'>
                                <h2>TRAINING, SUPPLIES & CONTRACTS</h2>
                                <p> Comprehensive solutions to meet your customer's needs."

</p>
                            </div>

                        </div>
                        <div className='Service-bodycontentboxes'>
                            <div className='Service-bodycontentboxesImage'><img src={mechanicalengineering6} alt="image" /></div>
                            <div className='Service-bodycontentboxestext'>
                                <h2>EQUIPMENT LEASING
                                </h2>
                                <p>Secure the tools you need without the upfront costs.</p>
                            </div>

                        </div>
                    </main>
                </section>
            </div>


        </section>
    )
}

export default Service