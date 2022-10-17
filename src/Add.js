import React, {Component} from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            num1: 0,
            num2: 0,
            score: 0
        }
        
        this.checkAnswer = this.checkAnswer.bind(this);
        this.generateNumbers = this.generateNumbers.bind(this);
    }
    
    checkAnswer(event) {
        if (+this.state.num1 + +this.state.num2 === +event.target[0].value) {
            this.setState({ num1: this.state.num1, num2: this.state.num2, score: this.state.score++ });
            console.log("CORRECT!");
        }
        else {
            console.log("WRONG!");
        }
        this.generateNumbers();
        event.preventDefault();
    }
    
    generateNumbers() {
        this.setState({ num1: Math.floor(Math.random() * 10) + 1, num2: Math.floor(Math.random() * 10) + 1, score: this.state.score });
    }
    
    render() {
        return (
            <div>
                <h1>Add</h1>
                <button onClick={this.generateNumbers}>Begin!</button>
                
                <h1>{this.state.num1} + {this.state.num2} = ?</h1>
                <form onSubmit={this.checkAnswer}>
                    <input type="text"/>
                    <button type="submit">Check Answer</button>
                </form>
                
                <h1>Score: {this.state.score}</h1>
            </div>
        );
    }
}

export default Add;