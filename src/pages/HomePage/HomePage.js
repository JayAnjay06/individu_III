import React, { Component } from 'react'
import {View, Text,SafeAreaView,StyleSheet} from 'react-native'

//pages component
import Header from '../../component/Header/Header'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <SafeAreaView>
        <Header/>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  
});
export default HomePage;