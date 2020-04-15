import React from 'react';
import { TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native'
import defaultRoomImg from '../../assets/default-room.jpg'

import { Container, Title, Header,ProjectContainer, ListHeader, ProjectText, Date, List, TitleAmbience, Room, RoomSpace} from './styles';

export default function ProjectScreen() {
  const navigation = useNavigation()

  function navigateToHome() {
    navigation.navigate('HomeScreen')
  }

  function navigateToNewAmbience() {
    navigation.navigate('NewAmbience')
  }

  function navigateToAmbience() {
    navigation.navigate('AmbienceScreen')
  }

  return (
    <Container>
      <Header >
        <TouchableOpacity onPress={navigateToHome}>
          <AntDesign name="left" size={22} color="#fff" />
        </TouchableOpacity>

        <Title>Scenario</Title>

        <TouchableOpacity onPress={navigateToNewAmbience}>
          <Entypo name="add-to-list" size={22} color="#fff"/>
        </TouchableOpacity>
      </Header>

      <ProjectContainer>
        <ListHeader>
          <ProjectText>Novo apartamento</ProjectText>
          <Date>02/11/2020</Date>
        </ListHeader>

        <ListHeader>
          <ProjectText>Carlos Daniel Rigoni</ProjectText>
          <TouchableOpacity>
            <EvilIcons name="trash" size={28} color="#444"/>
          </TouchableOpacity>
        </ListHeader>
        <ProjectText>Rua Joao Marciano</ProjectText>
      </ProjectContainer>

      <List
      keyboardShouldPersistTaps="handled"
      data={[1,2, 3]}
      keyExtractor={item => String(item)}
      renderItem={({ item }) =>  (
        <RoomSpace onPress={navigateToAmbience}>
          <TitleAmbience>Sala de estar</TitleAmbience>
          <Room source={defaultRoomImg} />
        </RoomSpace>


      )}/>

    </Container>
  );
}
