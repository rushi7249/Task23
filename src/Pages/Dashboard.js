import React from 'react'
import "./Dashboard.css"
import school_trip from "../Image/school_trip.jpg"
import family_trip from "../Image/family_trip.jpg"

import friends_trip from "../Image/friends_trip.jpg"

const Dashboard = () => {
  return (
    <>
      <div className="  Dashboard">
        <div className="div_1">
          <div className="img_section">
            <img src={school_trip}  alt="SchoolTrip"/>
          </div>
          <div className="school_info">

            <h5>
              A school trip is an organized outing where students travel outside the classroom to explore new environments, learn practical skills, and gain hands-on experiences. These trips can include visits to museums, historical landmarks, nature reserves, or recreational sites, blending education with fun and fostering teamwork, curiosity, and personal growth.
</h5>
          </div>
        </div>
        <div className="div_2">
          <div className="img_section">
            <img src={family_trip}  alt="familtTrip"/>
          </div>
          <div className="family_info">
            <h5>A family trip is a getaway where family members travel together to relax, bond, and create lasting memories. It can involve visiting new destinations, exploring nature, or enjoying recreational activities, strengthening relationships and providing quality time away from daily routines.







</h5>
          </div>
        </div>
        <div className="div_3">
          <div className="img_section">
            <img src={friends_trip}  alt="FridesTrip" />
          </div>
          <div className="friends_info">

            <h5>A friends trip is a fun getaway with companions, offering a chance to explore new places, share adventures, and strengthen friendships. It’s about creating memories, enjoying activities together, and escaping daily routines for quality time with your closest friends.</h5>
          </div>
        </div>
       
      </div>

    </>
  )
}

export default Dashboard
