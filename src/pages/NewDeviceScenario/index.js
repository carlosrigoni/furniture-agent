import React, { useState } from 'react';
import {Picker} from '@react-native-community/picker';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Keyboard } from 'react-native'
import getRealm from '~/services/realm'


import { Container, ButtonComeBack, Title, Form, Input, Button, TextSubmit, InputHeader } from './styles';

export default function NewProject() {
  const navigation = useNavigation()

  const route = useRoute()
  const ambienceId = route.params.ambience.id

  const [ID, setID] = useState()
  const [name, setName] = useState('')
  const [especification, setEspecification] = useState('')

  const [error, setError] = useState(false)

  async function saveRepository() {
    console.log('aqui foi 12');


    const data = {
      id: Number(ID),
      ambienceId: Number(ambienceId),
      nome: name,
      especificacao: especification,
    };
    console.log(data.id);
    console.log('aqui foi 22');

    const realm = await getRealm()
    console.log('aqui foi 32');


    realm.write(() => {
      realm.create('Device', data, 'modified')
    })
    console.log('aqui foi 42');


    return data
  }

  async function handleAddRepository() {
    try {
      if (ID == '' || name === '' || especification === '') {
        setError(true)
      } else {
        console.log('aqui foi 1');
        await saveRepository()
        console.log('aqui foi 2');
        setID('')
        setName('')
        setEspecification('')
        console.log('aqui foi 3');
        setError(false)
        console.log('aqui foi 4');
        Keyboard.dismiss()
        navigateToAmbienceRegistred()
        console.log('deu certinho');
      }

    } catch (err) {
      setError(true)
      console.log('deu erro');
    }
  }

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
        <Title>Adicionar dispositivo Scenario</Title>
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

        <Picker
          selectedValue={especification}
          style={{height: 50, width: 230}}
          onValueChange={(itemValue, itemIndex) =>
            setEspecification(itemValue)
          }>
          <Picker.Item label="Escolha um tipo" value="" />
          <Picker.Item label="ModuloIluminacao" value="ModuloIluminacao" />
          <Picker.Item label="Teclados" value="Teclados" />
          <Picker.Item label="ModuloControleCortina" value="ModuloControleCortina" />
        </Picker>

        <Button onPress={handleAddRepository}>
          <TextSubmit>Adicionar</TextSubmit>
        </Button>

      </Form>
    </Container>
  );
}
