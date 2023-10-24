import Logo from "../../src/assets/Logo.png"
import {BsFillTelephoneFill}  from "react-icons/bs"
import { MdEmail}  from "react-icons/md"
// import { NavLink } from "react-router-dom"


const TopHeader = () => {
  return (
    <div className="top-header">
      <main className="top-headerwrapper">
      <div className="top-logo">
        <img src={Logo} alt="" /> 
        <h3>RMC Ltd</h3>
      </div>
      <div className="top-companycontact">
        <span>
          <BsFillTelephoneFill/>
          <p> +2348038838256, +234038838256</p>
        </span>
        <span>
        <MdEmail/>
          <p>info@RMCltd.com</p>
        </span>

        {/* <button className="GET-QUOTE"> GET A QUOTE</button> */}
      </div>

      </main>
      
    </div>
  )
}

export default TopHeader