import React,{ Component } from "react";
import  './App.css';
// import Quiz from "../Quiz";
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from "../Start";
// import Picture from "../Picture";

class App extends Component{
    constructor(){
       super();
      
    }
    
    render(){
        return(
            <Start/>
        );
    }
}

export default App;