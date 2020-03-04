import React,{ Component } from "react";
import './Picture.css';

class Picture extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.gear === 'Gear 0'){
            return(
                <div>
                <img src={this.props.imageUrl} className="imf"/><br/>
                <h4><b>{this.props.gear}</b><br/> Current Speed : {this.props.speed} km/hr
                <br/>You've Travelled : {this.props.distance} Kms</h4>
            </div>
            )
        }
        else if(this.props.counter > 10){
            return(
                <div>
                <img src={this.props.imageUrl} className="imf"/><br/>
                <h4><b>{this.props.gear}</b><br/> Current Speed : {this.props.speed} km/hr
                <br/><span style={{color:'green'}}>You've Travelled : {this.props.distance} Kms</span></h4>
            </div>
            )
        }
        else {
        return(
            <div>
            <img src={this.props.imageUrl} className="imf"/><br/>
            <h4><b>{this.props.gear}</b><br/> Current Speed : {this.props.speed} km/hr</h4>
        </div>
        );
        }
    }
}
export default Picture;