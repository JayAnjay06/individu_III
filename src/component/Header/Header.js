import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React from 'react';
import MenuOutline from '../../assets/svg/menu-outline.svg';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity>
          <MenuOutline style={styles.menu} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Selamat Datang</Text>
      <Text style={styles.text}>Di Aplikasi Kami</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 350,
    flexDirection: 'row',
  },
  menu: {
    height: 40,
    width: 40,
    marginVertical: 3,
    marginLeft: 10,
    color: 'gray',
  },
  text: {
    marginLeft: 15,
    fontSize: 15,
  },
});
