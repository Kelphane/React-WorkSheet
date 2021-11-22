import React from "react";
import axios from "axios";
import { Component } from "react";

class Jokes extends Component{
    constructor(props){
        super(props);
        this.state = {
            jokes: []
        };
    }

    componentDidMount(){
        this.fetchJoke();
    }

    async fetchJoke(){
        try{
            let joke = await axios.get("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=5");
            this.setState({
                jokes: joke.data.jokes
            });
        }catch(error){
            console.log(error);
        }
    }

    render(){
        console.log(this.state);
        return (
            <>
            <h1>Testing!</h1>
            {this.state.jokes.map(joke => {
                return <h4 key={joke.id}>{joke.setup} {joke.delivery}</h4>
            })}
            </>
        );
    }
}

export default Jokes;

