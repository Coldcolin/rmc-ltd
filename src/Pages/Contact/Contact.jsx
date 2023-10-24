import "./Contact.css"



const Contact = () => {

  return (
    <div className="Contact">
      <div className="Contact-background">
        <div>
          <h3>Contact</h3>
          <p>Home {">"} Contact</p>
        </div>
      </div>

      <div className="address-listing">
        <div className="address-listingwrapper">
          <span>
            <h1>Address:</h1>
            <p>12/30 North cfghjklkjhgfdfghjkjhgf</p>
          </span>
          <span>
            <h1>Phone:</h1>
            <p>09017764062 Or 08038838256</p> 
          </span><span>
            <h1>Email:</h1>
            <p>info@RMCltd.com</p>
          </span>
        </div>
      </div>
      <main className="fromlocation">
        <div className="fromlocation-wrapper">
          <main className="from">
            <div className="from-title">
              <h1>Contact Form</h1>
              <hr className="from-line" />
            </div>
            <div className="contactform">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
            </div>
            <main className="contact-message">
              <textarea type="text" placeholder="Message" />
            </main>
            <div className="formSendbtn">
            <button className="tbbn"> Send Now</button>
            </div>
          </main>
          <main className="location" id="map">
            <iframe style={{height:'100%', width:'100%'}} id="gmap_canvas" src="https://maps.google.com/maps?q=Ajeromi%20ifelodun&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"></iframe>
          </main>
        </div>
      </main>
        </div>
  )
}

export default Contact