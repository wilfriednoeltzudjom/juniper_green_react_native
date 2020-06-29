import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';
import styled from 'styled-components';

import { playerTypes } from '../../utils/enums';

import Text from '../helpers/Text';

const StyledChoice = styled.View`
  width: 50px;
  height: 50px;
  margin: 8px;
  border-radius: 25px;
  border-width: 1px;
  border-color: '#rgb(186,232,232)';
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Choice = ({ value }) => {
  return (
    <StyledChoice>
      <Text>{value}</Text>
    </StyledChoice>
  );
};

const Choices = ({ title, data = [] }) => {
  return (
    <View style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Text.Bold color="black">{title}</Text.Bold>
      <FlatList
        data={data}
        renderItem={({ item }) => <Choice value={item.value} />}
        keyExtractor={(item) => item.uuid}
        style={{ marginTop: 8 }}
      />
    </View>
  );
};

const ChoicesArea = () => {
  const [computerChoices, setComputerChoices] = useState([]);
  const [humanChoices, setHumanChoices] = useState([]);
  const choices = useSelector((state) => state.game.choices);
  useEffect(() => {
    if (choices && choices.length > 0) {
      setComputerChoices(
        choices
          .filter((choice) => choice.playerType === playerTypes.COMUPTER)
          .reverse()
      );
      setHumanChoices(
        choices
          .filter((choice) => choice.playerType === playerTypes.HUMAN)
          .reverse()
      );
    }
  }, [choices]);

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
      }}
    >
      <Choices title="Vos choix" data={humanChoices} />
      <Choices title="Choix de l'ordinateur" data={computerChoices} />
    </View>
  );
};

export default ChoicesArea;
