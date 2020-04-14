import React, { useState } from 'react';
import {Picker} from '@react-native-community/picker';


import { Container, Title, Form, Input, Button, TextSubmit, InputHeader } from './styles';

export default function NewProject() {
  const [type, setType] = useState('Tipo')


  return (
    <Container>
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
