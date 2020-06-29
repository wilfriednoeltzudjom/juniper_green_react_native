import { TouchableHighlight, Text } from 'react-native';
import styled from 'styled-components';

const buttonsColors = {
  secondary: '#rgb(57,62,70)',
  primary: '#rgb(70, 48, 235)',
  light: '#rgb(154,206,255)',
};

const Button = styled.TouchableHighlight`
  background-color: ${(props) =>
    props.color ? buttonsColors[props.color] : buttonsColors.primary};
  padding: 12px;
  border-radius: 5px;
`;

export default Button;
