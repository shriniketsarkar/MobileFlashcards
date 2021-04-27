import { ADD_CARD } from '../actions/cards';

const initialCardsData = {
  '8xf0y6ziyjabvozdd253nd': {
    ques: 'What is the circumference of Earth?',
    ans: '24,901 mi',
    id: '8xf0y6ziyjabvozdd253nd',
  },
  '9xf0y6ziyjabvozdd253nd': {
    ques: 'What makes up Earths atmosphere?',
    ans: '78% nitrogen and 21% oxygen',
    id: '9xf0y6ziyjabvozdd253nd',
  },
  '10f0y6ziyjabvozdd253nd': {
    ques: 'Is Earths atmosphere thin or thick?',
    ans: 'Extremely Thin',
    id: '10f0y6ziyjabvozdd253nd',
  },
  '253nd8xf0y6ziyjabvozdd': {
    ques: 'What does Cerebrum mean?',
    ans: 'Frontal lobe, parietal lobe, temporal lobe, and occipital lobe',
    id: '253nd8xf0y6ziyjabvozdd',
  },
  'bvozd9xf0y6ziyjad253nd': {
    ques: 'Function of Frontal Lobe?',
    ans: 'controls skilled motor functions, memory, and behavior',
    id: 'bvozd9xf0y6ziyjad253nd',
  },
};

const cards = (state = initialCardsData, action) => {
  switch (action.type) {
    case ADD_CARD:
      const { cardId, ques, ans } = action.card;
      return {
        ...state,
        [cardId]: {
          id: cardId,
          ques,
          ans,
        },
      };
    default:
      return state;
  }
};

export default cards;
