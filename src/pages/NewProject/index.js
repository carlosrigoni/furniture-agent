import React from 'react';

import { Container, Title, Form, Input, Button, TextSubmit, InputHeader } from './styles';

export default function NewProject() {
  return (
    <Container>
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
