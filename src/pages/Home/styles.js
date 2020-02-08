import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const ListContainer = styled.View`
  height: 180px;
  margin-bottom: 40px;
`;

export const SongList = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingBottom: 10, paddingTop: 10 },
  showHorizontalScrollIndicator: false,
})``;

export const SongBox = styled.View`
  width: 145px;
  height: 145px;
  background: #fff;
  elevation: 7;
  margin-right: 15px;
`;

export const CurrentSong = styled.View`
  width: 250px;
  height: 250px;
  background: #fff;
  elevation: 7;
  margin-bottom: 40px;
`;

export const ActionButtons = styled.View`
  flex-direction: row;
  padding: 10px 0;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin: 0 20px;
`;

export const PlayButton = styled.TouchableOpacity`
  margin: 0 20px;
  border-radius: 50;
  elevation: 20;
`;

