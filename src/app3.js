import React from 'react';
import './app2.css';

			class Prod extends React.Component{
	            
				render(){
					var letterstyle={
						backgroundColor:"black",
						color:"#333",
						display:"inline-block",
						padding:"10px",
						margin:"10px",
						color:"white"
					}
					return <div style={ letterstyle}>
							{this.props.children}
						 </div>;
				}
				constructor(props) {
                 super(props);
				 this.state = {
					count: 0
    	            };
		         this.increase = this.increase.bind(this);
				 this.decrease = this.decrease.bind(this);
				 this.prod=this.prod.bind(this);
				}
 increase(e) {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrease(e) {
    this.setState({
      count: this.state.count - 1
    });
  }
  prod(e){
	console.log("work under progress");
  }
  
  render(){
	var letterstyle={
						backgroundColor:"black",
						color:"#333",
						display:"inline-block",
						padding:"15px",
						margin:"2px",
						color:"white",
						borderRadius:"5px"
					}; 
	var logo= {
		margine:"10px",
		padding:"10px",
		height:"150px",
		width: "250px",
		border: "10px",
	  };
    return(
      <div style={letterstyle} value={this.props.arr} onClick={this.prod}>
        <div >
            <img src={this.props.pic} style={logo} alt="check internet"></img>
        </div>
		<h3 style={ letterstyle}>
							{this.props.children}
							</h3>
							</div>
							);
					
	}	
};
		export {Prod};