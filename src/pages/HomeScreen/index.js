import React from 'react';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

import { Container, Title, Header, List, ListContainer, ListHeader, Date, NameProject, NameCliente, Address } from './styles';

export default function HomeScreen() {
  const navigation = useNavigation()


  function navigateToInfo() {
    navigation.navigate('InfoScreen')
  }

  function navigateToNewProject() {
    navigation.navigate('NewProject')
  }

  function navigateToProject() {
    navigation.navigate('ProjectScreen')
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
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            nameProject: "Novo Apartamento",
            nameCliente: "Carlos Daniel Rigoni de Freitas",
            date: "02/06/2020",
            address: "Rua Joao Fivela Junqueira Martins Bairro Sao joao"
          },
        {
          id: 2,
          nameProject: "Casa Nova",
          nameCliente: "Joao Pedro Marques",
          date: "02/06/2020",
          address: "Rua Joao Martins Bairro Sao joao"
        },
      ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) =>  (

          <ListContainer>
            <TouchableOpacity onPress={navigateToProject}>
                <ListHeader>
                  <NameProject>{item.nameProject}</NameProject>
                  <Date>{item.date}</Date>
                </ListHeader>
                <NameCliente>{item.nameCliente}</NameCliente>
                <Address>{item.address}</Address>
            </TouchableOpacity>
          </ListContainer>

        )}
      ></List>
    </Container>
  );
}
