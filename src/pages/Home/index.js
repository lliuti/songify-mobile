import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { 
  ListContainer,
  SongList,
  SongBox,
  CurrentSong,
} from './styles';

export default function Home() {
  return (
    <LinearGradient colors={['#f5f5f5', '#bfbfbf']} style={{ flex: 1, alignItems: 'center', padding: 40, }}>
      <ListContainer>
        <SongList>
          <SongBox>

          </SongBox>
          <SongBox>

          </SongBox>
          <SongBox>

          </SongBox>
        </SongList>
      </ListContainer>

      <CurrentSong>

      </CurrentSong>
    </LinearGradient>
  );
}
