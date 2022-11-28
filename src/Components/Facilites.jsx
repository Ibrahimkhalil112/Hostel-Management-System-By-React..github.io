import React from 'react'
import"./Facilities.css"

export default function Facilites() {
  return (
    <div>
        
        <div className="bodyH">
        <div className="container">
            <h3 className="f-heading">Facilities</h3>
            <div className="facilities_main">
                <div className="row">
                    <h4 className="f_sub_heading">
                        In room Facilities
                    </h4>
                    <div class="service_list ">
                    <ul>
                       <li>One Bed per Student shall be offered</li>
                       <li>Fully furnished rooms with beds &amp; underbed drawers</li>
                       <li>Study tables &amp; Chair</li>
                       <li>Tube lights &amp; LED, Fan</li>
                       <li>Dustbin in each room</li>
                       <li>300 square feet spacious room</li>
                    </ul>
                    </div>
                </div>
                <div className="f_sub_heading">
                  <div class="service_list ">
                    <h4 className="sub_heading">Self Help Facilities</h4>
                    <ul>
                        <li>Laundry Service</li>
                        <li>Filter Water facility to be provided</li>
                        <li>Medical facility available with first aid/ provided to sick Residents</li>
                        <li>Doctor on call number(s) to be shared with the students</li>
                        <li>Dining area</li>
                    </ul>
                  </div>
                </div>
                <div className="f_sub_heading">
                  <div class="service_list">
                    <h4 className="sub_heading">Electricity & Internet</h4>
                    <ul>
                        
                    <li>Electricity facility</li>
                    <li>24/7 Generator facility</li>
                    <li>High speed internet for each students</li>
                    </ul>
                  </div>
                </div>

            </div>
        </div>


    </div>
    </div>
    
  )
}
