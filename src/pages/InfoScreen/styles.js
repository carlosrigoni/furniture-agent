import styled from 'styled-components/native';
import {getStatusBarHeight } from 'react-native-status-bar-height'

export const ButtonComeBack = styled.TouchableOpacity`
  position: absolute;
  padding-top: ${25 + getStatusBarHeight(true)}px;
  z-index: 1;


`;
