import * as React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';

const DeckItem = ({title, count}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{count} cards</Text>
  </View>
);

const FlatListHeader = () => {
  return (
    <View
      elevation={1}
      style={{
        height: 50,
        width: '97%',
        margin: 5,
        backgroundColor: '#fff',
        border: 2.9,
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
      }}>
      <Text
        style={{
          textShadowColor: 'salmon',
          textShadowOffset: {width: 1, height: 0},
          textShadowRadius: 10,
          fontSize: 20,
          fontWeight: '400',
          flex: 1,
          alignSelf: 'center',
          paddingTop: 10,
          fontSize: 30,
        }}>
        Mobile Flashcards
      </Text>
    </View>
  );
};

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
        ListHeaderComponent={FlatListHeader}
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
