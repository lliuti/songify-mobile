import styled from 'styled-components/native';

export const ListContainer = styled.View`
  height: 180px;
  margin-bottom: 50px;
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
  width: 100%;
  height: 350px;
  background: #fff;
  elevation: 7;
`;