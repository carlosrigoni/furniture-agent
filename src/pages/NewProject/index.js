import React from 'react';
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Container, ButtonComeBack, Title, Form, Input, Button, TextSubmit, InputHeader } from './styles';

export default function NewProject() {
  const navigation = useNavigation()

  function navigateToHome() {
      navigation.navigate('HomeScreen')
    }

  return (
    <Container>
        <ButtonComeBack onPress={navigateToHome}>
          <AntDesign name="left" size={22} color="#fff" />
        </ButtonComeBack>
        <Title>Criar novo projeto</Title>
      <Form>

        <InputHeader>
          <Input
            autoCorrect={false}
            placeholder="Nome do Projeto:"
          />
          <Input
            autoCorrect={false}
            placeholder="Nome do Cliente:"
          />
        </InputHeader>

        <Input
          autoCorrect={false}
          placeholder="Endereco:"
        />

        <Button>
          <TextSubmit>Cadastrar</TextSubmit>
        </Button>

      </Form>
    </Container>
  );
}
