import React, {Component} from "react";

class App extends Component{
    constructor(props){
        super(props);
        state = {
            firstName: 'Reggie',
            lastName: 'White'
        }
    }
    
    //Exercise 2
    state = {
        names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
    }
    //Exercise 4
    state = {
        superheroes = [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondarAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondarAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondarAbility: 'Shoots web'
            }
        ]
    }
}

export default App;
    