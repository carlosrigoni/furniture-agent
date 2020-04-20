import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation, useRoute } from '@react-navigation/native'
import getRealm from '~/services/realm'

import { Container, Title, Header, List, ListContainer, ListHeader, Date, NameProject, NameCliente, Address } from './styles';

export default function HomeScreen() {
  const route = useRoute()
  const [projects, setProjects] = useState([])

  // const registred = route.params.registred || false

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm()

      const data = realm.objects('Projeto').sorted('dataAtualizacao', true)

      setProjects(data)
      console.log('here');
    }
    loadRepositories()
  }, [route])


  const navigation = useNavigation()


  function navigateToInfo() {
    navigation.navigate('InfoScreen')
  }

  function navigateToNewProject() {
    navigation.navigate('NewProject')
  }

  function navigateToProject(project) {
    navigation.navigate('ProjectScreen', { project })
  }

  return (
    <Container >
      <Header >
        <TouchableOpacity onPress={navigateToInfo}>
          <AntDesign name="infocirlce" size={22} color="#fff" />
        </TouchableOpacity>

        <Title>Scenario</Title>

        <TouchableOpacity onPress={navigateToNewProject}>
          <Entypo name="add-to-list" size={22} color="#fff"/>
        </TouchableOpacity>
      </Header>


      <List
        data={projects}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) =>  (

          <ListContainer>
            <TouchableOpacity onPress={(() => navigateToProject(item))}>
                <ListHeader>
                  <NameProject>{item.nomeProjeto}</NameProject>
                  <Date>{item.dataAtualizacao}</Date>
                </ListHeader>
                <NameCliente>{item.nomeCliente}</NameCliente>
                <Address>{item.endereco}</Address>
            </TouchableOpacity>
          </ListContainer>

        )}
      ></List>
    </Container>
  );
}
