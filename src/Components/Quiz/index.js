import React, { Component } from "react";
import './Quiz.css';
import QuestionData from "../../Helpers/Core/QuestionData";
import Puzzle from "../Puzzle";

let debounceCheck = 0;

function debounce(duration) {
    if (debounceCheck) { return true; }

    debounceCheck = setTimeout(() => {
        debounceCheck = 0;
    }, duration || 500);

    return false;
}


class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 1,
            elapsed:0,
            seconds:0,
            level: "single",
            data: QuestionData("single", this.props.operator),
            rightAnswers:0,
            wrongAnswers:0,
            correctAnswers:1
        };

        this.handleClick = this.handleClick.bind(this);
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        setTimeout(()=>{
            this.timer = setInterval(this.tick, 50);
        },1000);
    }

    componentWillUnmount(){

        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:
        clearInterval(this.timer);
    }

    tick(){
        // This function is called every 50 ms. It updates the 
        // elapsed counter. Calling setState causes the component to be re-rendered
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(0);  
        this.setState({elapsed: new Date() - this.props.start});
        this.setState({seconds: seconds});
    }

    handleClick(val) {
        if (debounce()) { return; }
        if (val === this.state.data.correctAnswer) {
            this.setState({
                rightAnswers: this.state.rightAnswers + 1,
                correctAnswers:this.state.correctAnswers + 1
            },function(){
                this.props.reloadImage(this.state.correctAnswers, this.state.seconds,'right');
            });
        } else {
            if(this.state.correctAnswers > 0 && this.state.counter > 2){
                this.setState({
                    correctAnswers:this.state.correctAnswers - 1
    
                },function(){
                     this.props.reloadImage(this.state.correctAnswers, this.state.seconds,'wrong');
                });
            }
            if(this.state.correctAnswers > 0){
                this.setState({
                    wrongAnswers: this.state.wrongAnswers + 1,
                },function(){
                });
            }
            else{
                this.setState({
                    wrongAnswers: this.state.wrongAnswers + 1,
                    correctAnswers:this.state.correctAnswers
    
                },function(){
                    this.props.reloadImage(this.state.correctAnswers, this.state.seconds,'wrong');
                });
            }
           
        }
       
        this.setState({
            counter: this.state.counter + 1,
            data: QuestionData(this.state.level, this.props.operator)
        }, () => {
            this.state.counter > 10 && this.props.finish(this.state.counter)
        })
    }

    render(){
        return(
            <div className="App">
                 <center style={{marginTop:'5%'}}>
                     <p style={{fontWeight:'bold'}}>{this.state.seconds} SECONDS</p>
                 </center>
            <div className="PuzzleContainer">
                   <div className="Results">
                       <div className="count" style={{float:'left',marginRight:'25%'}}>
                           <span style={{color:'white'}}>Question {this.state.counter}</span>
                       </div>
                        <div className="Results__Correct">
                            <span className="Results__Symbol--Correct">&#10004;</span>
                            <span className="Results__Count" style={{color:'white'}}>{this.state.rightAnswers}</span>
                        </div>
                        <div className="Results__Incorrect">
                            <span className="Results__Symbol--Incorrect">&#x2718;</span>
                            <span className="Results__Count" style={{color:'white'}}>{this.state.wrongAnswers}</span>
                        </div>
                    </div>
                <Puzzle
                    handleClick={this.handleClick}
                    data={this.state.data} />
            </div><br/>
            <div className="PuzzleContainer">
            <div>
                <span style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>Rules</span>
                <br/><br/>  
              <ul style={{color:'white'}} className="ruleset">
                  <li>Game starts in first gear where speed is 10 km/hr</li>
                  <li>Correct answer will switch it to the next gear and if answered within 15 seconds will increase the total distance</li>
                  <li>Wrong answer will rollback to the previous gear</li>
                  <li>Game is over if gear is back to 0</li>
                  <li>Correct answer after 15 seconds would just change the gear but no increase in the distance.</li>

              </ul>         
            </div>
            </div>
        </div>
        );
    }
}

export default Quiz;