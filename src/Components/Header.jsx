import { NavLink } from "react-router-dom"
import { CgMenu } from "react-icons/cg"
import { AiFillCloseCircle } from "react-icons/ai"
import "./Header.css"
import { useState } from "react"

const Header = () => {

  const [menu, setMenu] = useState(false)
  const [position, setPosition] = useState(false)

  const Menu = () => {
    setMenu(!menu)
  }

  const changePosition = () => {
    if (window.scrollY >= 1) {
      setPosition(true)
    }
    else {
      setPosition(false)
    }
  }

  window.addEventListener('scroll', changePosition)
  return (
    <>

      <main className={position ? "header head" : "header"}>
        <section className="header-section">
          <article className="header-query ">
            <h3>RMC Ltd</h3>
            {!menu ? <CgMenu className="menu" size={25} onClick={Menu} /> :
              <AiFillCloseCircle className="menu" size={25} onClick={Menu} />}
          </article>

          <article className="header-navs">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}>About Us</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}>Contact</NavLink>
          </article>
          <article></article>
        </section>
      </main>


      {
        menu && (
          <header className="showmenu">
            <article className="showmenu-navs">
              <NavLink to="/" className={({ isActive }) => (isActive ? "menunav-active" : "menunav")}>Home</NavLink>
              <hr />
              <NavLink to="/about" className={({ isActive }) => (isActive ? "menunav-active" : "menunav")}>About Us</NavLink>
              <hr />
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "menunav-active" : "menunav")}>Contact</NavLink>
            </article>
          </header>
        )
      }
    </>


  )
}

export default Header