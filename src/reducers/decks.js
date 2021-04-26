import {ADD_DECK, REMOVE_DECK} from '../actions/decks';

const initialDecksData = [
  {
    id: 'deck-1-id',
    title: 'Friuts',
    count: 4,
  },
  {
    id: 'deck-2-id',
    title: 'Game',
    count: 3,
  },
  {
    id: 'deck-3-id',
    title: 'Game',
    count: 3,
  },
];

const decks = (state = initialDecksData, action) => {
  switch (action.type) {
    case ADD_DECK:
      return [...state, action.deck];
    case REMOVE_DECK:
      return state.filter(deck => deck.id !== action.id);
    default:
      return state;
  }
};

export default decks;
