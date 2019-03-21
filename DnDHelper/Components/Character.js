import React, { Component } from 'react';
import { List } from 'react-native-paper';


export default function Character(props) {
    return (
        <List.Accordion title={props.Character.Name}>
            <List.Accordion title='    Stats'>
                <List.Item title={'        Class: ' + props.Character.Class} />
                <List.Item title={'        Level: ' + props.Character.Level} />
                <List.Item title={"        HP: " + props.Character.Stats.HP} />
                <List.Item title={"        AC: " + props.Character.Stats.AC} />
            </List.Accordion>
            <List.Item title="    Wild Shapes" onPress={() => props.navigation.navigate('ViewShapes', {WildShapes:props.Character.WildShapes})} />
        </List.Accordion>
    )
}