import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import gameActions from '../../store/actions/game.actions';

import Container from '../helpers/Container';
import AppBar from '../helpers/AppBar';
import ChoicesArea from '../core/ChoicesArea';
import Form from '../core/Form';

const Game = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameActions.playComputer({ navigation }));

    return () => {
      dispatch(gameActions.resetGame());
    };
  }, []);

  return (
    <Container>
      <AppBar navigation={navigation} showReset />
      <Form navigation={navigation} />
      <ChoicesArea />
    </Container>
  );
};

export default Game;
