import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  deckContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  info: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
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
  input: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 5,
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '90%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
    marginLeft: 15,
  },
  detailsLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginBottom: 10,
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
  quizResult: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizResultLbl: {
    fontSize: 20,
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
});