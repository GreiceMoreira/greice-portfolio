import React, { useState } from 'react'
import './MyWork.css'
import logo from '../../assets/logo.png'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow.svg'
import SectionTitle from '../SectionTitle/SectionTitle'

const MyWork = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount(prev => (prev === 3 ? mywork_data.length : 3 ));
  }


  return (
    <div id='work' className='mywork'>
        <SectionTitle title="My lastest work"/>
        <div className="mywork-container">
            {mywork_data.slice(0, visibleCount).map((work,index)=>{
                return (   
                  <a 
                    key={index} 
                    href={work.w_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={work.w_img} alt={`Project ${index + 1}`}/>
                  </a> 
                  )
            })}
        </div>
        <div className="mywork-showmore" onClick={handleShowMore}>
            <img src={arrow_icon} alt="" style={{ 
      transform: visibleCount === 3 ? 'rotate(0deg)' : 'rotate(180deg)',
      transition: 'transform 0.3s ease'}} />
            <p>{visibleCount === 3 ? 'Show More' : 'Show Less'}</p>
        </div>
    </div>
  )
}

export default MyWork