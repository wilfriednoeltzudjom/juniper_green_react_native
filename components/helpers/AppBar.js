import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from '../../utils/styles';

import Button from './Button';
import Text from './Text';

const AppBar = ({ navigation, showReset }) => {
  return (
    <View>
      <Button color="light" onPress={() => navigation.popToTop()}>
        <Text.Bold> {'<'} Retour à l'accueil</Text.Bold>
      </Button>
      {showReset && (
        <Button
          color="secondary"
          onPress={() => navigation.popToTop()}
          style={{ marginTop: 16 }}
        >
          <Text.Bold> Reinitialiser</Text.Bold>
        </Button>
      )}
    </View>
  );
};

AppBar.propTypes = {
  showReset: PropTypes.bool,
};

AppBar.defaultProps = {
  showReset: false,
};

export default AppBar;
