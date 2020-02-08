import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  padding-top: ${StatusBar.currentHeight}px;
`;