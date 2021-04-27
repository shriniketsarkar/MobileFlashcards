import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

const Error = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    fullBody: {
      flex: 1,
      width: '97%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 1,
      shadowRadius: 5.49,
      borderRadius: 20,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 15,
      alignSelf: 'center',
      marginLeft: 15,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullBody}>
        <Text style={styles.label}>
          Your deck does not have any question cards.
        </Text>
        <Text style={styles.label}>Please add cards before starting Quiz.</Text>
      </View>
    </SafeAreaView>
  );
};

export default Error;
