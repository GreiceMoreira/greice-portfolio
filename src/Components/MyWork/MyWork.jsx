import React from 'react'
import './MyWork.css'
import logo from '../../assets/logo.png'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow.svg'
import SectionTitle from '../SectionTitle/SectionTitle'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <SectionTitle title="My lastest work"/>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
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
        <div className="mywork-showmore">
            <img src={arrow_icon} alt="" />
            <p>Show More</p>
        </div>
    </div>
  )
}

export default MyWork