import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import TopHeader from "./TopHeader"
import "./Layout.css"

const PageLayout = () => {
  return (
    <>
        <header>
          <TopHeader/>
          <Header/>
        </header>
        <section className="layout-content">
          <Outlet/>
        </section>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default PageLayout