import { Text } from 'react-native';
import styled from 'styled-components';

const textColors = {
  white: '#rgb(255, 255, 255)',
  black: '#rgb(0, 0, 0)',
};

const DefaultText = styled.Text`
  font-family: 'Orbitron_400Regular';
  font-size: ${(props) => (props.small ? '12px' : '14px')};
`;

const BoldText = styled.Text`
  font-family: 'Orbitron_500Medium';
  font-size: ${(props) => (props.small ? '12px' : '14px')};
  color: ${(props) =>
    props.color ? textColors[props.color] : textColors.white};
`;

DefaultText.Bold = BoldText;

export default DefaultText;
