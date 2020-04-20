import React, { useEffect, useState } from 'react';
import defaultRoomImg from '../../assets/default-room.jpg'
import { useNavigation, useRoute } from '@react-navigation/native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import getRealm from '~/services/realm'

import { Container, Header, ButtonComeBack, Room, Title, ButtonsAdd, ButtonAdd, TextButton, List, DeviceContainer, DeviceText, DeviceId, TrashButton} from './styles';

export default function AmbienceScreen() {
  const route = useRoute()
  const ambience = route.params.ambience

  const [devices, setDevices] = useState([])

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm()

      const data = realm.objects('Device').sorted('id', true).filtered(`ambienceId = ${ambience.id}`)

      setDevices(data)
      console.log('here');
    }
    loadRepositories()
  }, [route])

  const navigation = useNavigation()

  function navigateToProject() {
    navigation.navigate('ProjectScreen')
  }


  function navigateToNewDevice() {
    navigation.navigate('NewDevice', { ambience })
  }

  function navigateToNewDeviceScenario() {
    navigation.navigate('NewDeviceScenario', { ambience })
  }

  async function handleDeleteDevice(device) {
    const realm = await getRealm()

    const data = realm.objects('Device').filtered(`id = ${device.id}`)

    realm.write(() => {
      try {
        realm.delete(data);
        navigation.navigate('AmbienceScreen', {})

      } catch (error) {
        console.log(error);
      }
    })
  }


  return (
    <Container>
      <Header>
      <ButtonComeBack onPress={navigateToProject}>
          <AntDesign name="left" size={22} color="#fff" />
        </ButtonComeBack>
      <Room source={{uri: ambience.image}} />
      <Title>{ambience.nome}</Title>
      </Header>

      <ButtonsAdd>
        <ButtonAdd onPress={navigateToNewDeviceScenario}>
          <TextButton>ADD SCENARIO</TextButton>
        </ButtonAdd>

        <ButtonAdd onPress={navigateToNewDevice}>
          <TextButton>ADD OUTRO</TextButton>
        </ButtonAdd>
      </ButtonsAdd>

      <List keyboardShouldPersistTaps="handled"
      data={devices}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) =>  (
        <DeviceContainer>
          <DeviceText>{item.nome} - {item.especificacao}   <DeviceId>id: {item.id}</DeviceId></DeviceText>
          <TrashButton onPress={() => handleDeleteDevice(item)}>
            <EvilIcons name="trash" size={28} color="#fff"/>
          </TrashButton>
        </DeviceContainer>

      )}/>


    </Container>
  );
}
