import React, { useEffect, useState } from 'react';
import { TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation, useRoute } from '@react-navigation/native'
import getRealm from '~/services/realm'


import { Container, Title, Header,ProjectContainer, ListHeader, ProjectText, Date, List, TitleAmbience, Room, RoomSpace, ListHeaderAmbience, DeleteAmbienceButton} from './styles';

export default function ProjectScreen() {
  const [ambiences, setAmbiences] = useState([])
  const navigation = useNavigation()
  const route = useRoute()
  const project = route.params.project


  async function handleDeleteProject() {
    const realm = await getRealm()

    const data = realm.objects('Projeto').filtered(`id = ${project.id}`)

    realm.write(() => {
      try {
        realm.delete(data);
        navigateToHome()

      } catch (error) {
        console.log(error);
      }
    })
  }

  async function handleDeleteAmbience(ambience) {
    const realm = await getRealm()

    const data = realm.objects('Ambiente').filtered(`id = ${ambience.id}`)

    realm.write(() => {
      try {
        realm.delete(data);
        navigation.navigate('ProjectScreen', {})

      } catch (error) {
        console.log(error);
      }
    })
  }

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm()

      const data = realm.objects('Ambiente').sorted('id', true).filtered(`projetoId = ${project.id}`)

      setAmbiences(data)
    }
    loadRepositories()
  }, [route])




  function navigateToHome() {
    navigation.navigate('HomeScreen', {})
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
          <Date>{project.dataAtualizacao}</Date>
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
          <ListHeaderAmbience>
            <TitleAmbience>{item.nome}</TitleAmbience>
            <DeleteAmbienceButton onPress={() => handleDeleteAmbience(item)}>
              <EvilIcons name="trash" size={24} color="#fff"/>
            </DeleteAmbienceButton>

          </ListHeaderAmbience>
          <Room source={{uri: item.image}} />

        </RoomSpace>


      )}/>

    </Container>
  );
}
