import { RESET_GAME, PLAY, END_GAME } from '../types/game.types';
import { playerTypes } from '../../utils/enums';
import formActions from '../actions/form.actions';

const isValidValue = (value, choicesValues = [], currentChoiceValue) => {
  if (!choicesValues.includes(value)) {
    if (value % currentChoiceValue === 0 || currentChoiceValue % value === 0) {
      return true;
    }
  }

  return false;
};

const findFirstDividerOrMultipleOfCurrentValue = (
  choices = [],
  currentChoice = {}
) => {
  let foundValue = -1;
  for (let value = 1; value < 100; value += 1) {
    if (
      isValidValue(
        value,
        choices.map((choice) => choice.value),
        currentChoice.value
      )
    ) {
      foundValue = value;
      break;
    }
  }

  return foundValue;
};

const resetGame = () => ({
  type: RESET_GAME,
});

const quitGame = ({ navigation }) => (dispatch) => {
  dispatch(endGame({ winnerType: playerTypes.COMUPTER, navigation }));
};

const endGame = ({ winnerType, navigation }) => (dispatch) => {
  dispatch({
    type: END_GAME,
    payload: { winnerType },
  });
  navigation.navigate('Score');
};

const playComputer = ({ navigation }) => (dispatch, getState) => {
  const { currentChoice, choices } = getState().game;

  const choice = {
    playerType: playerTypes.COMUPTER,
    uuid: Date.now(),
  };
  let value = -1;

  if (choices.length === 0) value = Math.floor(Math.random() * 100);
  else value = findFirstDividerOrMultipleOfCurrentValue(choices, currentChoice);

  choice.value = value;
  dispatch({
    type: PLAY,
    payload: { choice },
  });

  if (value === -1)
    dispatch(endGame({ winnerType: playerTypes.HUMAN, navigation }));
  else dispatch(formActions.resetForm());
};

const playHuman = ({ navigation, value }) => (dispatch, getState) => {
  const { currentChoice, choices } = getState().game;

  const choice = {
    playerType: playerTypes.HUMAN,
    value,
    uuid: Date.now(),
  };

  dispatch({
    type: PLAY,
    payload: { choice },
  });

  if (
    isValidValue(
      value,
      choices.map((choice) => choice.value),
      currentChoice.value
    )
  ) {
    setTimeout(() => {
      dispatch(playComputer({ navigation }));
    }, 1000);
  } else dispatch(endGame({ winnerType: playerTypes.COMUPTER, navigation }));
};

export default {
  resetGame,
  playComputer,
  playHuman,
  quitGame,
};
