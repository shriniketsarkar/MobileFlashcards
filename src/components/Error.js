import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {styles} from './styles';

const Error = () => {
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
