import React from 'react';
import "./home.scss"

const Home = () => {
  return (
    <div className='Home'>Home
         
         <img className='home-img-1' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/home-img-1.png' alt=''/>
         <img className='home-img-2' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/home-img-2.png' alt=''/>
         <div className='home-style-txt'>Meet New</div>
         <div className='home-txt-container'>
              <p>FASHION &nbsp; &nbsp;</p>
              <p className='h-txt-c-span'>WEEK</p>
         </div>

         <div className='home-desc-txt'>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.</p>
         </div>

         <div className='home-date-div'>
              <p>16 APR / 2024</p>
         </div>
          
    </div>
  )
}

export default Home