import React from 'react';
import { View } from 'react-native';

import Container from '../helpers/Container';
import AppBar from '../helpers/AppBar';
import Text from '../helpers/Text';

const Rules = ({ navigation }) => {
  return (
    <Container>
      <AppBar navigation={navigation} />
      <View style={{ marginTop: 32 }}>
        <Text.Bold>Le jeu possède 3 règles</Text.Bold>
        <Text style={{ marginTop: 16 }}>
          Le Joueur 1 choisit un nombre entre 1 et 100.
        </Text>
        <Text style={{ marginTop: 8 }}>
          À tour de rôle, chaque joueur doit choisir un nombre parmi les
          multiples ou les diviseurs du nombre choisi précédemment par son
          adversaire et inférieur à 100.
        </Text>
        <Text style={{ marginTop: 8 }}>
          Un nombre ne peut être joué qu'une seule fois.
        </Text>
        <Text style={{ marginTop: 8 }}>
          Le perdant étant le joueur qui ne trouve plus de multiples ou de
          diviseurs communs au nombre précédemment choisi.
        </Text>
      </View>
    </Container>
  );
};

export default Rules;
