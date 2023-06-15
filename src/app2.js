import React from "react";
import "./app2.css"
class Nav extends React.Component{
render(){
  var styining={
    height:this.props.height,
    width:this.props.width,
    margine:"0px",
    backgroundColor:this.props.color,
    
  }
  var logo= {
    margine:"10px",
    padding:"10px",
    height:"77px",
    width: "120px",
    border: "10px",
  }
  var cart={
    position:"absolute",
    width:"32px",
    height:"32px",
    paddingLeft:"0px",
    top:"30",
    right:"100"
  }
  function refresh(){
    window.location.reload(false)
  }
  function signin(){
    console.log("work under progress");

  }
  if(this.props.pic==="yes")
  {
  return(
  <div style={styining} id={this.props.id}>
    <div>
    <img src="logo.jpg" style={logo} onClick={refresh}></img>
    <div >
    <img src="/resorce/cart.png" className="cart"  onClick={signin}></img>
    <button className="sign" onClick={signin}>
    <u>sign in</u>
    </button>
    </div>
    </div>
  </div>
  );
  }
  else{
    return(<div style={styining} id={this.props.id}>
  </div>
  );
  }} 
}
export {Nav};