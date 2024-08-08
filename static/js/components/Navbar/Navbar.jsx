import React, { useState } from 'react';
import "./navbar.scss"

const Navbar = ({setDataToParent, clickState}) => {

  const sendData =(id)=>{
    let idData =id;
      setDataToParent(idData);
  }

  const [navDisp, seNavDisp]=useState(false);

  const handleNavClick = (no) => {
        if(no === 0)
        {
            seNavDisp(!navDisp);
        }
      }
          

  return (
    <div className='navbar'
         onMouseEnter={() => { seNavDisp(true) }}
         onMouseLeave={() => { seNavDisp(false) }}
         style={{
            transform: navDisp ? 'translateY(0%)' : 'translateY(100%)',
            transition: !navDisp && '1s ease-out 1s'
         }}>

                    <div className='nav-top-bar'>
                         <div className='nav-top-bar-line1'/>
                         <p>Swipe up</p>
                         <div className='nav-top-bar-line2'/>
                    </div>

                    <div className='nav-button-parent' onClick={()=>handleNavClick(0)} 
                         style={{ transform:navDisp ? '': ""}}>
                    <div className='navButton' 
                         style={{
                          borderRadius:clickState === 1 ? '24px':'', width:clickState === 1 ? '180%':'',
                          padding:clickState === 1 ? '2px 24px':'',
                          }}
                         onClick={() => { sendData(1) }}> 
                         <img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/home-logo-1.png' alt=''/>
                         {clickState === 1 ? (<h2>&nbsp;HOME&nbsp; </h2>):(<p></p>)}

                    </div>


                    <div className='navButton' 
                         style={{borderRadius:clickState === 2 ? '24px':'', width:clickState === 2 ? '180%':'',
                          padding:clickState === 2 ? '2px 24px':'' }}
                         onClick={() => { sendData(2) }}>
                         {clickState === 2 ? (<h2>Prob</h2>):(<p></p>)}
                         <img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/prob-logo.png' alt=''/>

                    </div>


                    <div className='navButton' 
                         style={{borderRadius:clickState === 3 ? '24px':'', width:clickState === 3 ? '180%':'',
                          padding:clickState === 3 ? '2px 24px':'' }}
                         onClick={() => { sendData(3) }}> 
                         {clickState === 3 ? (<h2>&nbsp;LOOK&nbsp; </h2>):(<p></p>)}
                         <img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/sol-logo.png' alt=''/>

                    </div>


                    <div className='navButton' 
                         style={{borderRadius:clickState === 4 ? '24px':'', width:clickState === 4 ? '180%':'',
                          padding:clickState === 4 ? '2px 24px':'' }}
                         onClick={() => { sendData(4) }}><img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-logo.png' alt=''/>
                         {clickState === 4 ? (<h2>&nbsp;TEAM&nbsp; </h2>):(<p></p>)}
                    </div>


                    <div className='navButton' 
                         style={{borderRadius:clickState === 5 ? '24px':'', width:clickState === 5 ? '180%':'',
                          padding:clickState === 5 ? '2px 24px':'' }}
                         onClick={() => { sendData(5) }}>
                         <img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-logo.png' alt=''/>
                         {clickState === 5 ? (<h2>&nbsp;EVENTS&nbsp; </h2>):(<p></p>)}
                    </div>


                    <div className='navButton' 
                         style={{borderRadius:clickState === 6 ? '24px':'', width:clickState === 6 ? '180%':'',
                          padding:clickState === 6 ? '2px 24px':'' }}
                         onClick={() => { sendData(6) }}>
                         <img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/market-logo.png' alt=''/>
                         {clickState === 6 ? (<h2>&nbsp;SCORE&nbsp; </h2>):(<p></p>)}
                    </div>


                    <div className='navButton' 
                         style={{borderRadius:clickState === 7 ? '24px':'', width:clickState === 7 ? '180%':'',
                          padding:clickState === 7 ? '2px 24px':'' }}
                         onClick={() => { sendData(7) }}><img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/marketing-logo.png' alt=''/>
                         {clickState === 7 ? (<h2>&nbsp;ASK&nbsp; </h2>):(<p></p>)}
                    </div>

                    <div className='navButton' 
                         style={{borderRadius:clickState === 8 ? '24px':'', width:clickState === 8 ? '180%':'',
                          padding:clickState === 8 ? '2px 24px':'' }}
                         onClick={() => { sendData(8) }}>
                         <img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/compete-logo.png' alt=''/>
                         {clickState === 8 ? (<h2>&nbsp;COMPETE&nbsp; </h2>):(<p></p>)}
                    </div>

                    <div className='navButton' 
                         style={{borderRadius:clickState === 9 ? '24px':'', width:clickState === 9 ? '180%':'',
                          padding:clickState === 9 ? '2px 24px':'' }}
                         onClick={() => { sendData(9) }}><img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/marketing-logo.png' alt=''/>
                         {clickState === 9 ? (<h2>&nbsp;MARKETING&nbsp; </h2>):(<p></p>)}
                    </div>

                    <div className='navButton'
                         style={{borderRadius:clickState === 10 ? '24px':'', width:clickState === 10 ? '180%':'',
                          padding:clickState === 10 ? '2px 24px':'' }}
                         onClick={() => { sendData(10) }}><img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/gtm-logo.png' alt=''/>
                         {clickState === 10 ? (<h2>&nbsp;GTM&nbsp; </h2>):(<p></p>)}
                    </div>

                    <div className='navButton' 
                         style={{borderRadius:clickState === 11 ? '24px':'', width:clickState === 11 ? '180%':'',
                          padding:clickState === 11 ? '2px 24px':'' }}
                         onClick={() => { sendData(11) }}><img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-logo.png' alt=''/>
                         {clickState === 11 ? (<h2>&nbsp;BM&nbsp; </h2>):(<p></p>)}
                    </div>

                    <div className='navButton' 
                         style={{borderRadius:clickState === 12 ? '24px':'', width:clickState === 12 ? '180%':'',
                          padding:clickState === 12 ? '2px 24px':'' }}
                         onClick={() => { sendData(12) }}><img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/market-logo.png' alt=''/>
                         {clickState === 12 ? (<h2>&nbsp;USP&nbsp; </h2>):(<p></p>)}
                    </div>

                    <div className='navButton' 
                         style={{borderRadius:clickState === 13 ? '24px':'', width:clickState === 13 ? '180%':'',
                          padding:clickState === 13 ? '2px 24px':'' }}
                         onClick={() => { sendData(13) }}><img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-logo.png' alt=''/>
                         {clickState === 13 ? (<h2>&nbsp;FASHION EVENT&nbsp; </h2>):(<p></p>)}
                    </div>

                    <div className='navButton' 
                         style={{borderRadius:clickState === 14 ? '24px':'', width:clickState === 14 ? '180%':'',
                          padding:clickState === 14 ? '2px 24px':'' }}
                         onClick={() => { sendData(14) }}>
                         <img className='nav-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ty-logo.png' alt=''/>
                         {clickState === 14 ? (<h2>&nbsp;CONTACT&nbsp; </h2>):(<p></p>)}
                    </div>
                    </div>

    </div>
  )
}

export default Navbar