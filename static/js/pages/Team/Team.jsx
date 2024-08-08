import React from 'react';
import './Team.scss';

function Team() {

    const [teamData, setTeamData] = React.useState(0);

    const handleTeamMouseEnter = (id) => {
          setTeamData(id);
    }
  return (
    <div className='Team' >

         <div className='team-heading'>
              <p className='team-head-txt-1'>TEAM</p>
              <p className='team-head-txt-2'>Building The Future Together.</p>
         </div>
         
         <div className='team-center-div'>

              <div className='team-c-content-1' 
               //     onMouseEnter={()=>handleTeamMouseEnter(1)}
                   onClick={()=>handleTeamMouseEnter(1)}
                   onMouseLeave={()=>handleTeamMouseEnter(0)}
                   >

                   <div className='team-c-person-img-container'
                        style={{
                                height : teamData === 1 ? '60%':'',
                                // transform: teamData === 1 && 'scale(1,0.5)',
                                transition: teamData === 1 && 'height 1.5s ease-out'
                        }}
                   >
                        <img className='team-c-person-img' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-c-person-img-am.png' alt=''/>
                        <img className='team-plus-logo'    src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-plus-logo.png' alt=''/>
                        
                   </div>

                   <div className='team-c-person-name' 
                        style={{
                                transform: teamData === 1 && 'translateY(-650%)',
                                transition: teamData === 1 && 'transform 1.5s ease-out'
                                }}>
                      <p>Alexander Mitchell</p>
                   </div>

                   <div className='team-c-person-profile-0'
                        style={{
                                transition: teamData === 1 && 'transform 0s ease-out'
                                }}>
                      <p>FOUNDER</p>
                   </div>

                   <div className='team-c-person-profile-1' 
                        style={{
                                transition: teamData === 1 && ' 0.2s ease-out ',
                                opacity: teamData === 1 ? 0 : ''
                                }}>
                      <p>FOUNDER</p>
                   </div>

                   <div className='team-c-person-details'
                        style={{
                                opacity: teamData === 1 ? 0.5 : 0
                                }}
                   >
                      <ul>
                          <li>15+ years of experience</li>
                          <li>Certified SCRUM Product </li>
                          <li>PhD in Computer Science</li>
                          <li>10+ years of experience in designing</li>
                      </ul>
                   </div>
              </div>

              <div className='team-c-content-2' 
               //     onMouseEnter={()=>handleTeamMouseEnter(2)}
                   onClick={()=>handleTeamMouseEnter(2)}
                   onMouseLeave={()=>handleTeamMouseEnter(0)}
                  >

                  <div className='team-c-person-img-container' 
                       style={{height : teamData === 2 ? '60%':'',
                               transition: teamData === 2 && 'height 1.5s ease-out'}}>
                      <img className='team-c-person-img' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-c-person-img-oj.png' alt=''/>
                        <img className='team-plus-logo' src=' https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-plus-logo.png' alt=''/>
                  </div>

                  <div className='team-c-person-name' 
                        style={{
                                transform: teamData === 2 && 'translateY(-650%)',
                                transition: teamData === 2 && 'transform 1.5s ease-out'
                                }}>
                      <p>Olivia Johnson</p>
                  </div>

                  <div className='team-c-person-profile-0'
                        style={{
                                transition: teamData === 2 && 'transform 0s ease-out'
                                }}>
                      <p>CIO</p>
                  </div>

                  <div className='team-c-person-profile-1'
                        style={{
                                // transform: teamData === 2 ?"": 'translateY(590%)',
                                transition: teamData === 2 && 'transform 1.5s ease-out',
                                opacity: teamData === 2 ? 0 : ''
                                }}>
                      <p>CIO</p>
                  </div>

                  <div className='team-c-person-details'
                        style={{
                                opacity: teamData === 2 ? 0.5 : 0
                                }}
                   >
                      <ul>
                          <li>15+ years of experience</li>
                          <li>Certified SCRUM Product </li>
                          <li>PhD in Computer Science</li>
                          <li>10+ years of experience in designing</li>
                      </ul>
                  </div>
               </div>

              <div className='team-c-content-3' 
               //     onMouseEnter={()=>handleTeamMouseEnter(3)}
                   onClick={()=>handleTeamMouseEnter(3)}
                   onMouseLeave={()=>handleTeamMouseEnter(0)}
                  >

                   <div className='team-c-person-img-container' 
                        style={{height : teamData === 3 ? '60%':'',
                               transition: teamData === 3 && 'height 1.5s ease-out'}}>
                       <img className='team-c-person-img' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-c-person-img-cw.png' alt=''/>
                        <img className='team-plus-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-plus-logo.png' alt=''/>
                   </div>

                   <div className='team-c-person-name' 
                        style={{
                                transform: teamData === 3 && 'translateY(-650%)',
                                transition: teamData === 3 && 'transform 1.5s ease-out'
                                }}>
                       <p>Charlotte White</p>
                   </div>

                   <div className='team-c-person-profile-0'
                        style={{
                                transition: teamData === 3 && 'transform 0s ease-out'
                                }}>
                       <p>CMO</p>
                   </div>

                   <div className='team-c-person-profile-1'
                        style={{
                                // transform: teamData === 3 ?"": 'translateY(590%)',
                                transition: teamData === 3 && 'transform 1.5s ease-out',
                                opacity: teamData === 3 ? 0 : 0.7
                                }}>
                       <p>CMO</p>
                   </div>

                   <div className='team-c-person-details'
                        style={{
                                opacity: teamData === 3 ? 0.5 : 0
                                }}
                   >
                      <ul>
                          <li>15+ years of experience</li>
                          <li>Certified SCRUM Product </li>
                          <li>PhD in Computer Science</li>
                          <li>10+ years of experience in designing</li>
                      </ul>
                   </div>
              </div>

              <div className='team-c-content-4' 
               //     onMouseEnter={()=>handleTeamMouseEnter(4)}
                   onClick={()=>handleTeamMouseEnter(4)}
               //     onMouseLeave={()=>handleTeamMouseEnter(0)}
                   onMouseLeave={()=>handleTeamMouseEnter(0)}
                  >
                   
                   <div className='team-c-person-img-container' 
                        style={{height : teamData === 4 ? '60%':'',
                               transition: teamData === 4 && 'height 1.5s ease-out'}}>
                        <img className='team-c-person-img' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-c-person-img-er.png' alt=''/>
                        <img className='team-plus-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-plus-logo.png' alt=''/>
                   </div>

                   <div className='team-c-person-name' 
                        style={{
                                transform: teamData === 4 && 'translateY(-650%)',
                                transition: teamData === 4 && 'transform 1.5s ease-out'
                                }}>
                       <p>Ethan Reynolds</p>
                   </div>

                   <div className='team-c-person-profile-0'
                        style={{
                                transition: teamData === 4 && 'transform 0s ease-out'
                                }}>
                       <p>CTO</p>
                   </div>

                   <div className='team-c-person-profile-1'
                        style={{
                                // transform: teamData === 4 ?"": 'translateY(590%)',
                                transition: teamData === 4 && 'transform 1.5s ease-out',
                                opacity: teamData === 4 ? 0 : 0.7
                                }}>
                       <p>CTO</p>
                   </div>

                   <div className='team-c-person-details'
                        style={{
                                opacity: teamData === 4 ? 0.5 : 0
                                }}
                   >
                      <ul>
                          <li>15+ years of experience</li>
                          <li>Certified SCRUM Product </li>
                          <li>PhD in Computer Science</li>
                          <li>10+ years of experience in designing</li>
                      </ul>
                   </div>
              </div>


         </div>

         <img className='team-cursor' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png' alt='' style={{ left:'30%', opacity: teamData === 1 ||  teamData === 2 || teamData === 3 || teamData === 4 ? '0':''}}/>
         <img className='team-cursor' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png' alt='' style={{             opacity: teamData === 1 ||  teamData === 2 || teamData === 3 || teamData === 4 ? '0':''}}/>
         <img className='team-cursor' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png' alt='' style={{ left:'64%', opacity: teamData === 1 ||  teamData === 2 || teamData === 3 || teamData === 4 ? '0':''}}/>
         <img className='team-cursor' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png' alt='' style={{ left:'82%', opacity: teamData === 1 ||  teamData === 2 || teamData === 3 || teamData === 4 ? '0':''}}/>
         

    </div>
  )
}

export default Team