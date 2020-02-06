import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  padding: 10px;
  padding-top: ${10 + StatusBar.currentHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  color: #666;
`;