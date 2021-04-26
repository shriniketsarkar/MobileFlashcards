import * as React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import Header from './Header';

const DeckItem = ({title, count}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{count} cards</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 4.49,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
  },
});

const Decks = props => {
  const renderItem = ({item}) => (
    <DeckItem title={item.title} count={item.count} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.decks}
        ListHeaderComponent={Header}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = ({decks}) => {
  return {
    decks,
  };
};

export default connect(mapStateToProps)(Decks);
