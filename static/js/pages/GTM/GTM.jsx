import React, { useEffect } from 'react';
import "./gtm.scss"

const GTM = () => {

  const [gtmState, setGtmState] = React.useState(1);
  const [gtmEnter, setGtmEnter]= React.useState(false);

  const handleGtmEnter =()=>{
     setGtmEnter(true);
  }

  useEffect(()=>{

    setTimeout(()=>{ 
        if(gtmEnter) setGtmState(gtmState+1); 
    },800);

    clearTimeout();
  },)

  return (
    <div className='GTM' onMouseEnter={handleGtmEnter}>

         <div className='gtm-heading-div'>
              <p className='gtm-heading'>Go To Market</p>
              <p className='gtm-heading-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </div>
         
         <img className='gtm-image-1' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/gtm-image-1.png' alt='' style={{opacity:gtmState>= 1 ? 1 : 0}}/>
         <img className='gtm-image-2' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/gtm-image-2.png' alt='' style={{opacity:gtmState>= 2 ? 1 : 0}}/>
         <img className='gtm-image-3' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/gtm-image-3.png' alt='' style={{opacity:gtmState>= 3 ? 1 : 0}}/>
         <img className='gtm-image-4' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/gtm-image-4.png' alt='' style={{opacity:gtmState>= 4 ? 1 : 0}}/>
     {/* ---------------------------------------------------------------------------------------- */}
         <div className='gtm-image-txt-div'
              style={{top:'23.5%', opacity:gtmState>= 1 ? 1 : 0 }}
         >
              <div className='gtm-box-div'>
                    <p className='gtm-box-text'>
                         Targeting
                    </p>

                    <ul className='gtm-box-list'>
                         <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                         <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
              </div>
         </div>

     {/* ---------------------------------------------------------------------------------------- */}
         <div className='gtm-image-txt-div'
              style={{top:'41.5%', left:'23%', opacity:gtmState>= 2 ? 1 : 0}}
         >
              <div>
                    <div className='gtm-box-div'>
                              <p className='gtm-box-text'>
                                   Targeting
                              </p>

                              <ul className='gtm-box-list'>
                                   <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                   <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                              </ul>
                    </div>

              </div>
         </div>

      {/* ---------------------------------------------------------------------------------------- */}

         <div className='gtm-image-txt-div'
              style={{top:'59.5%', opacity:gtmState>= 3 ? 1 : 0}}
         >
              <div>
              <div className='gtm-box-div'>
                    <p className='gtm-box-text'>
                         Targeting
                    </p>

                    <ul className='gtm-box-list'>
                         <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                         <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
              </div>

              </div>
         </div>

      {/* ---------------------------------------------------------------------------------------- */}

         <div className='gtm-image-txt-div'
              style={{top:'77.5%', left:'23%', opacity:gtmState>= 4 ? 1 : 0}}
         >
              <div>
                    <div className='gtm-box-div'>
                              <p className='gtm-box-text'>
                                   Targeting
                              </p>

                              <ul className='gtm-box-list'>
                                   <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                   <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                              </ul>
                    </div>

              </div>
         </div>
         
      {/* ---------------------------------------------------------------------------------------- */}

    </div>
  )
}

export default GTM