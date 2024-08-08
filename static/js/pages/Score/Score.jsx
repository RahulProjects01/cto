import React, { useState } from 'react';
import "./score.scss"

const Score = ({clickState}) => {

  const[p7hover,setP7hover]=useState(false);
  const handleMouseEnter=(id)=>{
        if(id === 1)
          setP7hover(true);
        if(id === 0)
          setP7hover(false);
      }

  return (
    <div className='Score' 
         onMouseEnter={()=>handleMouseEnter(1)}>

    <div className="score-heading">
             <p style={{fontSize:'3vw'}}><span style={{color:'white'}}>Market Score</span></p>
        </div>

        <div className="score-detail-box">

             <div className="score-detail-div-1">
                 <p className="score-detail-txt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 <p className='score-small-txt-1'>21.0 M.</p>
                 <div className="score-prog-child-1"
                      style={{width: p7hover ? '90%' : ""}}
                      // style={{width:clickState === 6 && '90%'}}
                 />
             </div>

             <div className="score-detail-div-2">
                  <p className="score-detail-txt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                  <p className='score-small-txt-2'>6.7 %</p>
                  <div className="score-prog-child-2"
                      style={{width:p7hover && '30%'}}/>
             </div>

             <div className="score-detail-div-3">
                  <p className="score-detail-txt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                  <p className='score-small-txt-3'>47.5 M.</p>
                  <div className="score-prog-child-3"
                      style={{width:p7hover && '95%'}}/>
             </div>

             <div className="score-detail-div-4">
                  <p className="score-detail-txt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p className='score-small-txt-4'>90 %</p>
                  <div className="score-prog-child-4"
                      style={{width:p7hover && '50%'}}/>
             </div>

             {/* ---------------------------------------------------------------------- */}

             {/* <div className="score-circle-1"></div>
             <div className="score-circle-1-5"></div>
             <div className="score-circle-2"
                  style={{transform:p7hover ? 'translate(265%,63%) scale(1.65)' : 'translate(270%,75%)'}}
             ></div>
             <div className='score-circle-2-5'
                  style={{transform:p7hover ? 'translate(218%,61.5%) scale(1.3)' : 'translate(237%,77.5%)'}}
             ></div>
             <div className="score-circle-3"
                  style={{transform:p7hover ? 'translate(255%,47%) scale(2.1)' : 'translate(270%,75%)'}}
             ></div>
             <div className="score-circle-3-5"
                  style={{transform:p7hover ? 'translate(259%,52%) scale(2.1)' : 'translate(270%,75%)'}}
             ></div> */}

             <img className='s-circle-1' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-1.png' alt=''/>
             <img className='s-circle-2' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-2.png' alt=''
                  style={{transform:p7hover ? 'scale(1)' : 'scale(0.8)'}}/>
             <img className='s-circle-3' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-3.png' alt=''
                  style={{transform:p7hover ? 'scale(1)' : 'translate(20%,20%)scale(0.6)'}}/>
             <img className='s-circle-3' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-3.png' alt=''
                  style={{transform:p7hover ? 'scale(1)' : 'translate(20%,20%)scale(0.6)'}}/>
             <img className='s-circle-4' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-4.png' alt=''
                  style={{transform:p7hover ? 'scale(1)' : 'translate(20%,30%)scale(0.6)'}}/>
             <img className='s-circle-5' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-5.png' alt=''
                  style={{transform:p7hover ? 'scale(1)' : 'translate(20%,35%)scale(0.6)'}}/>
             <img className='s-circle-6' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-6.png' alt=''
                  style={{transform:p7hover ? 'scale(1)' : 'translate(20%,35%)scale(0.6)'}}/>

              {/* <img className="score-line" src='../images/score-line.png' alt='' style={{opacity:p7hover ? '0.7':0, transition:'1.5s ease-out'}}/> */}

        </div>

        <div className='score-line-detail-box-tam'style={{opacity:p7hover && '1'}}>
          <p style={{position:'absolute', fontSize:'2.2vw',top:'-62%', right:'17%',fontWeight:'1000'}}>TAM</p>
          <p style={{position:'absolute', left:'6.5%',top:'10%'}}>TOTAL AVAILABLE <span style={{color:'white'}}>MARKET</span></p>
          
          <div className='scroll-tam-money'
               style={{position:'absolute', height:'50%', width:'35%',left:'36%', top:'43%', overflow:'hidden'}}>
                    <div style={{position:'absolute', fontSize:'1.5vw', right:'3%',bottom:'10%', transition:'3s ease-out 1s', transform:p7hover ? "translateY(0%)":'translateY(79%)'}}> 
          
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                    </div>
          </div>
          

          <p style={{color:'white',right:'16%',position:'absolute',fontSize:'1.7vw',fontWeight:'100', top:'44%'}}>Cr</p>
        </div>


        <div className='score-line-detail-box-sam'style={{opacity:p7hover && '1'}}>
        <p style={{position:'absolute', fontSize:'2.2vw',top:'-70%', right:'17%',fontWeight:'1000'}}>SAM</p>
        <p style={{position:'absolute', left:'2.5%',top:'3%',textAlign:'right',width:'80%'}}>SERVICEABLE AVAILABLE <span>MARKET</span></p>
        
        <div className='scroll-tam-money'
               style={{position:'absolute', height:'50%', width:'35%',left:'36%', top:'54%', overflow:'hidden'}}>
                    <div style={{position:'absolute', fontSize:'1.5vw', right:'3%',bottom:'10%', transition:'3s ease-out 1s', transform:p7hover ? "translateY(0%)":'translateY(79%)'}}> 
          
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                    </div>
          </div>

        <p style={{right:'18%',position:'absolute',fontSize:'1.7vw',fontWeight:'100', top:'51%'}}>Cr</p>
        </div>


        <div className='score-line-detail-box-som'style={{opacity:p7hover && '1'}}>
        <p style={{position:'absolute', fontSize:'2.2vw',top:'-68%', right:'17%',fontWeight:'1000'}}>SOM</p>
        <p style={{position:'absolute', left:'3.5%',top:'3%',textAlign:'right',width:'80%'}}>SERVICEABLE OBTAINABLE <span style={{color:'white'}}>MARKET</span></p>
        
        <div className='scroll-tam-money'
               style={{position:'absolute', height:'50%', width:'35%',left:'36%', top:'56%', overflow:'hidden'}}>
                    <div style={{position:'absolute', fontSize:'1.5vw', right:'3%',bottom:'10%', transition:'3s ease-out 1s', transform:p7hover ? "translateY(0%)":'translateY(79%)'}}> 
          
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                              <div className='bm-m-s-money'><p>6,859.3</p></div>
                    </div>
          </div>

        <p style={{color:'white',right:'18%',position:'absolute',fontSize:'1.7vw',fontWeight:'100', top:'55%'}}>Cr</p>
        </div>

       

        

        
    </div>
  )
}

export default Score

