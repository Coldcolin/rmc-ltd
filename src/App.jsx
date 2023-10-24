import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import PageLayout from "./Components/PageLayout"
import Home from "./Pages/Home/Home";

import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";


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
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
