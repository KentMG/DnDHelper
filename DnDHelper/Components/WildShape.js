import React, { Component } from 'react';
import { List } from 'react-native-paper';


export default function WildShape(props) {
    return (
        <List.Accordion title={props.WildShape.Name}>
            <List.Accordion title='    Stats'>
                <List.Item title={"        HP: " + props.WildShape.HP} />
                <List.Item title={"        AC: " + props.WildShape.AC} />
                <List.Item title={"        Speed: " + props.WildShape.Speeds.Speed} />
            </List.Accordion>
            <List.Accordion title={"        Abilities"}>
                {props.WildShape.Actions.map(action => {
                    return(<List.Accordion title={"            " + action.Name}>
                        <List.Item title={"                To Hit: " + action.ToHitBonus}/>
                        <List.Item title={"                Range: " + action.Reach}/>
                        <List.Item title={"                Targets: " + action.Targets}/>
                        <List.Item title={"                Average Damage: " + action.AvgDamage}/>
                        <List.Item title={"                Damage: " + action.DamageRoll}/>
                        <List.Accordion title = {"               Effects"}>
                            {action.Effects.map(effect => (<List.Item title={effect}/>))}
                        </List.Accordion>
                    </List.Accordion>)
                })}
            </List.Accordion>
            {/* <List.Accordion title='    Abilities'>
                {props.WildShape.Abilities.map((Ability, i) => {
                    return (<List.Item key = {i} title={`        ${Ability}`} />)
                })}
            </List.Accordion> */}
        </List.Accordion>
    )
}