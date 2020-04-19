import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'
import {getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#10bac9'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: ${getStatusBarHeight(true)}px
`;


export const Header = styled.View`
  background-color: #317CEC;
`;

export const Room = styled.Image`
  width: 100%;
  height: 250px;
`;

export const Title = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 23px;
  line-height: 25px;
  text-align: center;
  color: #fff;
  padding: 15px;

`;

export const ButtonsAdd = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  background-color: #fff;
  padding: 13px;
  width: 40%;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: #317CEC;
  text-align: center;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`
  left: 14px;

`;

export const DeviceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 3px;
  margin-bottom: 15px;
`;

export const DeviceText = styled.Text`
  color: #fff;
`;

export const DeviceId = styled.Text`
  color: #fff;
  text-align: right;

`;

export const TrashButton = styled.TouchableOpacity`
  bottom: 1px;
  right: 20px;

`;

export const ButtonComeBack = styled.TouchableOpacity`
  position: absolute;
  padding-top: ${25 + getStatusBarHeight(true)}px;
  z-index: 1;


`;
