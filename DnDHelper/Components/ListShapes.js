import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { List, FAB, Portal } from 'react-native-paper';
import WildShapeMap from './WildShape'

export default class ViewShapesScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Shapes=[],
            expanded: true,
            open: false,
        };

        const { navigate } = this.props.navigation;

        _handlePress = () =>
            this.setState({
                expanded: !this.state.expanded
            });
    }

    componentDidMount() {
        let that = this;
        const WildShapes = this.props.navigation.getParam('WildShapes','[]');
        
        client.connect(err => {
          const collection = client.db("DnDHelper").collection("Characters");

          WildShapes.map(shape => {
            shape = collection.find({shape});
            that.setState({Shapes:that.state.Shapes.push(shape)})    
          })
          that.setState({Shapes})
          client.close();
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
                    {WildShapes.map((WildShape, i) => (
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