import React from "react";

const SuperHeroList = (props) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Primary Power</th>
                    <th>Second Power</th>
                </tr>
            </thead>

            <tbody>
                {props.heroes.map(hero => {
                    return (
                        <tr key={hero.superheroId}>
                            <td>{hero.name}</td>
                            <td>{hero.primaryAbility}</td>
                            <td>{hero.secondarAbility}</td>
                        </tr>
                       );
                })}
            </tbody>
        </table>
    );
}

export default SuperHeroList;