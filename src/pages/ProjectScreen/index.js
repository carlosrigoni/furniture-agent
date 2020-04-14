import React from 'react';
import { TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
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
    navigation.navigate('Ambience')
  }

  return (
    <Container>
      <Header >
        <TouchableOpacity onPress={navigateToHome}>
          <Icon name="500px" size={22} color="#000" />
        </TouchableOpacity>

        <Title>Scenario</Title>

        <TouchableOpacity onPress={navigateToNewAmbience}>
          <Icon name="500px" size={22} color="#000" />
        </TouchableOpacity>
      </Header>

      <ProjectContainer>
        <ListHeader>
        <ProjectText>Novo apartamento</ProjectText>
        <Date>02/11/2020</Date>
        </ListHeader>
        <ProjectText>Carlos Daniel Rigoni</ProjectText>
        <ProjectText>Rua Joao Marciano</ProjectText>
      </ProjectContainer>

      <List
      keyboardShouldPersistTaps="handled"
      data={[1,2, 3]}
      keyExtractor={item => String(item)}
      renderItem={({ item }) =>  (
        <RoomSpace>
          <TitleAmbience>Sala de estar</TitleAmbience>
          <Room source={defaultRoomImg} />
        </RoomSpace>


      )}/>

    </Container>
  );
}
