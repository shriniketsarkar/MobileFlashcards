import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerView: {
    height: 50,
    width: '97%',
    margin: 5,
    backgroundColor: '#fff',
    borderColor: 'green',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 2.49,
    borderRadius: 2,
  },
  headerText: {
    textShadowColor: 'salmon',
    textShadowOffset: {width: 1, height: 0},
    textShadowRadius: 10,
    fontWeight: '400',
    flex: 1,
    alignSelf: 'center',
    paddingTop: 10,
    fontSize: 30,
  },
});

const Header = () => {
  return (
    <View elevation={1} style={styles.headerView}>
      <Text style={styles.headerText}>Mobile Flashcards</Text>
    </View>
  );
};

export default Header;
