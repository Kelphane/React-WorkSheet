import React, {Component} from "react";
import DisplayName from "./Components/DisplayName/DisplayName";
import DisplayList from "./Components/DisplayList/DisplayList";
import SendAlert from "./Components/SendAlert/SendAlert";
import SuperHeroList from "./Components/SuperHeroList/SuperHeroList";
import CreateSuperHero from "./Components/CreateSuperHero/CreateSuperHero";

class App extends Component{
   constructor(props){
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie'],
            superheroes: [
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
        };
   }

   AlertUser = () => {
       alert("devCodeCamp!");
   }

   createHero(hero){
       this.setState({
           superheroes: [].push(hero)
       });
   }

   render(){
       return (
           <div>
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                <DisplayList names={this.state.names}/>
                <SendAlert alert={this.AlertUser}/>
                <SuperHeroList heroes={this.state.superheroes} />
                <CreateSuperHero createHero={this.createHero}/>
           </div>
       );
   }
}

export default App;
    