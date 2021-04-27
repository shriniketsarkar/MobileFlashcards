import { addDeckCard } from './decks';
import { addCard } from './cards';

// Add new Card data to Deck and Cards
export const handleAddCard = card => {
  return dispatch => {
    dispatch(addCard(card));
    dispatch(addDeckCard(card));
  };
};
