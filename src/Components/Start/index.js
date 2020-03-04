import React,{ Component } from "react";
import  "./Start.css";
import Quiz from "../Quiz";
import Picture from "../Picture";


class Start extends Component{

    constructor(){
        super();
        this.state={
            display:'start',
            imageUrl:'https://gifimage.net/wp-content/uploads/2017/09/auto-gif-8.gif',
            gear:'Gear 1',
            speed: 10,
            distance:0,
            counter : 1
        };
        this.updatedDistance = 0;
        this.reloadImage =  this.reloadImage.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.finish = this.finish.bind(this);
        this.reload = this.reload.bind(this);

    }
    handleStart(){
        this.setState({
            display:'next'
        });
    }

    finish(counter){
            this.setState({
                counter : counter
            });
    }

    reloadImage(counter,distance,type){

        if(distance <= 15 && type=== 'right'){
           this.updatedDistance = this.state.distance + 10; 
        }
        if(counter >= 5){
            counter = 5;
        }
        switch(counter){
            case 0:
                this.setState({
                    imageUrl:'https://i.gifer.com/2KbZ.gif',
                    gear:'Gear 0',
                    speed:'0',
                    distance :this.updatedDistance
                });
                break;
            case 2:
                this.setState({
                    imageUrl:'https://media1.giphy.com/media/LpRdHGDbXuRdiyl4JL/source.gif',
                    gear:'Gear 2',
                    speed : '20',
                    distance: this.updatedDistance
                });
                break;
                case 3:
                    this.setState({
                        imageUrl:'https://gifimage.net/wp-content/uploads/2017/12/jeep-gif-6.gif',
                        gear:'Gear 3',
                        speed : '30',
                        distance: this.updatedDistance

                    });
                    break;
                case 1:
                    this.setState({
                        imageUrl:'https://gifimage.net/wp-content/uploads/2017/09/auto-gif-8.gif',
                        gear:'Gear 1',
                        speed : '10',
                        distance: this.updatedDistance
                    });
                    break;
                    case 4:
                        this.setState({
                            imageUrl:'https://media0.giphy.com/media/3oKGzApIBl3UyNo7Cw/source.gif',
                            gear:'Gear 4',
                            speed : '40',
                            distance: this.updatedDistance
                        });
                        break;
                        case 5:
                            this.setState({
                                imageUrl:'https://i.ya-webdesign.com/images/racecar-clipart-smoke.gif',
                                gear:'Gear 5',
                                speed : '50',
                                distance: this.updatedDistance
                            });
                            break;
                        
                        default:
                            break;
        }
     }
     reload(){
         location.reload();
     }
    render(){
            if(this.state.display === 'start'){
                return(
                <div className="StartBody">
                    <img src="https://i.imgur.com/lB9kABZ.png" style={{width:'25%',marginTop:'5%',marginLeft:'30%',cursor:'pointer'}}
                    className="cloud" onClick={this.handleStart}/>
                </div>
                )
            }
            else if(this.state.gear === 'Gear 0'){
                return(
                    <div className="App row container-fluid">
                    <div className="col-lg-6 col-md-6">
                        <Picture imageUrl={this.state.imageUrl} gear={this.state.gear} speed={this.state.speed} distance={this.state.distance}/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                       <img src="https://art.pixilart.com/6e6178abc9b28a3.gif" className="imf"/>
                    </div>
                  </div>
                    )
            }
            else{
                if(this.state.counter <= 10){
                    return(
                        <div className="App row container-fluid">
                        <div className="col-lg-6 col-md-6">
                            <Picture imageUrl={this.state.imageUrl} gear={this.state.gear} speed={this.state.speed} distance={this.state.distance} counter={this.state.counter}/>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <Quiz operator="+" start={Date.now()} reloadImage={this.reloadImage} finish = {this.finish}/>
                        </div>
                      </div>
                        )
                }
                else{
                    return(
                        <div className="App row container-fluid">
                        <div className="col-lg-6 col-md-6">
                            <Picture imageUrl={this.state.imageUrl} gear={this.state.gear} speed={this.state.speed} distance={this.state.distance} counter={this.state.counter}/>
                        </div>
                        <div className="col-lg-6 col-md-6">
                        <img src="https://cdn.clipart.email/95c2d0c1ae59bd97fddf04a7a1368f0c_confetti-clipart-gif_370-300.gif" className="imf"/><br/>
                        <a className="btn btn-primary" onClick={this.reload} style={{padding: '33px',color: 'white',marginLeft: '25%'}} >Play Again</a>
                        </div>
                      </div>
                        )
                }
                
            }
    }
}

export default Start;