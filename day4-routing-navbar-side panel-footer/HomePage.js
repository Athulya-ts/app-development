import React from 'react'
import './HomePage.css'

const OpenSidebar = () => {
  document.getElementById("sidePanel").style.visibility = "visible";
    document.getElementById("sidePanel").style.width = "250px";
}

const closeSideBar =() => {
    document.getElementById("sidePanel").style.visibility = "hidden";
}

const OpenProfile = () => {
  document.getElementById("profile").style.visibility = "visible";
  document.getElementById("profile").style.width = "250px";
}
function HomePage() {
  return (
    <>
    <div className = "landing-page">
    <div className='homepage'>
    <div className='sidebar'></div>
    <div id = "sidePanel" className = "side-panel">
    <a href="javascript:void(0)" className="close-side-bar" onClick={closeSideBar}><i className="fa fa-remove" style={{fontSize:36}}></i></a>
    <a href="#">About</a>		
    <a href="#">Collaborations</a>			
    <a href="#">Feedback</a>		
    <a href="#">Contact</a>			
    </div>

    <nav className = "NavBar">
      <center>
    <span style = {{cursor:"pointer",position:"absolute"}} onClick = {OpenSidebar}><i className="fa fa-reorder" style={{fontSize:30,color:"#75e2ff"}}></i></span>
      <div className='performance'>
    <div className = "tabs">PERFORMANCE<i className="fa fa-caret-down"></i>
    <div className="dropdown-content">
      <a href="#">Projects Assigned</a>
      <a href="#">Completion Status</a>
      <a href="#">Training Status</a>
      <a href="#">Work Pending</a>
      <a href="#">Turn-over Rates</a>
    </div>
    </div>
    </div>

    <div className='performance'>
      <div className = "tabs">ATTENDANCE<i className="fa fa-caret-down"></i>
      <div className="dropdown-content">
      <a href="#">Working Hours</a>
      <a href="#">Leave Balance</a>
      <a href="#">Attendance History</a>
    </div>
    </div>
    </div>

    <div className='performance'>
    <div className = "tabs">DIRECTORY<i className="fa fa-caret-down"></i>
    <div className="dropdown-content">
      <a href="#">Working Hours</a>
      <a href="#">Leave Balance</a>
      <a href="#">Attendance History</a>
    </div>
    </div>
    </div>

    <div className='performance'>
    <div className = "tabs" id = "training">TRAINING<i className="fa fa-caret-down"></i>
    <div className="dropdown-content">
      <a href="#">Course Id</a>
      <a href="#">No Of Courses Completed</a>
      <a href="#">Training Status</a>
    </div>
    </div>
    </div>

    <div className='performance'>
    <div className = "tabs" id = "salary">SALARY<i className="fa fa-caret-down"></i>
    <div className="dropdown-content">
      <a href="#">Salary</a>
      <a href="#">Bonus</a>
      <a href="#">Tax Withholding</a>
    </div>
    </div>
    </div>

    <div className='performance'>
    <div className = "tabs" id = "history">JOB HISTORY<i className="fa fa-caret-down"></i>
    <div className="dropdown-content">
      <a href="#">Hire Date</a>
      <a href="#">Retirement Date</a>
      <a href="#">Current Role</a>
      <a href="#">Previous Role</a>
    </div>
    </div>
    </div>

    <div className = "tabs" id = "logout">LOGOUT</div>

    <p className = "profile-icon" style = {{cursor:"pointer",position:"absolute"}} onClick = {OpenProfile}><i className="fa fa-user-circle" id="profile" style={{fontSize:36,paddingTop:15,color:"white",position:"absolute"}}></i></p>
    </center>
    </nav>

    <div className = "user">
    {/* <a href="javascript:void(0)" className="close-side-bar" onClick={closeSideBar}><i className="fa fa-remove" style={{fontSize:36}}></i></a>
        <center>
            <br/>
            <p id='profile'><i class="fa fa-user-circle-o" style={{fontSize:150,color:"#75e2ff"}}></i></p>
        <h2 className = "profile-msg">Welcome!</h2>
        </center> */}
    </div>

    <div className='footer'>
      <center>
      <div className='footer-tags'>
        <div className='company'>
          Company<br/>
        <a className = "footer-links" href = "#">Events</a>
        <a className = "footer-links" href = "#">Benefits and Compensation</a>
        <a className = "footer-links" href = "#">FAQ</a>
        <a className = "footer-links" href = "#">Contact Us</a>
        </div>
      </div>
      <div className='footer-tags'>
      <div className='social'>
        Social<br/>
        <a className = "footer-links" href = "#">Instagram</a>
        <a className = "footer-links" href = "#">Facebook</a>
        <a className = "footer-links" href = "#">Twitter</a>
        <a className = "footer-links" href = "#">Linked In</a>
        </div>
      </div>
      <div className='footer-tags'>
      <div className='legal'>
        Legal<br/>
        <a className = "footer-links" href = "#">Terms & Conditions</a>
        <a className = "footer-links" href = "#">Privacy Policy</a>
        <a className = "footer-links" href = "#">Terms of Use</a>
        </div>
      </div>
      </center>
    </div>
    </div>
    </div>
    </>
  )
}

export default HomePage