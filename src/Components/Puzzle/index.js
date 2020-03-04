import React,{ Component } from "react";
import './Puzzle.css';
import Answer from "../Answer";

class Puzzle extends Component{
    render(){
        const { data, handleClick } = this.props
        return(
            <div className="Puzzle">
            <h1 className="Puzzle__Statement">
              {data.question}
            </h1>
            <div className="Puzzle__Answers">
              {data.answers.map((answer, i) => {
                return (
                  <Answer
                    currentIndex={i + 1}
                    key={`${answer}-${i}`}
                    value={answer}
                    handleClick={handleClick}
                  />
                )
              })}
            </div>
          </div>
        );
    }
}

export default Puzzle;