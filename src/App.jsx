import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import PageLayout from "./Components/PageLayout"
import Home from "./Pages/Home/Home";
import { useState } from "react"
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import {MdKeyboardDoubleArrowUp} from "react-icons/md"



const router = createBrowserRouter([
  {
    
    path: "/",
    element: <PageLayout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About/>,
      },
    ]
  },
]);

function App() {

  const [stroll, setStroll,] = useState(false)
const changeStroll = () => {
  if (window.scrollY >= 23) {
    setStroll(true)
  }
  else {
    setStroll(false)
  }
}

window.addEventListener('scroll', changeStroll)
  

  return (
    <>
      <RouterProvider router={router} />

      
  <div className={stroll ? "stroll" : "strollup"}>
    <p><MdKeyboardDoubleArrowUp size={30}/></p>
    </div>
    </>
  )
}

export default App
