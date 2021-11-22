import React from "react";
import { Component } from "react";

class CreateSuperHero extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: " ",
            name: " ",
            primary: " ",
            secondary: " "
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state[event.target.name]);
    }

    render(){
        return(
            <form>
                <label for="id">ID: </label>
                <input type="text" name="id" onChange={this.handleChange} />

                <label for="name">Name: </label>
                <input type="text" name="name" onChange={this.handleChange} />

                <label for="primary">Primary Ability: </label>
                <input type="text" name="primary" onChange={this.handleChange} />

                <label for="secondary">Secondary Ability: </label>
                <input type="text" name="secondary" onChange={this.handleChange} />

                <button type="submit">Submit!</button>
            </form>
        );
    }
}

export default CreateSuperHero;