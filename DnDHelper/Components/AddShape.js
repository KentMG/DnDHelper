import React, { Component } from 'react';
import { List, TextInput } from 'react-native-paper';
import { Dimensions } from 'react-native';
import Abilities from './Abilities'


export default class WildShape extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: "",
            HP: "",
            AC: 0,
            SpeedG: 0,
            SpeedB: 0,
            SpeedS: 0,
            SpeedC: 0,
            SpeedF: 0,
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

    // componentDidMount() {
    //     let that = this;
    //     console.log(this.props.Shape)
    //     fetch(`https://dndhelperapi.herokuapp.com/shapes/${this.props.Shape}`, {
    //         method: 'get'
    //     })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((events) => {
    //             that.setState({ Name: events.Creature.Name }),
    //                 that.setState({ HP: events.Creature.HP }),
    //                 that.setState({ AC: events.Creature.AC }),
    //                 that.setState({ GSpeed: events.Creature.Speeds.Speed }),
    //                 that.setState({ Stats: events.Creature.Stats }),
    //                 that.setState({ Skills: events.Creature.Skills }),
    //                 that.setState({ Senses: events.Creature.Senses }),
    //                 that.setState({ Abilities: events.Creature.Abilities }),
    //                 that.setState({ Actions: events.Creature.Actions }),
    //                 that.setState({ Challenge: events.Creature.Challenge })
    //         })
    //         .catch(() => {
    //             return "fault";
    //         });
    // }

    render() {
        console.log(this.state)
        let { Width, height } = Dimensions.get('window')
        return (
            <>
                <TextInput
                    label='Name'
                    value={this.state.Name}
                    onChangeText={Name => this.setState({ Name })}
                    mode='outlined'
                />
                <TextInput
                    label='HP'
                    value={this.state.HP}
                    onChangeText={HP => this.setState({ HP })}
                    mode='outlined'
                />
                <TextInput
                    label='AC'
                    value={this.state.AC}
                    onChangeText={AC => this.setState({ AC })}
                    mode='outlined'
                />
                <TextInput
                    label='Class'
                    value={this.state.Class}
                    onChangeText={Class => this.setState({ Class })}
                    mode='outlined'
                />
                <TextInput
                    label='Level'
                    value={this.state.Level}
                    onChangeText={Level => this.setState({ Level })}
                    mode='outlined'
                />
                <List.Accordion title='Speeds'>
                <TextInput
                    label='Walking Speed'
                    value={this.state.SpeedG}
                    onChangeText={SpeedG => this.setState({ SpeedG })}
                    mode='outlined'
                />
                <TextInput
                    label='Fly Speed'
                    value={this.state.SpeedF}
                    onChangeText={SpeedF => this.setState({ SpeedF })}
                    mode='outlined'
                />
                <TextInput
                    label='Burrow Speed'
                    value={this.state.SpeedB}
                    onChangeText={SpeedB => this.setState({ SpeedB })}
                    mode='outlined'
                />
                <TextInput
                    label='Swim Speed'
                    value={this.state.SpeedS}
                    onChangeText={SpeedS => this.setState({ SpeedS })}
                    mode='outlined'
                />
                <TextInput
                    label='Climb Speed'
                    value={this.state.SpeedC}
                    onChangeText={SpeedC => this.setState({ SpeedC })}
                    mode='outlined'
                />
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
                                {action.Effects.map((effect, i) => (<List.Item key={i} description={effect} style={{ flex: 1, flexWrap: 'wrap' }} />))}
                            </List.Accordion>
                        </List.Accordion>)
                    })}
                </List.Accordion>
                <List.Accordion title='    Abilities'>
                    {this.state.Abilities.map((Ability, i) => {
                        return (<Abilities key={i} Ability={Ability} />)
                    })}
                </List.Accordion>
            </>
        )
    }
}