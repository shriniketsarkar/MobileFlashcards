import {ADD_DECK, REMOVE_DECK} from '../actions/decks';

const initialDecksData = [
  {
    id: 'deck-1-id',
    title: 'Earth Statistics',
    cards: [
      {
        ques: 'What is the circumference of Earth?',
        ans: '24,901 mi',
      },
      {
        ques: 'What makes up Earths atmosphere?',
        ans: '78% nitrogen and 21% oxygen',
      },
      {
        ques: 'Is Earths atmosphere thin or thick?',
        ans: 'Extremely Thin',
      },
    ],
  },
  {
    id: 'deck-2-id',
    title: 'Nervous System',
    cards: [
      {
        ques: 'What does Cerebrum mean?',
        ans: 'Frontal lobe, parietal lobe, temporal lobe, and occipital lobe',
      },
      {
        ques: 'Function of Frontal Lobe?',
        ans: 'controls skilled motor functions, memory, and behavior',
      },
    ],
  },
  {
    id: 'deck-3-id',
    title: 'Cars',
    cards: [],
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
