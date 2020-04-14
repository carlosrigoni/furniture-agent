import React from 'react';

import { Container, Title, Form, Input, Button, TextSubmit, InputHeader } from './styles';

export default function NewProject() {
  return (
    <Container>
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
