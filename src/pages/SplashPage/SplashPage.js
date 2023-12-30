import React, { Component } from 'react';
import {SafeAreaView ,StyleSheet, View, Image } from 'react-native';
import {StackActions} from '@react-navigation/native';

class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

componentDidMount() {
  setTimeout(() => {
    this.props.navigation.dispatch(StackActions.replace('HomePage'));
  }, 2000);
}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={require('../../assets/Images/logo.png')}
            style={styles.Image}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D8AA8'
  },
  Image:{
    height: 150,
    width: 150,
    marginHorizontal:110,
    marginVertical:210,
    borderRadius:20
  }

})

export default SplashPage;