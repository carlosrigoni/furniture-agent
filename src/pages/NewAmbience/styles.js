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

export const ButtonComeBack = styled.TouchableOpacity`
  position: absolute;
  padding-top: ${25 + getStatusBarHeight(true)}px;
  z-index: 1;


`;

export const Title = styled.Text`
  margin-top: 100px;
  text-align: center;
  font-size: 32px;
  color: #FFF;
  font-weight: bold;
  padding: 0 20px;
`;

export const Form = styled.View`
  margin-top: 10px;
  background-color: #fff;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 4px;
  padding: 20px;dfkfs



`;

export const InputHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  font-size: 14px;

`;


export const Button = styled.TouchableOpacity`
  background-color: #3870FF;
  width: 100%;
  height: 42px;
  margin-top: 20px;
  border-radius: 6px;

`;

export const TextSubmit = styled.Text`
  text-align: center;
  top: 7px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const TextImage = styled.Text`
  text-align: center;
  font-size: 15px;
  color: #444;
  font-weight: bold;
`;

export const ButtonGetImage = styled.TouchableOpacity`
  border-radius: 6px;

`;

export const Room = styled.Image`
  width: 90%;
  height: 200px;
  left: 15px;
  border-radius: 4px;
`;

