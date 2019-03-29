import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { List, FAB, Portal } from 'react-native-paper';
import WildShapeMap from './WildShape'

export default class ViewShapesScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Shapes: [],
            expanded: true,
            open: false,
        };

        const { navigate } = this.props.navigation;

        _handlePress = () =>
            this.setState({
                expanded: !this.state.expanded
            });
        getShape = (shapeId) => {
            let shape;
            // await fetch(`https://dndhelperapi.herokuapp.com/shapes/${shapeId}`, {
            //     method: 'get'
            //   })
            //     .then((response) => {
            //       return response.json();
            //     })
            //     .then((events) => {
            //       shape = events 
            //     })
            //     .catch(() => {
            //       return "fault 2";
            //     });
        }
    }



    componentDidMount() {
        let that = this;
        const WildShapes = this.props.navigation.getParam('WildShapes', '[]');


        WildShapes.map(shapeId => {
            let shape = getShape(shapeId)
            that.setState({ Shapes: that.state.Shapes.push(shape) })
        });

    }

    static navigationOptions = {
        title: 'Wildshapes',
        headerStyle: {
            backgroundColor: '#000000',
        },
        headerTintColor: '#AA002A',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#000000' }}>
                <List.Section>
                    {this.state.Shapes.map((WildShape, i) => (
                        <WildShapeMap key={i} WildShape={WildShape} navigation={this.props.navigation} />
                    ))}
                </List.Section>
                <Portal>
                    <FAB.Group
                        open={this.state.open}
                        icon={this.state.open ? 'today' : 'add'}
                        actions={[
                            { icon: 'add', label: 'Add Shape', onPress: () => console.log('Pressed add') },
                            { icon: 'remove', label: 'Remove Shape', onPress: () => console.log('Pressed remove') },
                        ]}
                        onStateChange={({ open }) => this.setState({ open })}
                        onPress={() => {
                            if (this.state.open) {
                                // do something if the speed dial is open
                            }
                        }}
                    />
                </Portal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});