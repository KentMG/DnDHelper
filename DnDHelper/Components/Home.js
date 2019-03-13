import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: true,
    };

    const { navigate } = this.props.navigation;

    _handlePress = () =>
      this.setState({
        expanded: !this.state.expanded
      });
  }

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerTintColor: '#AA002A',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    footerStyle: {
      backgroundColor: '#000000',
    },
    footerTintColor: '#AA002A',
    footerTitleStyle: {
      fontWeight: 'bold',
    },
  };



  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#000000' }}>
        <List.Accordion title="Shayael">
          <List.Item title="&nbsp;&nbsp;&nbsp;&nbsp;Wild Shapes"  onPress={() => this.props.navigation.navigate('ViewShapes')} />
          <List.Item title="&nbsp;&nbsp;&nbsp;&nbsp;Stats"  />
        </List.Accordion>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    color: '#FF003A'
  }
})