import React from 'react';
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Container, ButtonComeBack, Title, Form, Input, Button, TextSubmit, InputHeader } from './styles';

export default function NewProject() {
  const navigation = useNavigation()

  function navigateToAmbience() {
      navigation.navigate('AmbienceScreen')
    }

  return (
    <Container>
        <ButtonComeBack onPress={navigateToAmbience}>
          <AntDesign name="left" size={22} color="#fff" />
        </ButtonComeBack>
        <Title>Adicionar dispositivo</Title>
      <Form>

        <InputHeader>
          <Input
            autoCorrect={false}
            placeholder="Dispositivo ID:"
          />
          <Input
            autoCorrect={false}
            placeholder="Nome do dispositivo:"
          />
        </InputHeader>

        <Input
          autoCorrect={false}
          placeholder="Fabricante:"
        />

        <Button>
          <TextSubmit>Adicionar</TextSubmit>
        </Button>

      </Form>
    </Container>
  );
}
