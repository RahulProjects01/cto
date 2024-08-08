import React from 'react';
import "./look.scss"

const Look = () => {

  const [lookData, setLookData] = React.useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Increment lookData, reset to 1 if it reaches 3
  //     setLookData(prev => (prev === 3 ? 1 : prev + 1));
  //   }, 3000); 

  //   return () => clearInterval(interval); // Cleanup interval 
  // }, []);

  const handleLookRightClick = () => {
    setLookData(prev => prev === 3 ? 1 : prev + 1);
  }
  const handleLookLeftClick = () => {
    setLookData(prev => prev === 1 ? 3 : prev - 1);
  }

  return (
    <div className='Look'>

      <img className='look-main-img' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/look-main-img.png' alt='' />
      <img className='look-left-button' src='../images/look-left-bttn.png' alt=''
           onClick={handleLookLeftClick}
       />
      <img className='look-right-button' src='../images/look-right-bttn.png' alt=''
           onClick={handleLookRightClick}
        />

      <div className='look-caro-div'>

        <div className='look-content-div'
          style={{
            transform: lookData === 1 ? 'translateX(0%) scale(1)' :
              lookData === 2 ? 'translateX(-80%) scale(0.7)' :
                'translateX(80%) scale(0.7)',
            zIndex: lookData === 1 ? 3 : 1, // Highest zIndex for the active card
            transition: '1s ease-out'
          }}
        >

          <img className='look-content-div-img' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/look-content-div-img-1.png' alt='' />
          <div className='look-content-txt-div'>
            <p className='look-content-para-1'>Evening Glam Look</p>
            <p className='look-content-para-2'
               style={{ left:'12%' }}
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

        </div>

        <div className='look-content-div'
          style={{
            transform: lookData === 2 ? 'translateX(0%) scale(1)' :
              lookData === 3 ? 'translateX(-80%) scale(0.7)' :
                'translateX(80%) scale(0.7)',
            zIndex: lookData === 2 ? 3 : 1,
            transition: '1s ease-out'
          }}
        >

          <img className='look-content-div-img' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/look-content-div-img-2.png' alt='' />
          <div className='look-content-txt-div'>
            <p className='look-content-para-1'>Tailored Suit Set</p>
            <p className='look-content-para-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

        </div>

        <div className='look-content-div'
          style={{
            transform: lookData === 3 ? 'translateX(0%) scale(1)' :
              lookData === 1 ? 'translateX(-80%) scale(0.7)' :
                'translateX(80%) scale(0.7)',
            zIndex: lookData === 3 ? 3 : 1,
            transition: '1s ease-out'
          }}
        >

          <img className='look-content-div-img' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/look-content-div-img-3.png' alt='' />
          <div className='look-content-txt-div'>
            <p className='look-content-para-1'>Day-to-Night Dress</p>
            <p className='look-content-para-2'
               style={{ left:'12%' }}
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

        </div>

      </div>

      <div className='look-bottom-div'
        style={{ opacity: lookData === 1 ? '1' : '0', }}
      >
        <p className='look-bottom-p-1'>EVENING GLAM LOOK</p>
        <p className='look-bottom-p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className='look-bottom-div'
        style={{ opacity: lookData === 2 ? '1' : '0', }}
      >
        <p className='look-bottom-p-1'>Tailored Suit Set</p>
        <p className='look-bottom-p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className='look-bottom-div'
        style={{ opacity: lookData === 3 ? '1' : '0', }}
      >
        <p className='look-bottom-p-1'>Day-to-Night Dress</p>
        <p className='look-bottom-p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.</p>
      </div>

    </div>
  )
}

export default Look;
