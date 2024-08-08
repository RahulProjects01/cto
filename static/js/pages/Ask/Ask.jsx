import React from 'react';
import "./ask.scss"

const Ask = () => {

     const[askData,setAskData] = React.useState(false);

     const handleAskMouseEnter = () => {
        setAskData(true);
     }

  return (
    <div className='Ask' onMouseEnter={handleAskMouseEnter}>

           <div className='ask-main-heading'>
           <p>Our Ask</p>
           </div>

          <div className='ask-left-div'>
               <p className='ask-left-div-txt-1'>funding request</p>
               <p className='ask-left-div-txt-2'>Seeking Fund: <span style={{fontSize:'2.7vw',fontWeight:'700'}}>2 Cr</span></p>
               <p className='ask-left-div-txt-3'>Runway : 8-9 months</p>
          </div>

         <div className='ask-right-div'>

              <img className='ask-right-img-1' 
                   src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ask-right-img-1.png' alt=''
                   style={{transform:askData ? 'translate(0)':'translate(0%,-158%)'}}  
                   />

              <img className='ask-right-img-2' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ask-right-img-2.png' alt=''
                   style={{transform:askData ? 'translate(0)':'translate(60%,180%)'}}  
                   />

              <img className='ask-right-img-3' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ask-right-img-3.png' alt=''
                   style={{transform:askData ? 'translate(0)':'translate(-60%,225%)'}}  
                   />

              <img className='ask-right-center-img' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ask-right-center-img.png' alt=''
                   style={{opacity:askData ? '1':'0'}}
               />

              {/* <div className='ask-right-img-mask'>
                   <p>USE OF FUNDS</p>
              </div> */}
              
              <img className='ask-right-img-mask' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ask-mask-img.png' alt=''/>
              <p className='ask-mask-txt'>USE OF FUNDS</p>
              

              <div className='ask-vector-tags'
              style={{opacity:askData ? '1':'0'}}
         >
                 <p style={{position:'absolute',top:'11vw'}}>Marketing</p>
                 <p style={{position:'absolute',top:'32.5vw',left:'22%'}}>opex</p>
                 <p style={{position:'absolute',top:'30vw',left:'37vw'}}>capex</p>
         </div>
         </div>

         <img className='ask-vector-1' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ask-vector-1.png' alt=''
              style={{opacity:askData ? '1':'0'}}
         />
         <img className='ask-vector-2' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ask-vector-2.png' alt=''
              style={{opacity:askData ? '1':'0'}}
         />
         <img className='ask-vector-3' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ask-vector-3.png' alt=''
              style={{opacity:askData ? '1':'0'}}
         />

         
    </div>
  )
}

export default Ask