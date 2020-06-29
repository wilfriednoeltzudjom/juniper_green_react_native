import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../../utils/styles';

import Container from '../helpers/Container';
import Center from '../helpers/Center';
import Header from '../helpers/Header';
import Button from '../helpers/Button';
import Text from '../helpers/Text';

const Home = ({ navigation }) => {
  const goToRulesPage = () => navigation.navigate('Rules');
  const goToGamePage = () => navigation.navigate('Game');

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <Container>
          <Center>
            <Header.SubTitle>
              Bienvenu, voici le jeu Juniper Green
            </Header.SubTitle>

            <Button onPress={goToRulesPage} style={{ marginTop: 24 }}>
              <Text.Bold color="white">Les règles du jeu</Text.Bold>
            </Button>
            <Button onPress={goToGamePage} style={{ marginTop: 16 }}>
              <Text.Bold color="white">Commencer une partie</Text.Bold>
            </Button>
          </Center>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default Home;
