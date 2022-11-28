import React from "react";

export default function faq1(){
    return(
        <div>
            <div className="faq1">


            
        <div class="faq_main">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="faq_categories">
                            <h2 class="section_heading banner_heading">FAQ</h2>

                            <button class="tablink active" onclick="openFacility(event, 'hall_facility')">Hall Facility</button>
                            <button class="tablink" onclick="openFacility(event, 'in-room_facility')">In-room Facility</button>
                            <button class="tablink" onclick="openFacility(event, 'medical_facility')">Medical Facility</button>
                            <button class="tablink" onclick="openFacility(event, 'power_supply')">Power Supply</button>
                            <button class="tablink" onclick="openFacility(event, 'wifi_internet')">Wi-Fi &amp; Internet</button>
                        </div>
                    </div>

                    <div class="col-lg-8 col-md-8 col-sm-12">
                        <div class="faq_question">
                            <div id="hall_facility" class="facility_name tablink" style="display: block;">
                                
                                <h2 class="section_heading faq_heading">Hall Facility</h2>
                                
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Is the hall facility available on campus?</h3>
                                    <p class="p_text">Yes, we have hall facility available on campus.</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Is the AC room available in the hall?</h3>
                                    <p class="p_text">No, we are not offering any AC room for the students yet.</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Is there any water filter available in the hall?</h3>
                                    <p class="p_text">Yes, we have the water filter service available for each student.</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Is hot drinking water available</h3>
                                    <p class="p_text">Yes, students have access to hot drinking water in the hall.</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Can students stay in the hall for 15 days for trial? </h3>
                                    <p class="p_text">No, we are not offering any trial period in the hall.</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Can students keep their luggage in the hall during vacation time? </h3>
                                    <p class="p_text">Yes, students can keep their luggage in the hall during their vacation time.</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">How close are accommodation options to campus?</h3>
                                    <p class="p_text">All halls are on the campus premises.</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Can I take a tour of accommodation options?</h3>
                                    <p class="p_text">Yes</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Is there any accommodation for couples?</h3>
                                    <p class="p_text">No</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Can I bring a car/bike?</h3>
                                    <p class="p_text">Yes</p>
                                </div>
                            </div>

                            <div id="in-room_facility" class="facility_name tablink">
                                
                                <h2 class="section_heading faq_heading">In-room Facility</h2>
                                
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">What is the room capacity?</h3>
                                    <p class="p_text">Four students will be living in each room.</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Are the necessary furniture's available in the room?</h3>
                                    <p class="p_text">Yes, necessary furniture's are provided for each student in the room</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">What is the room size?</h3>
                                    <p class="p_text">Each room is 300 Square Feet in size.</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">In case any valuable items are lost from the room, will the authority pay for that?</h3>
                                    <p class="p_text">No.</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Is the laundry facility available?</h3>
                                    <p class="p_text">Yes, the laundry facility is available with other in-room services.</p>
                                </div>
        
                            </div>
                            
                            <div id="medical_facility" class="facility_name tablink">
                                
                                <h2 class="section_heading faq_heading">Medical Facility</h2>

                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Is the medical facility available on the campus?</h3>
                                    <p class="p_text">Yes, we have medical facilities available on campus.</p>
                                </div>
                            </div>

                            <div id="power_supply" class="facility_name tablink">

                                <h2 class="section_heading faq_heading">Power Supply</h2>
                                
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Is there electricity available in the hall?</h3>
                                    <p class="p_text">Yes.</p>
                                </div>
        
                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Is there any generator at the hall in case of load shedding?</h3>
                                    <p class="p_text">Yes.</p>
                                </div>
                            </div>

                            <div id="wifi_internet" class="facility_name tablink">
                                
                                <h2 class="section_heading faq_heading">Wifi &amp; Internet</h2>

                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Is the Wi-Fi facility available in the hall?</h3>
                                    <p class="p_text">Yes, 24/7 high-speed Wi-Fi facility is available in the hall.</p>
                                </div>
                            </div>

                            <div id="admission_facility" class="facility_name tablink">
                                
                                <h2 class="section_heading faq_heading">Admission</h2>

                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Can students book a seat from home?</h3>
                                    <p class="p_text">Yes. Students can book seat from home online using <a href="hall-portal.html">Hall Portal</a></p>
                                </div>

                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Can the students select the room and Hall?</h3>
                                    <p class="p_text">No.</p>
                                </div>

                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Who is eligible to apply for student accommodation?</h3>
                                    <p class="p_text">Students parents or local guardian.</p>
                                </div>

                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">When can I apply for accommodation?</h3>
                                    <p class="p_text">After university admission.</p>
                                </div>

                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Can I apply for accommodation before I know I am accepted to the University?</h3>
                                    <p class="p_text">No.</p>
                                </div>

                                <div class="faq_box">
                                    <h3 class="section_sub_heading faq_sub_heading">Will I get a refund if I cancel my contract?</h3>
                                    <p class="p_text">No.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    


            </div>
        </div>
          
        
    )
}