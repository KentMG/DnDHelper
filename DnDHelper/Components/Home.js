import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import CharacterMap from './Character';
import { AsyncStorage } from 'react-native';


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Shyael:<password>@dndhelper-kyqmm.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });



const STORAGE_KEY = 'DNDHelper_Character_Data';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: true,
      CharData: []
    };

    const { navigate } = this.props.navigation;

    _handlePress = () =>
      this.setState({
        expanded: !this.state.expanded
      });
  }

  save(data) {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }


  async load() {
    try {
      let CharData = await AsyncStorage.getItem(STORAGE_KEY);

      if (CharData === null) {
        return [{
          Name: 'Example',
          Stats: {
            Class: 'Druid',
            HP: '45',
            AC: '12'
          },
          WildShapes: [
            {
              Name: 'Dire Wolf',
              Stats: {
                HP: '37',
                AC: '14',
                Speed: '50'
              },
              Abilities: [
                'Pack Tactics',
                'Keen Smell',
                'Keen Hearing'
              ]
            }]
        }];
      }
      let toReturn = JSON.parse(CharData);
      return toReturn;
    }
    catch (error) {
      console.log('Error fetching Character Data', error);
    }
  }

  componentDidMount() {
    let that = this;

    client.connect(err => {
      const collection = client.db("DnDHelper").collection("Characters");
      let characters = collection.find({});
      that.setState({CharData: characters.json()})
      client.close();
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
    const CharData = this.state.CharData;
    return (
      <View style={{ flex: 1, backgroundColor: '#000000' }}>
        {CharData.map((Character, i) => (
          <CharacterMap key={i} Character={Character} navigation={this.props.navigation} />
        ))}
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