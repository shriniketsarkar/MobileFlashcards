import { ADD_DECK_CARD, ADD_DECK, REMOVE_DECK } from '../actions/decks';

const initialDecksData = {
  '111111ziyjabvozdd253nd': {
    id: '111111ziyjabvozdd253nd',
    title: 'Earth Statistics',
    cards: [
      '8xf0y6ziyjabvozdd253nd',
      '9xf0y6ziyjabvozdd253nd',
      '10f0y6ziyjabvozdd253nd',
    ],
  },
  '222222ziyjabvozdd253nd': {
    id: '222222ziyjabvozdd253nd',
    title: 'Nervous System',
    cards: ['253nd8xf0y6ziyjabvozdd', 'bvozd9xf0y6ziyjad253nd'],
  },
  '333333ziyjabvozdd253nd': {
    id: '333333ziyjabvozdd253nd',
    title: 'Cars',
    cards: [],
  },
};

const decks = (state = initialDecksData, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck,
      };
    case REMOVE_DECK:
      let stateCopy = { ...state };
      delete stateCopy[action.id];
      return stateCopy;
    case ADD_DECK_CARD:
      const { cardId, deckId } = action.card;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          cards: state[deckId].cards.concat([cardId]),
        },
      };
    default:
      return state;
  }
};

export default decks;
