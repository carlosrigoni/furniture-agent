import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import getRealm from '~/services/realm'
import { Keyboard } from 'react-native'


import { Container, ButtonComeBack, Title, Form, Input, Button, TextSubmit, InputHeader } from './styles';

export default function NewProject() {

  const [ID, setID] = useState('')
  const [nameProject, setNameProject] = useState('')
  const [nameCliente, setNameCliente] = useState('')
  const [adress, setAdress] = useState('')

  const [error, setError] = useState(false)

  async function saveRepository() {

    await setID(Math.floor(Math.random() * 100000))

    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()



    const data = {
      id: ID,
      nomeProjeto: nameProject,
      nomeCliente: nameCliente,
      endereco: adress,
      dataAtualizacao: date
    };

    const realm = await getRealm()


    realm.write(() => {
      realm.create('Projeto', data, 'never')
    })


    return data
  }

  async function handleAddRepository() {
    try {
      if (nameProject === '' || nameCliente === '' || adress === '') {
        setError(true)
      } else {
        await saveRepository()
        setNameProject('')
        setNameCliente('')
        setAdress('')
        setError(false)
        Keyboard.dismiss()
        navigateToHome()
      }

    } catch (err) {
      setError(true)
      console.log('deu erro');
    }
  }

  // navigation
  const navigation = useNavigation()

  function navigateToHome() {
      navigation.navigate('HomeScreen', {})
    }

  return (
    <Container>
        <ButtonComeBack onPress={navigateToHome}>
          <AntDesign name="left" size={22} color="#fff" />
        </ButtonComeBack>
        <Title>Criar novo projeto</Title>
      <Form
        error={error}
      >

        <InputHeader>
          <Input
            value={nameProject}
            onChangeText={setNameProject}
            autoCorrect={false}
            placeholder="Nome do Projeto:"
          />
          <Input
            value={nameCliente}
            onChangeText={setNameCliente}
            autoCorrect={false}
            placeholder="Nome do Cliente:"
          />
        </InputHeader>

        <Input
          value={adress}
          onChangeText={setAdress}
          autoCorrect={false}
          placeholder="Endereco:"
        />

        <Button onPress={handleAddRepository}>
          <TextSubmit>Cadastrar</TextSubmit>
        </Button>

      </Form>
    </Container>
  );
}
