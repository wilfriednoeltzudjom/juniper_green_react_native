import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { playerTypes } from '../../utils/enums';
import gameActions from '../../store/actions/game.actions';

import HandleBack from '../helpers/HandleBack';
import Container from '../helpers/Container';
import AppBar from '../helpers/AppBar';
import Button from '../helpers/Button';
import Text from '../helpers/Text';
import ChoicesArea from '../core/ChoicesArea';

const Score = ({ navigation }) => {
  const dispatch = useDispatch();

  const goToHomePage = () => {
    dispatch(gameActions.resetGame());
    navigation.navigate('Home');
  };

  const winnerType = useSelector((state) => state.game.winnerType);
  const choices = useSelector((state) => state.game.choices);

  const [choicesCount, setChoicesCount] = useState(0);
  useEffect(() => {
    if (choices && choices.length > 0) setChoicesCount(choices.length - 1);
  }, [choices]);

  return (
    <HandleBack onBack={goToHomePage}>
      <Container>
        <AppBar navigation={navigation} />
        <Button style={{ marginTop: 16 }} onPress={goToHomePage}>
          <Text.Bold>Rejouer</Text.Bold>
        </Button>

        {winnerType === playerTypes.HUMAN && (
          <Text style={{ marginTop: 24 }}>
            Vous avez gagné en {choicesCount} coups
          </Text>
        )}
        {winnerType === playerTypes.COMUPTER && (
          <Text style={{ marginTop: 24 }}>
            Vous avez perdu en {choicesCount} coups
          </Text>
        )}

        <ChoicesArea />
      </Container>
    </HandleBack>
  );
};

export default Score;
