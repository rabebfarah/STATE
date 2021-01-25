import React from "react"
import  './navbar.css'
import {Navbar,Nav} from 'react-bootstrap'
const Navigation = () => {
      
      return (
      <Navbar >
          
 <ul style={{  marginLeft: "20px", marginTop: "0px",marginBottom: "-100px", listStyle: "none",fontWeight: "bold",fontSize:"22px",fontFamily: "Georgia, serif",color:"white"}}>
   
 <li class="nav1" >TIMER</li>
  <li class="NAV2"> HOME</li>
  <li class="NAV4" >PROFILE</li>
</ul>
       
      </Navbar>
            
      )
}
export default Navigation