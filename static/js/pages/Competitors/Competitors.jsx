import React from 'react';
import './Competitors.scss';

function Competitors() {
 
  const [compData, setCompData] = React.useState(false);

  const handleCompData = () => {
//     setCompData(true);
      const timeout = setTimeout(()=>{
      setCompData(true);
      }
      , 2000);
      return () => clearTimeout(timeout);
  }

  return (
    <div className='Compete' onMouseEnter={handleCompData}>

      <img className='comp-main-img' src='../images/comp-main-img.png' alt=''/>

      <div className='com-heading' style={{opacity:compData && '0'}}><p>Our Competitors</p></div>

      <div className='comp-left-div'>
           <div className='comp-left-content' style={{transform:compData ? 'translate(187%, -350%)':''}}><p>More Fashionable</p></div>
           <div className='comp-left-content' style={{transform:compData ? 'translate(190%,830%)' :''}}><p>Less Fashionable</p></div>
           <div className='comp-left-content' style={{transform:compData ? 'translate(5%,-200%)':''}}><p>Low Price</p></div>
           <div className='comp-left-content' style={{transform:compData ? 'translate(377%,-500%' : ''}}><p>High Price</p></div>
      </div>

      {/* ------------Margin-Divs----------------------------------- */}
      <div className='comp-margins' style={{opacity:compData && '0'}}>
          <div className='comp-bullets' style={{ }}/>
           <div className='comp-bullets' style={{ left:'100%'}}/>
      </div>

      <div className='comp-margins' style={{top:'49%',transform:compData && 'translateY(650%)rotate(90deg)'}}>
          <div className='comp-bullets' style={{ }}/>
          <div className='comp-bullets' style={{ left:'100%'}}/>
      </div>

      <div className='comp-margins' style={{top:compData ? '54.5%':'66%'}}>
          <div className='comp-bullets' style={{ }}/>
          <div className='comp-bullets' style={{ left:'100%'}}/>
      </div>

      <div className='comp-margins' style={{top:'82%', opacity:compData && '0'}}>
          <div className='comp-bullets' style={{ }}/>
          <div className='comp-bullets' style={{ left:'100%'}}/>
      </div>

      {/* -------------Bullet-Divs----------------------------------- */}

      {/* <div className='comp-bullets' style={{top:'31%', left:'30%', opacity:compData && '0'}}/>
      <div className='comp-bullets' style={{top:'48%', left:'30%',transform:compData && 'translate(1321%,-1100%)'}}/>
      <div className='comp-bullets' style={{top:compData ? '53.5%':'65%', left:'30%'}}/>
      <div className='comp-bullets' style={{top:'81%', left:'30%', opacity:compData && '0'}}/>
      <div className='comp-bullets' style={{top:'81%', left:'60%', opacity:compData && '0'}}/>
      <div className='comp-bullets' style={{top:compData ? '53.5%':'65%', left:'60%'}}/>
      <div className='comp-bullets' style={{top:'48%', left:'60%', transform:compData && 'translate(-1405%,1490%)'}}/>
      <div className='comp-bullets' style={{top:'31%', left:'60%', opacity:compData && '0'}}/> */}

      {/* -----------Logo------------------------------------------- */}

      <img className='comp-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/comp-logo-1.png' alt=''
           style={{top:'29%', left:'64%', transform:compData && 'translate(-410%, 650%)'}}
      />
      <img className='comp-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/comp-logo-2.png' alt=''
            style={{top:'29%', left:'75%', transform:compData && 'translate(-500%, 200%)'}}
      />
      <img className='comp-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/comp-logo-3.png' alt=''
            style={{top:'29%', left:'83%',transform:compData && 'translate(-890%, 50%)'}}
      />
      <img className='comp-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/comp-logo-4.png' alt=''
            style={{top:'46%', left:'64%',transform:compData && 'translate(-330%, -30%)'}}
      />
      <img className='comp-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/comp-logo-5.png' alt=''
            style={{top:'45%', left:'77%',transform:compData && 'translate(-640%, 270%)'}}
      />
      <img className='comp-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/comp-logo-6.png' alt=''
            style={{top:'63%', left:'64%',transform:compData && 'translate(-600%, -440%)'}}
      />
      <img className='comp-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/comp-logo-7.png' alt=''
            style={{top:'79%', left:'64%',transform:compData && 'translate(-130%, -210%)'}}
      />
      <img className='comp-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/comp-logo-8.png' alt=''
            style={{top:'79%', left:'76%',transform:compData && 'translate(-500%, -60%)'}}
      />

    </div>
  )
}

export default Competitors