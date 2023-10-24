import React, { useState } from 'react';
import './Portfoilo.css';
import videobg from "../../../assets/videobg.jpg"
import { NavLink } from 'react-router-dom';

export const Portfoilo = () => {


  const Imagehover = [
    {
      id: 1,
      image: "https://html.dreamitsolution.net/multilen/industrial/image/slider2.jpg",
    },

    {
      id: 2,
      image: "https://html.dreamitsolution.net/multilen/industrial/image/slider1.jpg",
    },

    {
      id: 3,
      image: "https://html.dreamitsolution.net/multilen/industrial/image/slider2.jpg",
    },
  ]
  const ImageHover2 = [
    {
      id: 4,
      image: "https://html.dreamitsolution.net/multilen/industrial/image/slider1.jpg",
    },

    {
      id: 5,
      image: "https://html.dreamitsolution.net/multilen/industrial/image/slider2.jpg",
    },

    {
      id: 6,
      image: "https://html.dreamitsolution.net/multilen/industrial/image/slider1.jpg",
    },
  ]

  const review1 = [
    {
      id: 1,
      Name: "ochemeta",
      image: "https://html.dreamitsolution.net/multilen/industrial/image/testi1.png",
      Des: "bj;l';'gfghk;k;frytuiuiotutygl;ll;lvc;ljgggf[[iuffgj;l;bvcbvklkj",
    },

  ]


  const review2 = [
    {
      id: 4,
      Name: "oche",
      image: "https://html.dreamitsolution.net/multilen/industrial/image/testi1.png",
      Des: "bj;l';'gfghk;k;frytuiuiotutygl;lfl;lvc;ljgggf[[iuffgj;l;bvcbvklkj",
    },

  ]

  const review3 = [
    {
      id: 4,
      Name: "mary",
      image: "https://html.dreamitsolution.net/multilen/industrial/image/testi1.png",
      Des: "iam going to grow",
    },

  ]

  const [active, setActive] = useState(false)
  const [displayImages, setDisplayImages] = useState(Imagehover)
  const [isActive, setisActive] = useState(true)
  const [isActive1, setisActive1] = useState(false)
  const [isActive2, setisActive2] = useState(false)
  const [displayreview, setDisplayReview] = useState(review1)


  const goToNextPage = () => {
    setDisplayImages(ImageHover2)
    setActive(true)
  };

  const goToBackPage = () => {
    setDisplayImages(Imagehover)
    setActive(false)
  };

  const Review1 = () => {
    setDisplayReview(review1)
    setisActive(true)
    setisActive2(false)
    setisActive1(false)
  };

  const Review2 = () => {
    setDisplayReview(review2)
    setisActive1(true)
    setisActive2(false)
    setisActive(false)

  };


  const Review3 = () => {
    setDisplayReview(review3)
    setisActive2(true)
    setisActive1(false)
    setisActive(false)
  };

  const background ={
    backgroundColor:"#ffc107",
    textDecoration:"none",
  }

  const background1={
    backgroundColor:"#393837",
    textDecoration:"none",

  }
  return (
    <>
      <section className='Portfoilo'>
        <main className='Portfoilo-mainContainer'>
          <div className='Portfoilo-mainContainerleft'>
            <div className='portfoilo-title'>
              <p>PROACTIVE CREW</p>
            </div>
            <div className='portfoilo-text'>
              <p>
              Rayjay Multinational Company Limited
              by sheer strategic planning and
              operational efficiency aims to be a
              leading provider of services, majoring up
              Internationally. 
              </p>
            </div>
            <div className='portfoilo-btn'>
              <button>See All Portfolios</button>
            </div>
          </div>
          <div className='Portfoilo-mainContainermiddle'>
            {displayImages.map((image) => (
              <div className='portfoilo-images' key={image.id}>
                <img src={image.image} alt='' />
                <div className='portfoilo-imageshover'>
                  <div className='h'></div>
                </div>
              </div>
            ))}
          </div>
          <div className='Portfoilo-mainContainerright'></div>
        </main>

        <div className='portfoilo-nextcontainer'>
          <div
            className={active ? 'portfoilo-nextactive' : 'portfoilo-nexts'}
            onClick={goToNextPage}>
          </div>
          <div
            className={!active ? 'portfoilo-nextactive' : 'portfoilo-nexts'}
            onClick={goToBackPage}></div>
        </div>
      </section>
      <main className='video-part'>
        <div className='video-partcontainer'>
          <div className='video-partcontainerleft'>
            <main className='video-video'>
             <a href="https://www.youtube.com/embed/BS4TUd7FJSg"><img src={videobg} alt='' /></a> 
            </main>
            <main className='video-videodown'>
              <h3>
                <h1>For Emergency Contact Only</h1>
                +8803456788465
              </h3>
            </main>
          </div>
          <div className='video-partcontainerright'>
            {displayreview.map((review) => (
              <div className='video-partcontainerrightu' key={review.id}>
                <div className='video-up'>
                  <article className='video-upcircle'>
                    <img src={review.image} alt='' />
                  </article>
                </div>
                <div className='video-middle'>
                <textarea>{review.Des}</textarea>
                </div>
                <div className='video-downup'>
                    
                    <h3>{review.Name}</h3><br/>
                    <h5>front End developer</h5>
                  </div>
                </div>
            ))}


            <div className='video-downdown'>
              <div className= 'portfoilo-next' style={isActive? background :background1 }
            onClick={Review1}></div>
              <viv  className= 'portfoilo-next' style={isActive1?background:background1}
            onClick={Review2}></viv>
              <div className='portfoilo-next' style={isActive2?background:background1}
            onClick={Review3}></div>
            </div>
          </div> 
        </div> 
    </main >
    </>
  );
};
