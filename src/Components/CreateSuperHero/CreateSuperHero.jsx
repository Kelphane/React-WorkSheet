import React from "react";
import { Component } from "react";

class CreateSuperHero extends Component{
    constructor(props){
        super(props);
        this.state = {
            superheroId: " ",
            name: " ",
            primaryAbility: " ",
            secondarAbility: " "
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
                <input type="text" name="superheroId" onChange={this.handleChange} />

                <label>Name: </label>
                <input type="text" name="name" onChange={this.handleChange} />

                <label>Primary Ability: </label>
                <input type="text" name="primaryAbility" onChange={this.handleChange} />

                <label>Secondary Ability: </label>
                <input type="text" name="secondarAbility" onChange={this.handleChange} />

                <button type="submit">Submit!</button>
            </form>
        );
    }
}

export default CreateSuperHero;