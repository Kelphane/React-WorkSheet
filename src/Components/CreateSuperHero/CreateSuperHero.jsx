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
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createHero(this.state);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>ID: </label>
                <input type="text" name="id" onChange={this.handleChange} />

                <label>Name: </label>
                <input type="text" name="name" onChange={this.handleChange} />

                <label>Primary Ability: </label>
                <input type="text" name="primary" onChange={this.handleChange} />

                <label>Secondary Ability: </label>
                <input type="text" name="secondary" onChange={this.handleChange} />

                <button type="submit">Submit!</button>
            </form>
        );
    }
}

export default CreateSuperHero;