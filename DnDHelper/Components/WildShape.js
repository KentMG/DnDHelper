import React, { Component } from 'react';
import { List } from 'react-native-paper';
import { Dimensions } from 'react-native'


export default class WildShape extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: "",
            HP: "",
            AC: 0,
            GSpeed: "",
            Stats: [],
            Skills: [],
            Senses: [],
            Abilities: [],
            Actions: [],
            Challenge: 0
        }

    }

    async load() {

    }

    componentDidMount() {
        let that = this;
        console.log(this.props.Shape)
        fetch(`https://dndhelperapi.herokuapp.com/shapes/${this.props.Shape}`, {
            method: 'get'
        })
            .then((response) => {
                return response.json();
            })
            .then((events) => {
                that.setState({ Name: events.Creature.Name }),
                    that.setState({ HP: events.Creature.HP }),
                    that.setState({ AC: events.Creature.AC }),
                    that.setState({ GSpeed: events.Creature.Speeds.Speed }),
                    that.setState({ Stats: events.Creature.Stats }),
                    that.setState({ Skills: events.Creature.Skills }),
                    that.setState({ Senses: events.Creature.Senses }),
                    that.setState({ Abilities: events.Creature.Abilities }),
                    that.setState({ Actions: events.Creature.Actions }),
                    that.setState({ Challenge: events.Creature.Challenge })
            })
            .catch(() => {
                return "fault";
            });
    }

    render() {
        console.log(this.state)
        let {Width, height} = Dimensions.get('window')
        return (
            <List.Accordion title={this.state.Name}>
                <List.Accordion title='    Stats'>
                    <List.Item title={"        HP: " + this.state.HP} />
                    <List.Item title={"        AC: " + this.state.AC} />
                    <List.Item title={"        Speed: " + this.state.GSpeed} />
                </List.Accordion>
                <List.Accordion title={"        Actions"}>
                    {this.state.Actions.map((action, i) => {
                        return (<List.Accordion key={i} title={"            " + action.Name}>
                            <List.Item title={"                To Hit: " + action.ToHitBonus} />
                            <List.Item title={"                Range: " + action.Reach} />
                            <List.Item title={"                Targets: " + action.Targets} />
                            <List.Item title={"                Average Damage: " + action.AvgDamage} />
                            <List.Item title={"                Damage: " + action.DamageRoll} />
                            <List.Accordion title={"               Effects"}>
                                {action.Effects.map((effect, i) => (<List.Item key={i} description={effect} style={{flex: 1, flexWrap: 'wrap'}}/>))}
                            </List.Accordion>
                        </List.Accordion>)
                    })}
                </List.Accordion>
                <List.Accordion title='    Abilities'>
                    {this.state.Abilities.map((Ability, i) => {
                        return (<List.Item key={i} title={`        ${Ability}`} />)
                    })}
                </List.Accordion>
            </List.Accordion>
        )
    }
}