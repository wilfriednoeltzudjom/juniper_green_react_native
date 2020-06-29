import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../../utils/styles';
import formActions from '../../store/actions/form.actions';
import gameActions from '../../store/actions/game.actions';
import { playerTypes } from '../../utils/enums';

import Badge from '../helpers/Badge';
import Text from '../helpers/Text';
import Input from '../helpers/Input';
import Row from '../helpers/Row';
import Button from '../helpers/Button';

const Form = ({ navigation }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.value);

  const [isHumanTurn, setHumanTurn] = useState(false);
  const choices = useSelector((state) => state.game.choices);
  useEffect(() => {
    if (choices && choices.length > 0) {
      if (choices[choices.length - 1].playerType === playerTypes.COMUPTER) {
        setHumanTurn(true);
      } else setHumanTurn(false);
    }
  }, [choices]);

  const validValue = () => {
    const numericValue = Number(value);
    if (value && !isNaN(numericValue))
      dispatch(gameActions.playHuman({ navigation, value: numericValue }));
  };

  const quitGame = () => {
    dispatch(gameActions.quitGame({ navigation }));
  };

  return (
    <View style={styles.form}>
      {isHumanTurn && (
        <Badge>
          <Text.Bold small color="black">
            C'est à vous !
          </Text.Bold>
        </Badge>
      )}
      <Input
        keyboardType="numeric"
        placeholder="Votre choix"
        style={{ marginTop: 24 }}
        value={value}
        onChangeText={(text) =>
          dispatch(formActions.changeValue({ value: text }))
        }
      />
      <Row>
        <Button onPress={validValue} style={{ marginTop: 16 }}>
          <Text.Bold>Valider</Text.Bold>
        </Button>
        <Button color="secondary" onPress={quitGame} style={{ marginTop: 16 }}>
          <Text.Bold>Quitter</Text.Bold>
        </Button>
      </Row>
    </View>
  );
};

export default Form;
