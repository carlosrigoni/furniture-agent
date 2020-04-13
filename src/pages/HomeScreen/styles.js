import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'
import {getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#10bac9'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}
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

`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`
  margin-top: 60px;

`;

export const ListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;


export const ListContainer = styled.View.attrs({
  numberOfLines: 1,
})`
  padding: 20px;
  border-radius: 4px;
  background: #FFF;
  margin-bottom: 15px;
`;

export const NameProject = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 18px;
  font-weight: bold;
  color: #666;
  margin-right: 20px;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: #666;
  text-align: right;
`;


export const NameCliente = styled.Text.attrs({
    numberOfLines: 1,
})`
  color: #444;
  margin-top: 5px;
  line-height: 20px;
`;

export const Address = styled.Text`
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`;


