import "./Footer.css"
import Logo from "../../src/assets/Logo.png"
import Foot1 from "../../src/assets/Foot1.jpg"
import foot2 from "../../src/assets/foot2.jpg"
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import {AiOutlineTwitter,  } from 'react-icons/ai'
import {GiWorld } from 'react-icons/gi'


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-up"></div>
      <div className="footer-mid">
        <div className="footer-midWrapper">
          <div className="footer-Text">
            <div className="footer-Logo">
              <img src={Logo} alt="Logo" />
              <h4>RMC Ltd</h4>
            </div>
            <div className="footer-details">
              <p>
                It is a long established fact that a
                reader will be distracted by the readable
                content of a page when looking at its layout.
              </p>
            </div>
            <div className="footer-socials">
              <div className="footer-socialsbox"><FaFacebookF size={20}/>
              </div> <div className="footer-socialsbox"><AiOutlineTwitter size={20}/>
              </div> <div className="footer-socialsbox"><FaInstagram size={20}/>
              </div> <div className="footer-socialsbox"><GiWorld size={20}/>
              </div>
            </div>
          </div>

          <div className="footer-Text">
            <div className="footer-Logo">
              <h4>Service</h4>
            </div >
            <div className="footer-Service">
              <li><p>Rope Access Services</p></li>
              <li><p>Training, Supplies & Contracts</p></li>
              <li><p>Equipment Leasing</p></li>
              <li><p>NON-Destructive Testing (NDT)</p></li>
              <li><p>Lifting Equipment Inspection</p></li>
              <li><p>Earth Moving Equipment Inspection</p></li>
                      </div>
          </div>

          <div className="footer-Text">
            <div className="footer-Logo">
              <h4>Recent Post</h4>
            </div >
            <div className="Recent-Post">
              <div className="Recent-Post1">
                <div className="Recent-Postimg">
                  <img src={foot2} alt="" />
                </div>
                <div className="Recent-Posttext">
                  <li>Safety and security: boosting our wellbeing</li>
                  <p>July 1, 2022</p>
                  </div>
                   </div>
                   <div className="Recent-Post1">
                <div className="Recent-Postimg">
                  <img src={Foot1} alt="" />
                </div>
                <div className="Recent-Posttext">
                  <li>Safety and security: boosting our wellbeing</li>
                  <p>July 1, 2022</p>
                  </div>
                   </div>
            </div>           
          </div>

          <div className="footer-Text">
          <div className="footer-Logo">
          <h4>Quick Contact</h4>
            </div>
          
            <div className="Quick-Contact">
              <h6>Address:</h6>
              <p>38 prince fadin STREET OLODI APAPA</p>
            </div>
          
            <div className="Quick-Contact">
              <h6>Phone:</h6>
              <p>09017764062, 08038838256</p>
            </div>
            
            <div className="Quick-Contact">
              <h6>Email:</h6>
              <p>info@RMCltd.com</p>
            </div>
          
          </div>
        </div>
      </div>
      <div className="footer-down">
        <p>Copyright ©rmc all rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer