import React, {Component} from "react";
import DisplayName from "./Components/DisplayName/DisplayName";
import DisplayList from "./Components/DisplayList/DisplayList";
import SendAlert from "./Components/SendAlert/SendAlert";

class App extends Component{
   constructor(props){
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
        };
   }

   AlertUser = () => {
       alert("devCodeCamp!");
   }

   render(){
       return (
           <div>
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                <DisplayList names={this.state.names}/>
                <SendAlert alert={this.AlertUser}/>
           </div>
       );
   }
}

export default App;
    