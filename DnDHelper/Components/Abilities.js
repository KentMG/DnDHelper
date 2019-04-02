import React, { Component } from 'react';
import { List } from 'react-native-paper';
import { Dimensions } from 'react-native';

export default class Abilities extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: "",
            Description: ""
        }

    }

    async load() {

    }

    componentDidMount() {
        let that = this;
        console.log(this.props.Ability)
        fetch(`https://dndhelperapi.herokuapp.com/Abilities/${this.props.Ability}`, {
            method: 'get'
        })
            .then((response) => {
                return response.json();
            })
            .then((events) => {
                that.setState({ Name: events.Name }),
                    that.setState({ Description: events.Description })
            })
            .catch(() => {
                return "fault";
            });
    }

    render() {
        console.log(this.state)
        let {Width, height} = Dimensions.get('window')
        return (
                    <List.Item title={"        " + this.state.Name} description={this.state.Description} />
                )
    }
}