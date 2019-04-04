import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import CharacterMap from './Character';
import AddShape from './AddShape';
import { AsyncStorage } from 'react-native';
import { List, FAB, Portal } from 'react-native-paper';






const STORAGE_KEY = 'DNDHelper_Character_Data';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: true,
      CharData: [],
      addShape: false
    };

    const { navigate } = this.props.navigation;

    _handlePress = () =>
      this.setState({
        expanded: !this.state.expanded
      });
    let that = this;
  }

  save(data) {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }


  async load(){
    let that = this;
    await fetch('https://dndhelperapi.herokuapp.com/characters', {
      method: 'get'
    })
      .then((response) => {
        return response.json();
      })
      .then((events) => {
        that.setState({ CharData: events })
      })
      .catch(() => {
        return "fault";
      });
  }



  componentDidMount() {
    let that = this;
    this.load();
    // await fetch('https://dndhelperapi.herokuapp.com/characters', {
    //   method: 'get'
    // })
    //   .then((response) => {
    //     console.log(response)
    //     return response.json();
    //   })
    //   .then((events) => {
    //     console.log(events)
    //     that.setState({ CharData: event })
    //     console.log(events)
    //   })
    //   .catch(() => {
    //     return "fault";
    //   });


    // fetch("http://dndhelperapi.herokuapp.com/characters", {method: 'get'})
    //   .then(function (result) {
    //     console.log("yay");
    //     return result.json();
    //   })
    //   .then(function (event) {
    //     that.setState({ CharData: event });
    //     return event;
    //   })
    //   .catch(()=>{
    //     return "fault";
    //   });
  }
  // catch (error) {
  //   console.log('Error fetching Character Data', error);
  // }


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
    if(this.state.addShape==true){
      return(
        <AddShape CharData={this.state.CharData}/>
      )
    }
    const CharData = this.state.CharData;
    console.log(this.state.CharData)
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#000000' }}>
        <View style={{ flex: 1, backgroundColor: '#000000' }}>
        {CharData.map((Character, i) => (
          <CharacterMap key={i} Character={Character} navigation={this.props.navigation} />
        ))}
        </View>
        <Portal>
                    <FAB.Group
                        open={this.state.open}
                        icon={this.state.open ? 'today' : 'add'}
                        actions={[
                            { icon: 'add', label: 'Add Shape', onPress: () => this.setState({addShape: true}) },
                            { icon: 'add', label: 'Add Character', onPress: () => console.log('Add Character') },
                        ]}
                        onStateChange={({ open }) => this.setState({ open })}
                        onPress={() => {
                            if (this.state.open) {
                                // do something if the speed dial is open
                            }
                        }}
                    />
                </Portal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    color: '#FF003A'
  }
})