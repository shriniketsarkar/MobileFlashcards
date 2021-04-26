export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

export const addDeck = deck => {
  return {
    type: ADD_DECK,
    deck,
  };
};

export const removeDeck = id => {
  return {
    type: REMOVE_DECK,
    id,
  };
};
