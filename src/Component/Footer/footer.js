import React from 'react'
import{Card} from 'react-bootstrap'


const Footer = () => {
      return (
      <Card style={{ position: 'fixed',bottom: '0',width: "100%",textAlign:"center",fontweight: "bold",fontSize:"22px",fontFamily: "Georgia, serif",color:"white"}}>
      <Card.Body style={{display:'block',marginRight:'100px',marginLeft:'auto'}}>
      <Card.Title>Privacy Policy | Terms Of Service | Change Log</Card.Title>
      <Card.Text>
                        
            </Card.Text>
                   
      </Card.Body>
      </Card>
      )
}

export default Footer