import { useState } from 'react'
import './Blog.css'
import Shape1 from "../../../../src/assets/Shape1.png"
// import Worker from "../../../../src/assets/Worker.jpg"

export const Blog = () => {


    const blogData = [
      {
        id: 4,
        name: "Elizabeth Ene",
        cuisine: "Yummy options, easy ordering, repeat customer.",
        imageUrl: "https://html.dreamitsolution.net/multilen/industrial/image/case2.jpg",
      },

      {
        id: 5,
        name: "Elizabeth Ene",
        cuisine: "Yummy options, easy ordering, repeat customer.",
        imageUrl: "https://html.dreamitsolution.net/multilen/industrial/image/case1.jpg",
      },
  
    {
        id: 6,
        name: "Deborah omechea",
        cuisine: "Fast checkout, accurate orders, happy customer.",
        imageUrl: "https://html.dreamitsolution.net/multilen/industrial/image/case3.jpg",
      },
  
     {
      id: 7,
      name: "Priscila Almeida",
      cuisine: "Impressed with service, will order again.",
      imageUrl: "https://html.dreamitsolution.net/multilen/industrial/image/case1.jpg",
    },
    {
      id: 8,
      name: "Isaac Innalegwu",
      cuisine: "Fresh ingredients, flavorful dishes, top-notch quality.",
      imageUrl: "https://html.dreamitsolution.net/multilen/industrial/image/video-bg.jpg",
    },
    {
      id: 9,
      name: "JAMES SMITH",
      cuisine: "Efficient delivery, consistent quality, value for money.",
      imageUrl: "https://html.dreamitsolution.net/multilen/industrial/image/03.jpg",
    },
    {
      id: 10,
      name: "Monica Barnett",
      cuisine: "Smooth delivery, great presentation, impressed with packaging.",
      imageUrl: "https://html.dreamitsolution.net/multilen/industrial/image/05.jpg",
    },
    {
      id: 11,
      name: "Nude Barre",
      cuisine: "Extensive choices, user-friendly interface, love this app.",
      imageUrl: "https://html.dreamitsolution.net/multilen/industrial/image/06.jpg",
    },
    {
      id: 12,
      name: "Threasa Francis",
      cuisine: "Reliable recommendations, satisfied taste buds, delightful experience.",
      imageUrl: "https://html.dreamitsolution.net/multilen/industrial/image/02.jpg",
    },]


    const blogDataPerPage = 3; 
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPageCount = Math.ceil(blogData.length / blogDataPerPage);
  
  // Function to handle next page
  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage % totalPageCount) + 1);
   
  };
  
  // Function to handle previous page
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPageCount : prevPage - 1));
  };

  const indexOfLastblogData = currentPage * blogDataPerPage;
  const indexOfFirstblogData = indexOfLastblogData - blogDataPerPage;

  const [mouse, setMouse] = useState(false)
  return (
    <div className='Blog'>
      <header className='Service-title'>
        <div className='Service-titlewhat'>
          <h3>AVAILABILITY</h3>
          {/* <h3>Blog Post</h3> */}


        </div>
        <div className='Service-titleimage'>
          <img src={Shape1} alt="share" />
        </div>
        <div className='Service-titletext'>
          <p>Our company constantly provides the
          required training and refreshment
          coaches to technical crew for the
          command of the entire operational
          processes. Each equipment has a lead
          operator.
          </p></div>
      </header>

      <main className='blogs' onMouseEnter={() => { setMouse(true) }} onMouseLeave={() => setMouse(false)}>
        <div className='leftblogside'>
          {mouse &&
            <div className='pointercirle' onClick={goToNextPage}>{"<"}</div>}
        </div>         
        <div className='middleblogside'>
        {blogData.slice(indexOfFirstblogData, indexOfLastblogData).map((blogData) => (
          <div className='blogchannels' key={blogData}>
            <main className='blogchannelsimage'>
              <img src={blogData.imageUrl} alt="" />
            </main>
            <main className='blogchannelstext'>
              <div className='blogchannelstext1'><h4>Rayjay</h4> <h4>industry</h4></div>
              <div className='blogchannelstext2'><p>{blogData.name}</p></div>
              <div className='blogchannelstext3'><p>{blogData.name}</p></div>
              <div className='square2'>
                <h3>July 3,<br />2023</h3>
              </div>

              <div className='blogchannelstext4'>
                <a href="">Read More</a>
              </div>
            </main>
          </div>
           ))}
      </div>
         

        <div className='rightblogside'>
        {mouse &&
            <div className='pointercirle' onClick={goToPreviousPage}>{">"}</div>}
        </div>
      </main>
    </div>
  )
}
