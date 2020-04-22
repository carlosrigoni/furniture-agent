import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import getRealm from '~/services/realm'
import { Keyboard } from 'react-native'

import { Container, ButtonComeBack, Title, Form, Input, Button, TextSubmit, InputHeader } from './styles';

export default function NewProject() {
  const route = useRoute()
  const ambienceId = route.params.ambience.id

  const [ID, setID] = useState()
  const [name, setName] = useState('')
  const [especification, setEspecification] = useState('')

  const [error, setError] = useState(false)

  async function saveRepository() {


    const data = {
      id: Number(ID),
      ambienceId: Number(ambienceId),
      nome: name,
      especificacao: especification,
    };

    const realm = await getRealm()


    realm.write(() => {
      realm.create('Device', data, 'modified')
    })


    return data
  }

  async function handleAddRepository() {
    try {
      if (ID == '' || name === '' || especification === '') {
        setError(true)
      } else {
        await saveRepository()
        setID('')
        setName('')
        setEspecification('')
        setError(false)
        Keyboard.dismiss()
        navigateToAmbienceRegistred()
      }

    } catch (err) {
      setError(true)
      console.log('deu erro');
    }
  }

  const navigation = useNavigation()

  function navigateToAmbience() {
      navigation.navigate('AmbienceScreen')
    }

  function navigateToAmbienceRegistred() {
    navigation.navigate('AmbienceScreen', { registred: true })
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
            value={ID}
            onChangeText={setID}
            autoCorrect={false}
            placeholder="Dispositivo ID:"
          />
          <Input
            value={name}
            onChangeText={setName}
            autoCorrect={false}
            placeholder="Nome do dispositivo:"
          />
        </InputHeader>

        <Input
          value={especification}
          onChangeText={setEspecification}
          autoCorrect={false}
          placeholder="Fabricante:"
        />

        <Button onPress={handleAddRepository}>
          <TextSubmit>Adicionar</TextSubmit>
        </Button>

      </Form>
    </Container>
  );
}
