import React from 'react'
import './App.css'
import Navigation from './Component/Navbar/navbar'
import Timer from './Component/Timer/timer'
import Footer from './Component/Footer/footer'

class App extends React.Component {
 
  state = {
    
   
    fullName: "Rabeb Wederni",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    profession: "Master sécurité informatique",
    photo:"https://images.unsplash.com/photo-1524439905099-9bcb592260cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80",
    isShow: false,
  
}

render(){
  return (


    <div >
      <Navigation />
      <div className="App">
      <button className="button plus" onClick={
        ()=> (this.setState({isShow :!this.state.isShow}))} >
      
        {this.state.isShow ?<div className="minus"></div> :
          <div>
            <span className="bg" id="plus" />
            <span className="symbol" />
          </div>
        }
      </button>
      
      { this.state.isShow &&
        
        <div>
        {/* counter */}

        <Timer/>

        {/* profile card  */}
          <div className="card mb-3 " style={{ margin: "100px 250px 150px 250px" ,color:"white"}}>
                

          <div className="row no-gutters">
          <div className="col-md-4">
          <img alt="PHOTO" src={this.state.photo} style={{width:"350px",height:"200px"}}/>
          </div>
          <div className="col-md-8">
          <div className="card-body">
                <h5 className="card-title" style={{ fontSize:"25px"}}>{this.state.fullName}</h5>
                <p className="card-text">{this.state.bio}</p>
                <p className="card-text">{this.state.profession}</p>
          </div>
          </div>
          </div>

          </div>
          </div>
        }
      </div>
      <Footer/>
  </div>
);
}
}
export default App;