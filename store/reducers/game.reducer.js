import { RESET_GAME, PLAY, END_GAME } from '../types/game.types';

const initState = () => ({
  choices: [],
  currentChoice: {},
  winnerType: '',
});

export default (state = initState(), action) => {
  switch (action.type) {
    case RESET_GAME:
      return {
        ...state,
        ...initState(),
      };
    case PLAY:
      return {
        choices: [...state.choices, action.payload.choice],
        currentChoice: action.payload.choice,
        winnerType: state.winnerType,
      };
    case END_GAME:
      return {
        choices: state.choices,
        currentChoice: state.currentChoice,
        winnerType: action.payload.winnerType,
      };
    default:
      return state;
  }
};
