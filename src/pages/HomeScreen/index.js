import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'


import { Container, Title } from './styles';

export default function HomeScreen() {
  return (
    <Container >
      <View>
        <Title>Projetos</Title>

        <Icon name="500px" size={22} color="#000" />
      </View>
    </Container>
  );
}
