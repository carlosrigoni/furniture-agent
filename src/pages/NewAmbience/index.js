import React from 'react';
import ImagePicker from 'react-native-image-picker';
import defaultRoomImg from '../../assets/default-room.jpg'

import { Container, Title, Form, Input, Button, TextSubmit, ButtonGetImage, Room, TextImage } from './styles';

export default function NewProject() {
  const options = {
    title: 'Selecione uma foto do ambiente',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  function getImage() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        const source = { uri: response.uri };
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: source,
        });
      }
    })
  }

  return (
    <Container>
        <Title>Criar novo ambiente</Title>
      <Form>

        <Input
          autoCorrect={false}
          placeholder="Nome do ambiente"
        />

        <ButtonGetImage onPress={getImage}>
          <Room source={defaultRoomImg} />
          <TextImage>Abrir Camera</TextImage>
        </ButtonGetImage>
        <Button>
          <TextSubmit>Cadastrar</TextSubmit>
        </Button>

      </Form>
    </Container>
  );
}
