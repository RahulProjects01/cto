import React from 'react';
import "./problem.scss"

const Problem = () => {

  const [prob, setProb] = React.useState(1);

  const handleProbClick = () => {
          
          // setProb(prev => prev === 3 ? 3 : prev + 1); 
  }
  return (
    <div className='Prob' onMouseEnter={handleProbClick}>
    
         <div className='prob-heading-txt'>
              <p>PROBLEM</p>
         </div>

         <div className='prob-image-div'>
              <img className='prob-img-1' 
                   style={{transform:prob === 2 || prob === 3 ? 'translateX(-100%)':''}}
                   src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/prob-img-1.png' alt=''/>
              <img className='prob-img-2'  
                   style={{opacity:prob === 2 && '1'}}
                   src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/prob-img-2.png' alt=''/>
              <img className='prob-img-3'  
                   style={{transform:prob === 3 && 'translateX(0)'}}
                   src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/prob-img-3.png' alt=''/>
         </div>

         <img className='prob-quotes' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/double-quotes.png' alt='' />

          <div className='prob-content-div'
               style={{transform:prob === 1 ? 'translateX(0%)scale(1)': prob === 2 ? "translateX(0%)scale(0.5)" :'translateX(100%)scale(0.8)',
                       opacity:prob === 2 || prob === 3 ? '0':'1', transition:prob === 1 ? '1s ease-out':'0'
                       }}
          >
               <p className='prob-con-para-1'>"Eco-Friendly Couture"</p>
               <div className='prob-con-para-2'>
                    <p>In today's world, sustainability is paramount in fashion.
                       Your task is to design a couture outfit using only recycled materials.
                       These materials can include anything from old garments, newspapers, plastic bags,
                       or even discarded electronics. The key is to showcase your creativity while being
                       mindful of the environmental impact of fashion.</p>
                </div>
          </div>

          <div className='prob-content-div'
               style={{transform:prob === 2 ? 'translateX(0%)scale(1)': prob === 3 ? "translateX(0%)scale(0.5)":'translateX(100%)scale(0.8)',
                       opacity:prob === 3 ? '0' : '1', transition:prob === 2 ? '1s ease-out':'0'
                       }}
          >
              <p className='prob-con-para-1'>"Eco-Friendly Couture"</p>
                <div className='prob-con-para-2'>
                    <p>In today's world, sustainability is paramount in fashion.
                       Your task is to design a couture outfit using only recycled materials.
                       These materials can include anything from old garments, newspapers, plastic bags,
                       or even discarded electronics. The key is to showcase your creativity while being
                       mindful of the environmental impact of fashion.</p>
                </div>
          </div>

          <div className='prob-content-div'
               style={{transform:prob === 3 ? 'translateX(0%)scale(1)': prob === 1 ? "translateX(100%)scale(0.5)":'translateX(100%)scale(0.8)',
                       opacity:prob === 1 ? '0':'1', transition:prob === 2 ? '1s ease-out':'0'
                       }}
          >
               <p className='prob-con-para-1'>"Eco-Friendly Couture"</p>
               <div className='prob-con-para-2'>
                    <p>In today's world, sustainability is paramount in fashion.
                       Your task is to design a couture outfit using only recycled materials.
                       These materials can include anything from old garments, newspapers, plastic bags,
                       or even discarded electronics. The key is to showcase your creativity while being
                       mindful of the environmental impact of fashion.</p>
                </div>
          </div>  
    
          <div className='prob-num-div' style={{opacity:prob===1 ? '1': '0'}}>1.</div>
          <div className='prob-num-div' style={{opacity:prob===2 ? '1': '0'}}>2.</div>
          <div className='prob-num-div' style={{opacity:prob===3 ? '1': '0'}}>3.</div>

          <div className='prob-nav-div'>

               <img className='prob-arrow-1' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/prob-arrow-1.png' alt=''
                    onClick={() => setProb(prev => prev === 1 ? 3 : prev - 1)}
               />
               <div className='prob-nav-dot-1' style={{scale:prob === 2 && '1.8', backgroundColor:prob === 2 && '#BD1643'}}/>        
               <div className='prob-nav-dot-2' style={{scale:prob === 1 && '1.8', backgroundColor:prob === 1 && '#BD1643'}}/>        
               <div className='prob-nav-dot-3' style={{scale:prob === 3 && '1.8', backgroundColor:prob === 3 && '#BD1643'}}/>  
               <img className='prob-arrow-2' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/prob-arrow-2.png' alt=''
                    onClick={() => setProb(prev => prev === 3 ? 1 : prev + 1)}
               />      

          </div>
    </div>
  )
}

export default Problem