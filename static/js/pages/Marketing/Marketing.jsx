import React, {useState} from 'react';
import "./marketing.scss"

const Marketing = () => {

  const [currentIndex, setcurrentIndex] = useState(0);


  const contentArray = [
    { id: 1, name: 'Billboard Marketing', vid: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/videos/marketing-vid-1.mp4', img1: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-1-img-1.png', img2: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-1-img-2.png', img3: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-1-img-3.png' },
    { id: 2, name: 'Digital Marketing',   vid: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/videos/marketing-vid-2.mp4', img1: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-2-img-1.png', img2: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-2-img-2.png', img3: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-2-img-2.png' },
    { id: 3, name: 'Video Marketing',     vid: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/videos/marketing-vid-1.mp4', img1: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-1-img-1.png', img2: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-1-img-2.png', img3: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-1-img-3.png' },
    { id: 4, name: 'NewsPaper Marketing', vid: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/videos/marketing-vid-2.mp4', img1: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-2-img-1.png', img2: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-2-img-2.png', img3: 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-2-img-2.png' },
  
  ];
     const changeIndex = (index) => {
     setcurrentIndex(index); // Update the current video index
   };

// console.log(vidArray);
  return (
    <div className='Market'>

         <div className='mar-heading'>
              <p>Marketing</p>
         </div>

         <div className='mar-video-div'>

                 <video key={ contentArray[currentIndex].id} 
                      //  className='mar-video-1'
                       className={currentIndex === 1 || currentIndex === 3 ? 'mar-video-2' : 'mar-video-1'}
                       autoPlay loop muted >
                       <source src={contentArray[currentIndex].vid} type='video/mp4'/>
                 </video>

         </div>

         <div className='mar-image-1-div'>
              <img className='mar-img-1' key={ contentArray[currentIndex].id} src={contentArray[currentIndex].img1} alt='img1'/>
         </div>

         <div className='mar-image-2-div'>
              <img className='mar-img-2' key={ contentArray[currentIndex].id} src={contentArray[currentIndex].img2} alt='img2'/>
         </div>

         <div className='mar-image-3-div'>
              <img className='mar-img-3' key={ contentArray[currentIndex].id} src={contentArray[currentIndex].img3} alt='img3'/>
         </div>

         <div className='mar-vertical-div'/>
         <div className='mar-circular-dot' style={{backgroundColor:currentIndex === 0 && '#BD1643'}}/>
         <div className='mar-circular-dot' style={{top:'50%',backgroundColor:currentIndex === 1 && '#BD1643'}}/>
         <div className='mar-circular-dot' style={{top:'70%',backgroundColor:currentIndex === 2 && '#BD1643'}}/>
         <div className='mar-circular-dot' style={{top:'90%',backgroundColor:currentIndex === 3 && '#BD1643'}}/>

         <div className='mar-menu-flow'>
              <div className='mar-menu-1' onClick={()=>changeIndex(0)} style={{backgroundColor:currentIndex ===0 ? '#BD1643':''}}>Billboard Marketing</div>
              <div className='mar-menu-1' onClick={()=>changeIndex(1)} style={{backgroundColor:currentIndex ===1 ? '#BD1643':''}}>Digital Marketing</div>
              <div className='mar-menu-1' onClick={()=>changeIndex(2)} style={{backgroundColor:currentIndex ===2 ? '#BD1643':''}}>Video Marketing</div>
              <div className='mar-menu-1' onClick={()=>changeIndex(3)} style={{backgroundColor:currentIndex ===3 ? '#BD1643':''}}>NewsPaper Marketing</div>
         </div>

         <img className='mar-cursor' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png' alt='' style={{ opacity: currentIndex === 1 ||  currentIndex === 2 || currentIndex === 3 ? '0':''}}/>
         <img className='mar-cursor' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png' alt='' style={{top:'70%', opacity: currentIndex === 1 ||  currentIndex === 2 || currentIndex === 3 ? '0':''}}/>
         <img className='mar-cursor' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png' alt='' style={{top:'90%', opacity: currentIndex === 1 ||  currentIndex === 2 || currentIndex === 3 ? '0':''}}/>
         
         {/* <div className='mar-moving-div'></div> */}
    
    </div>
  )
}

export default Marketing