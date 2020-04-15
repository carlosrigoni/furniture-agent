import React, { useState } from 'react';
import {Picker} from '@react-native-community/picker';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

import { Container, ButtonComeBack, Title, Form, Input, Button, TextSubmit, InputHeader } from './styles';

export default function NewProject() {
  const navigation = useNavigation()

  function navigateToAmbience() {
      navigation.navigate('AmbienceScreen')
    }

  const [type, setType] = useState('Tipo')

  return (
    <Container>
        <ButtonComeBack onPress={navigateToAmbience}>
          <AntDesign name="left" size={22} color="#fff" />
        </ButtonComeBack>
        <Title>Adicionar dispositivo Scenario</Title>
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

        <Picker
          selectedValue={type}
          style={{height: 50, width: 230}}
          onValueChange={(itemValue, itemIndex) =>
            setType(itemValue)
          }>
          <Picker.Item label="ModuloIluminacao" value="ModuloIluminacao" />
          <Picker.Item label="Teclados" value="Teclados" />
          <Picker.Item label="ModuloControleCortina" value="ModuloControleCortina" />
        </Picker>

        <Button>
          <TextSubmit>Adicionar</TextSubmit>
        </Button>

      </Form>
    </Container>
  );
}
