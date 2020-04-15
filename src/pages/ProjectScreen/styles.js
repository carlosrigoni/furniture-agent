import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'
import {getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#10bac9'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #FFF;
  font-weight: bold;
  padding: 0 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;

`;

export const ProjectContainer = styled.View`
  margin-top: 15px;
  background-color: #fff;
  margin-left: 19px;
  margin-right: 19px;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 15px;

`;

export const ListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProjectText = styled.Text`
  color: #666;
  font-weight: bold;
  margin-top: 5px;
  line-height: 20px;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: #666;
  text-align: right;

`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`

`;

export const RoomSpace = styled.TouchableOpacity`
  margin-bottom: 15px;
  border-radius: 4px;
  width: 100%;
  height: 240px;
`;

export const TitleAmbience = styled.Text`
  margin-top: 5px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;


`;

export const Room = styled.Image`
margin-top: 3px;
  width: 90%;
  height: 200px;
  left: 15px;
  border-radius: 4px;
`;

