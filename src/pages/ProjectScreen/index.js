import React, { useEffect, useState } from 'react';
import { TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation, useRoute } from '@react-navigation/native'
import defaultRoomImg from '../../assets/default-room.jpg'
import getRealm from '~/services/realm'


import { Container, Title, Header,ProjectContainer, ListHeader, ProjectText, Date, List, TitleAmbience, Room, RoomSpace} from './styles';

export default function ProjectScreen() {
  const [ambiences, setAmbiences] = useState([])

  async function handleDeleteProject() {
    const realm = await getRealm()

    realm.write(() => {
      realm.delete(project);
    })
  }

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm()

      const data = realm.objects('Ambiente').sorted('id', true).filtered(`projetoId = ${project.id}`)

      setAmbiences(data)
      console.log('here');
    }
    loadRepositories()
  }, [route])


  const navigation = useNavigation()
  const route = useRoute()
  const project = route.params.project

  function navigateToHome() {
    navigation.navigate('HomeScreen')
  }

  function navigateToNewAmbience(projectId) {
    navigation.navigate('NewAmbience', { projectId })
  }

  function navigateToAmbience(ambience) {
    navigation.navigate('AmbienceScreen', { ambience })
  }

  return (
    <Container>
      <Header >
        <TouchableOpacity onPress={navigateToHome}>
          <AntDesign name="left" size={22} color="#fff" />
        </TouchableOpacity>

        <Title>Scenario</Title>

        <TouchableOpacity onPress={() => navigateToNewAmbience(project.id)}>
          <Entypo name="add-to-list" size={22} color="#fff"/>
        </TouchableOpacity>
      </Header>

      <ProjectContainer>
        <ListHeader>
          <ProjectText>{project.nomeProjeto}</ProjectText>
          <Date>12/6/2020</Date>
        </ListHeader>

        <ProjectText>{project.nomeCliente}</ProjectText>
        <ListHeader>
        <ProjectText>{project.endereco}</ProjectText>
          <TouchableOpacity onPress={handleDeleteProject}>
            <EvilIcons name="trash" size={28} color="#444"/>
          </TouchableOpacity>
        </ListHeader>
      </ProjectContainer>

      <List
      keyboardShouldPersistTaps="handled"
      data={ambiences}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) =>  (
        <RoomSpace onPress={() => navigateToAmbience(item)}>
          <TitleAmbience>{item.nome}</TitleAmbience>
          <Room source={defaultRoomImg} />
        </RoomSpace>


      )}/>

    </Container>
  );
}
