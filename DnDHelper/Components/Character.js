import React, { Component } from 'react';
import { List } from 'react-native-paper';


export default class Character extends Component {
    constructor(props){
        super(props);
    }
render(){
    return (
        <List.Accordion title={this.props.Character.Name.slice(1, this.props.Character.Name.length-1)}>
            <List.Accordion title='    Stats'>
                <List.Item title={'        Class: ' + this.props.Character.Class.slice(1, this.props.Character.Class.length-1)} />
                <List.Item title={'        Level: ' + this.props.Character.Level} />
                <List.Item title={"        HP: " + this.props.Character.HP} />
                <List.Item title={"        AC: " + this.props.Character.AC} />
            </List.Accordion>
            <List.Item title="    Wild Shapes" onPress={() => this.props.navigation.navigate('ViewShapes', {WildShapes:props.Character.WildShapes})} />
        </List.Accordion>
    )
}
}